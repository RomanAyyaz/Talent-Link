// require('dotenv').config();
// const OpenAI = require('openai');
// const oa     = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// const Pref   = require('../Models/CopilotModels/CopilotPref');
// const Job    = require('../Models/JobModels/Job');
// const JobApp = require('../Models/JobModels/JobApplication');

// /** Simple sleep utility */
// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// /** Wraps the OpenAI call with retries + exponential back-off */
// async function generateCoverLetter(prompt) {
//   const maxRetries = 3;
//   let backoff = 1000;

//   for (let attempt = 0; attempt < maxRetries; attempt++) {
//     try {
//       const res = await oa.chat.completions.create({
//         model: 'gpt-3.5-turbo',
//         messages: [
//           { role: 'system', content: 'You write compelling job cover letters.' },
//           { role: 'user',   content: prompt }
//         ]
//       });
//       return res.choices[0].message.content.trim();
//     } catch (err) {
//       // if not a rate-limit 429, rethrow immediately
//       if (err.status !== 429 || attempt === maxRetries - 1) {
//         throw err;
//       }
//       console.warn(`⚠️ Rate limit hit, retrying in ${backoff}ms…`);
//       await sleep(backoff);
//       backoff *= 2;
//     }
//   }
// }

// /** Main entry: for a new job, find matching prefs and apply */
// async function processJob(jobId) {
//   const job = await Job.findById(jobId);
//   if (!job) return;

//   const prefs = await Pref.find({ autoApply: true }).populate('user');
//   for (let pref of prefs) {
//     if (matches(job, pref)) {
//       try {
//         await applyJob(job, pref.user);
//       } catch (err) {
//         console.error(`❌ Failed to apply ${pref.user.fullname} to ${job._id}:`, err);
//       }
//       // throttle between users to avoid hammering the API
//       await sleep(500);
//     }
//   }
// }

// /** Your matching logic (here: location only) */
// function matches(job, pref) {
//   return (
//     !pref.locations.length ||
//     pref.locations.includes(job.location)
//   );
// }

// /** Generates and persists a cover letter via OpenAI */
// async function applyJob(job, user) {
//   const prompt = `
// You are a professional cover‐letter writer.
// User name: ${user.fullname}.
// Job title: ${job.jobTitle}.
// Description: ${job.jobDescription}.
// Write a concise (<200 words) cover letter on their behalf.
//   `.trim();

//   const coverLetter = await generateCoverLetter(prompt);

//   await JobApp.create({
//     jobId:       job._id,
//     userId:      user._id,
//     companyId:   job.postedBy,
//     coverLetter,
//     // resume/status/etc. use your schema defaults
//   });

//   console.log(`✅ Auto-applied ${user.fullname} to job ${job._id}`);
// }

// module.exports = { processJob };


require('dotenv').config();

const { HfInference } = require('@huggingface/inference');
const hf                = new HfInference(process.env.HF_API_KEY);

const Pref   = require('../Models/CopilotModels/CopilotPref');
const Job    = require('../Models/JobModels/Job');
const JobApp = require('../Models/JobModels/JobApplication');

/** sleep helper */
function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

/** Generate cover letter via Hugging Face */
async function generateCoverLetter(prompt) {
  const model = 'distilgpt2';  // a valid HF inference–hosted model

  try {
    const res = await hf.textGeneration({
      model,
      inputs: prompt,
      parameters: { max_new_tokens: 200 },
      options: { wait_for_model: true }
    });
    return res[0].generated_text.trim();
  } catch (err) {
    console.error('❌ [HF] textGeneration error:', err);
    // fallback dummy in dev or on error
    return `Dear Hiring Manager,\n\nI am excited about this opportunity at ${prompt.slice(0,50)}...`;
  }
}

/** For each new job, match prefs and apply */
async function processJob(jobId) {
  const job = await Job.findById(jobId);
  if (!job) return;

  const prefs = await Pref.find({ autoApply: true }).populate('user');
  for (let pref of prefs) {
    if (!pref.locations.length || pref.locations.includes(job.location)) {
      try {
        // 1) build prompt
        const prompt = `
You are a professional cover‐letter writer.
User name: ${pref.user.fullname}.
Job title: ${job.jobTitle}.
Description: ${job.jobDescription}.
Write a concise (<200 words) cover letter on their behalf.
        `.trim();

        // 2) generate and persist
        const coverLetter = await generateCoverLetter(prompt);
        await JobApp.create({
          jobId:       job._id,
          userId:      pref.user._id,
          companyId:   job.postedBy,
          coverLetter,
        });

        console.log(`✅ HF Auto-applied ${pref.user.fullname} → ${job._id}`);
      } catch (applyErr) {
        console.error(`❌ Failed to apply ${pref.user.fullname}:`, applyErr);
      }

      // throttle between users
      await sleep(500);
    }
  }
}

module.exports = { processJob };
