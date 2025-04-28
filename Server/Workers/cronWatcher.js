// require('dotenv').config();
// const cron         = require('node-cron');
// const Job          = require('../Models/JobModels/Job');
// const { processJob } = require('./inlineProcessor');

// let lastCheck = new Date();

// // runs once a minute—adjust to '*/5 * * * *' for every 5 minutes if desired
// cron.schedule('* * * * *', async () => {
//   console.log('🔍 [JobCopilot] Checking for new jobs since', lastCheck);
//   const newJobs = await Job.find({ createdAt: { $gt: lastCheck } });
//   lastCheck = new Date();

//   for (let job of newJobs) {
//     try {
//       await processJob(job._id);
//     } catch (err) {
//       console.error('❌ [JobCopilot] Error processing job', job._id, err);
//     }
//   }
// });

require('dotenv').config();
const cron           = require('node-cron');
const Job            = require('../Models/JobModels/Job');
const { processJob } = require('./inlineProcessor');

let lastCheck = new Date();

// runs every minute (you can change to '*/5 * * * *' for 5-minute intervals)
cron.schedule('* * * * *', async () => {
  console.log('🔍 [JobCopilot] Checking for new jobs since', lastCheck);
  const newJobs = await Job.find({ createdAt: { $gt: lastCheck } });
  lastCheck = new Date();

  for (let job of newJobs) {
    try {
      await processJob(job._id);
    } catch (err) {
      console.error('❌ [JobCopilot] Error processing job', job._id, err);
    }
  }
});
