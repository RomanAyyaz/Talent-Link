"use client";

import { useState } from "react";
import {
  User,
  MapPin,
  Mail,
  Phone,
  Briefcase,
  Calendar,
  FileText,
  Globe,
  Linkedin,
  Github,
  MessageSquare,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react";
import { useParams } from "react-router-dom";
import {
  getJobCandidatesData,
  scheduleInterviewApi,
  updatePipeline,
} from "../JobApis";
import { useMutation, useQuery } from "@tanstack/react-query";
import Messages from "../Messages/Messages";
import { useDarkModeStore } from "../../../Store/DarkModeStore";

export function CandidateProfile() {
  /* ── local state ─────────────────────────────────────────────── */
  const [activeTab, setActiveTab] = useState("pipeline");
  const [showFeedback, setShowFeedback] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedInterviewer, setSelectedInterviewer] = useState("");
  const [interviewTitle, setInterviewTitle] = useState("");
  const [interviewFeedback, setInterviewFeedback] = useState("");
  const { mode } = useDarkModeStore();

  /* ── helper class snippets for dark / light ─────────────────── */
  const bgCard     = mode === "dark" ? "bg-dark"      : "bg-white";
  const bgSubtle   = mode === "dark" ? "bg-gray-800"  : "bg-gray-50";
  const textMain   = mode === "dark" ? "text-white"   : "text-gray-900";
  const textMuted  = mode === "dark" ? "text-gray-400": "text-gray-500";
  const borderBase = mode === "dark" ? "border-gray-700" : "border-gray-200";
  const hoverCard  = "hover:shadow-md transition-shadow";

  /* ── URL params & query ──────────────────────────────────────── */
  const { candidateId, jobId } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["jobApplication", jobId],
    queryFn: () => getJobCandidatesData({ candidateId, jobId }),
  });

  /* ── mutations ──────────────────────────────────────────────── */
  const scheduleInterview = useMutation({ mutationFn: scheduleInterviewApi });
  const updateCandidate   = useMutation({ mutationFn: updatePipeline });

  if (isLoading) return <h1 className={textMain}>Loading…</h1>;
  if (error)     return <h1 className={textMain}>Error loading data</h1>;

  /* ── derived data ───────────────────────────────────────────── */
  const jobData        = data?.data[0] || {};
  const candidateData  = jobData.userId || {};
  const pipelineStages = jobData.pipelineStages || [];
  const currentInterview = pipelineStages.find(p => p.status === "in-progress");

  /* ── schedule form payload ─────────────────────────────────── */
  const scheduledInterviewData = {
    name: interviewTitle,
    date: selectedDate,
    interviewer: selectedInterviewer,
    status: "in-progress",
  };

  /* ── helpers for pipeline pills ─────────────────────────────── */
  const pillClass = (s) =>
    s === "completed"   ? "bg-green-100 text-green-800"
  : s === "in-progress" ? "bg-blue-100  text-blue-800"
  :                       "bg-gray-100 text-gray-800";
  const pillIcon  = (s) =>
    s === "completed"   ? <CheckCircle className="h-5 w-5 text-green-500" />
  : s === "in-progress" ? <Clock      className="h-5 w-5 text-blue-500"  />
  :                       <AlertCircle className="h-5 w-5 text-gray-400" />;
  const pillText  = (s) =>
    s === "completed" ? "Completed"
  : s === "in-progress" ? "In Progress"
  : s === "upcoming" ? "Upcoming" : s;

  /* ── render ─────────────────────────────────────────────────── */
  
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${mode === 'dark' ? 'bg-darkk' :''}`}>

      {/* ══════════ HEADER ══════════════════════════════ */}
      <div className={`${bgCard} shadow rounded-lg overflow-hidden mb-8`}>
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 h-32 md:h-48" />
        <div className="px-4 sm:px-6 lg:px-8 pb-6">
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <div className="-mt-16 md:-mt-24 flex-shrink-0">
              <img
                className="h-24 w-24 md:h-40 md:w-40 rounded-full border-4 border-white object-cover"
                src={`http://localhost:8000${candidateData.imageUrl}`}
                alt={candidateData.fullname}
              />
            </div>

            <div className="mt-6 md:mt-0 md:ml-6 flex-1">
              {/* name & buttons */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className={`text-2xl md:text-3xl font-bold ${textMain}`}>
                    {candidateData.fullname}
                  </h1>
                  <p className="text-lg text-indigo-300">
                    {/* candidate profession if available */}
                  </p>
                </div>

                <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
                  <a
                    href="#resume"
                    className="inline-flex items-center px-4 py-2 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    <FileText className="h-4 w-4 mr-2" /> Resume
                  </a>
                  <a
                    href={candidateData.websiteLink}
                    className={`inline-flex items-center px-4 py-2 rounded-md shadow-sm text-sm font-medium ${
                      mode === "dark"
                        ? "text-gray-300 bg-gray-800 hover:bg-gray-700"
                        : "text-gray-700 bg-white hover:bg-gray-50"
                    }`}
                  >
                    <Globe className="h-4 w-4 mr-2" /> Portfolio
                  </a>
                </div>
              </div>

              {/* contact */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className={`flex items-center text-sm ${textMuted}`}>
                  <MapPin className="h-4 w-4 mr-1.5" />
                  {candidateData.location || "Location"}
                </div>
                <div className={`flex items-center text-sm ${textMuted}`}>
                  <Mail className="h-4 w-4 mr-1.5" />
                  {candidateData.email}
                </div>
                <div className={`flex items-center text-sm ${textMuted}`}>
                  <Phone className="h-4 w-4 mr-1.5" />
                  {candidateData.phone || "Phone"}
                </div>
                <div className={`flex items-center text-sm ${textMuted}`}>
                  <Briefcase className="h-4 w-4 mr-1.5" />
                  {candidateData.experience}+ Experience
                </div>
                <div className={`flex items-center text-sm ${textMuted}`}>
                  <Calendar className="h-4 w-4 mr-1.5" />
                  Availability info
                </div>
              </div>

              {/* socials */}
              <div className="mt-4 flex gap-2">
                <a
                  href={candidateData.linkedInLink}
                  className={`${textMuted} hover:text-indigo-600`}
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#github"
                  className={`${textMuted} hover:text-indigo-600`}
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════ TABS ════════════════════════════════ */}
      <div className="mb-6">
        <div className={`border-b ${borderBase}`}>
          <nav className="-mb-px flex space-x-8">
            {["pipeline", "profile", "notes", "interviews", "messages"].map(
              (t) => (
                <button
                  key={t}
                  onClick={() => setActiveTab(t)}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === t
                      ? "border-indigo-500 text-indigo-600"
                      : `border-transparent ${textMuted} hover:text-gray-700 hover:border-gray-300`
                  }`}
                >
                  {t === "pipeline"
                    ? "Hiring Pipeline"
                    : t.charAt(0).toUpperCase() + t.slice(1)}
                </button>
              )
            )}
          </nav>
        </div>
      </div>

      {/* ══════════ TAB CONTENT WRAPPER ═════════════════ */}
      <div className={`${bgCard} shadow rounded-lg overflow-hidden`}>

        {/* ── PIPELINE TAB ────────────────────────────── */}
        {activeTab === "pipeline" && (
          <div className="p-6">
            <h2 className={`text-xl font-semibold ${textMain} mb-6`}>
              Hiring Pipeline
            </h2>

            <div className="relative">
              <div
                className={`hidden sm:block absolute left-1/2 inset-y-0 -translate-x-1/2 w-0.5 ${borderBase}`}
              />
              <div className="space-y-8">
                {pipelineStages.map((st, i) => (
                  <div key={st.id} className="relative z-10">
                    <div className="flex items-start sm:items-center">
                      {/* timeline dot */}
                      <div className="hidden sm:flex flex-col items-center">
                        <div
                          className={`flex items-center justify-center w-10 h-10 rounded-full ${
                            st.status === "completed"
                              ? "bg-green-100"
                              : st.status === "in-progress"
                              ? "bg-blue-100"
                              : "bg-gray-100"
                          }`}
                        >
                          {pillIcon(st.status)}
                        </div>
                        {i < pipelineStages.length - 1 && (
                          <div className={`w-0.5 h-16 ${borderBase}`} />
                        )}
                      </div>

                      {/* card */}
                      <div className="sm:ml-6 flex-1">
                        <div
                          className={`${bgCard} border ${borderBase} rounded-lg p-4 sm:p-6 ${hoverCard}`}
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <div className="flex items-center">
                              <div className="sm:hidden mr-3">
                                {pillIcon(st.status)}
                              </div>
                              <h3 className={`text-lg font-medium ${textMain}`}>
                                {st.name}
                              </h3>
                            </div>
                            <div className="mt-2 sm:mt-0 flex items-center">
                              <span
                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${pillClass(
                                  st.status
                                )}`}
                              >
                                {pillText(st.status)}
                              </span>
                              <span className={`ml-4 text-sm ${textMuted}`}>
                                {new Date(st.date).toISOString().split("T")[0]}
                              </span>
                            </div>
                          </div>

                          <div className="mt-2 flex justify-between items-center">
                            <div className={`text-sm ${textMuted}`}>
                              Interviewer: {st.interviewer}
                            </div>
                            <button
                              onClick={() =>
                                setShowFeedback(
                                  showFeedback === st.id ? null : st.id
                                )
                              }
                              className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              {showFeedback === st.id
                                ? "Hide Feedback"
                                : "View Feedback"}
                              <MessageSquare className="ml-1 h-4 w-4" />
                            </button>
                          </div>

                          {showFeedback === st.id && (
                            <div
                              className={`mt-4 p-4 ${bgSubtle} rounded-md ${textMain}`}
                            >
                              <p className="text-sm">{st.feedback}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── PROFILE TAB ─────────────────────────────── */}
        {activeTab === "profile" && (
          <div className="p-6">
            <h2 className={`text-xl font-semibold ${textMain} mb-6`}>
              Profile Details
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* about + skills */}
              <div className="lg:col-span-2">
                <div className={`${bgCard} border ${borderBase} rounded-lg p-6`}>
                  <h3 className={`text-lg font-medium ${textMain} mb-4`}>
                    About
                  </h3>
                  <p className={textMuted}>
                    {candidateData.bio || "Candidate bio goes here."}
                  </p>

                  <h3
                    className={`text-lg font-medium ${textMain} mt-6 mb-4`}
                  >
                    Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {(candidateData.skills || ["Skill"]).map((skill, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* summary card */}
              <div>
                <div className={`${bgCard} border ${borderBase} rounded-lg p-6`}>
                  <h3 className={`text-lg font-medium ${textMain} mb-4`}>
                    Candidate Summary
                  </h3>

                  <div className="space-y-4">
                    {[
                      ["Current Stage", "Team Interview"],
                      ["Application Date", "May 10, 2023"],
                      ["Source", "Employee Referral"],
                      ["Salary Expectation", "$120,000 - $140,000"],
                      ["Potential Start Date", "July 1, 2023"],
                    ].map(([label, value]) => (
                      <div key={label}>
                        <h4 className={`text-sm font-medium ${textMuted}`}>
                          {label}
                        </h4>
                        <p className={`mt-1 text-sm ${textMain}`}>{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── NOTES TAB ──────────────────────────────── */}
        {activeTab === "notes" && (
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className={`text-xl font-semibold ${textMain}`}>
                Notes & Feedback
              </h2>
              <button className="inline-flex items-center px-4 py-2 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                Add Note
              </button>
            </div>

            {(jobData.notes || []).map((note) => (
              <div
                key={note.id}
                className={`${bgCard} border ${borderBase} rounded-lg p-4 mb-4`}
              >
                <div className="flex items-start">
                  <User className="h-10 w-10 rounded-full bg-gray-200 p-2 text-gray-600 flex-shrink-0" />
                  <div className="ml-3">
                    <p className={`text-sm font-medium ${textMain}`}>
                      {note.author}
                    </p>
                    <p className={`text-sm ${textMuted}`}>{note.date}</p>
                    <p className={`mt-2 text-sm ${textMain}`}>{note.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── INTERVIEWS TAB ─────────────────────────── */}
        {activeTab === "interviews" && (
          <div className="p-6">
            <h2 className={`text-xl font-semibold ${textMain} mb-6`}>
              Schedule Interview
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* schedule form */}
              <div className="lg:col-span-1">
                <div className={`${bgCard} border ${borderBase} rounded-lg p-6`}>
                  <h3 className={`text-lg font-medium ${textMain} mb-4`}>
                    New Interview
                  </h3>

                  <div className="space-y-4">
                    {[
                      ["Interview Title", interviewTitle, setInterviewTitle],
                      ["Date", selectedDate, setSelectedDate, "date"],
                    ].map(([label, value, setter, type = "text"]) => (
                      <div key={label}>
                        <label
                          className={`block text-sm font-medium ${textMuted}`}
                        >
                          {label}
                        </label>
                        <input
                          type={type}
                          value={value}
                          onChange={(e) => setter(e.target.value)}
                          className="mt-1 p-1.5 block w-full rounded-md border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    ))}

                    <div>
                      <label
                        className={`block text-sm font-medium ${textMuted}`}
                      >
                        Interviewer
                      </label>
                      <select
                        className="mt-1 p-1.5 block w-full rounded-md border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        onChange={(e) => setSelectedInterviewer(e.target.value)}
                      >
                        <option>Select an interviewer</option>
                        {["Sarah Johnson", "David Chen", "Michael Rodriguez"].map(
                          (p) => (
                            <option key={p}>{p}</option>
                          )
                        )}
                      </select>
                    </div>

                    <button
                      type="button"
                      className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 bg-indigo-600 text-sm font-medium text-white hover:bg-indigo-700"
                      onClick={() => {
                        scheduleInterview.mutate({
                          candidateId,
                          jobId,
                          inetrviewData: scheduledInterviewData,
                        });
                        setInterviewTitle("");
                        setSelectedDate("");
                      }}
                    >
                      Schedule Interview
                    </button>
                  </div>
                </div>
              </div>

              {/* current interview */}
              <div className="lg:col-span-2">
                <div className={`${bgCard} border ${borderBase} rounded-lg p-6`}>
                  <h3 className={`text-lg font-medium ${textMain} mb-4`}>
                    Current Interview
                  </h3>

                  {!currentInterview ? (
                    <p className={textMuted}>No interview scheduled yet.</p>
                  ) : (
                    <div
                      className={`border rounded-lg p-4 ${hoverCard}`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className={`text-lg font-medium ${textMain}`}>
                            {currentInterview.name}
                          </h4>
                          <div className={`mt-1 flex items-center text-sm ${textMuted}`}>
                            <Calendar className="h-4 w-4 mr-1.5" />
                            {new Date(currentInterview.date).toLocaleDateString(
                              "en-US",
                              { year: "numeric", month: "long", day: "numeric" }
                            )}
                            <span className="mx-2" />
                            <Clock className="h-4 w-4 mr-1.5" /> 10:00 PM
                          </div>
                          <div className={`mt-2 text-sm ${textMuted}`}>
                            <User className="inline h-4 w-4 mr-1.5" />
                            Interviewer: {currentInterview.interviewer}
                          </div>
                        </div>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${pillClass(
                            currentInterview.status
                          )}`}
                        >
                          {pillText(currentInterview.status)}
                        </span>
                      </div>

                      {/* feedback / actions */}
                      {currentInterview.status === "completed" && (
                        <div className="mt-4">
                          <h5 className={`text-sm font-medium ${textMain}`}>
                            Feedback
                          </h5>
                          <p className={`mt-1 text-sm ${textMuted}`}>
                            {currentInterview.feedback}
                          </p>
                        </div>
                      )}

                      {currentInterview.status === "in-progress" && (
                        <>
                          <div className="mt-4">
                            <button
                              className="text-sm text-indigo-600 hover:text-indigo-500"
                              onClick={() =>
                                updateCandidate.mutate({
                                  userId: candidateId,
                                  jobId,
                                  jobStatus: {
                                    status: "completed",
                                    name: currentInterview.name,
                                    feedback: "",
                                  },
                                })
                              }
                            >
                              Mark as Completed
                            </button>
                          </div>

                          {currentInterview.feedback === "To Be given" && (
                            <div className="mt-4">
                              <label
                                className={`block text-sm font-medium ${textMuted}`}
                              >
                                Add Feedback
                              </label>
                              <textarea
                                rows={3}
                                className={`mt-1 px-2 py-2 block w-full rounded-md border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
                                value={interviewFeedback}
                                onChange={(e) =>
                                  setInterviewFeedback(e.target.value)
                                }
                              ></textarea>
                              <div className="mt-2 flex justify-end">
                                <button
                                  type="button"
                                  className="inline-flex items-center px-4 py-2 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                  onClick={() =>
                                    updateCandidate.mutate({
                                      userId: candidateId,
                                      jobId,
                                      jobStatus: {
                                        status: "completed",
                                        name: currentInterview.name,
                                        feedback: interviewFeedback,
                                      },
                                    })
                                  }
                                >
                                  Save Feedback
                                </button>
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── MESSAGES TAB ───────────────────────────── */}
        {activeTab === "messages" && (
          <Messages receiverId={candidateId} />
        )}
      </div>
    </div>
  );
}
