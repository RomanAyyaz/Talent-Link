<p align="center">
  <img src="https://img.shields.io/badge/MERN-Stack-blue" alt="MERN Stack Badge" />
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License Badge" />
  <img src="https://img.shields.io/badge/Version-1.0.0-orange" alt="Version Badge" />
</p>

# Talent Link 🎓💼

**Talent Link** is a smart, full-stack web platform built with the MERN stack that connects students with companies to streamline career development, skill matching, and recruitment. It empowers students to build professional profiles, find and apply for jobs, practice interviews, and acquire new skills—while giving companies an efficient way to source, assess, and onboard talent.

---

## 📑 Table of Contents

1. [Features](#-features)  
2. [Tech Stack](#-tech-stack)  
3. [Architecture & Workflow](#-architecture--workflow)  
4. [Getting Started](#-getting-started)  
   - [Prerequisites](#prerequisites)  
   - [Installation](#installation)  
   - [Environment Variables](#environment-variables)  
   - [Running the App](#running-the-app)  
5. [Usage](#-usage)  
6. [Screenshots](#-screenshots)  
7. [Contributing](#-contributing)  
8. [License](#-license)  
9. [Contact](#-contact)  

---

## 🚀 Features

### For Students 🎓
- **Profile Management**  
  Create and update personal, educational, and professional details.
- **CV Builder**  
  Generate and download polished, ATS-friendly resumes.
- **Job Finder**  
  Browse and filter job listings tailored to your skills and interests.
- **Mock Interviews**  
  Practice with AI-powered simulations or schedule live sessions.
- **Skill Assessments**  
  Self-evaluate your strengths and receive detailed feedback.
- **Course Recommendations**  
  Get personalized learning paths to close skill gaps.

### For Companies 🏢
- **Company Dashboard**  
  Manage your organization’s profile and branding.
- **Job Posting**  
  Create, edit, and archive job openings.
- **Interview Scheduling**  
  Coordinate and track candidate interviews.
- **Skill Matching Algorithm**  
  Auto-match candidates based on skill-to-requirement fit.
- **Applicant Tracking**  
  Move candidates through stages: Applied → Interview → Offer.
- **Internal Training Portal**  
  Launch custom training courses and monitor employee progress.

### General 🌐
- **Real-Time Notifications**  
  Stay updated on applications, messages, and interview invites.
- **Unified Dashboard**  
  Gain insights through charts and key metrics.
- **In-App Chat**  
  Chat directly with students or recruiters in a secure workspace.

---

## 🛠 Tech Stack

| Layer             | Technologies                                  |
| ----------------- | --------------------------------------------- |
| **Frontend**      | React.js • Tailwind CSS • Formik • React Query |
| **Backend**       | Node.js • Express.js • GraphQL (Apollo Server) |
| **Database**      | MongoDB (Mongoose)                            |
| **Authentication**| JSON Web Tokens (JWT)                         |
| **Version Control**| Git & GitHub                                |

---

## 🏗 Architecture & Workflow

1. **React** SPA communicates via **GraphQL** to the **Express** server.  
2. Server resolves requests against **MongoDB** using Mongoose models.  
3. **JWT**-based authentication secures REST/GraphQL endpoints.  
4. Real-time notifications and chat powered by WebSockets.

---

## 🛠️ Getting Started

### Prerequisites

- Node.js v16+ & npm  
- MongoDB Atlas account or local MongoDB instance  
- (Optional) Yarn  

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/yourusername/talent-link.git
cd talent-link

# 2. Install dependencies for backend & frontend
cd backend && npm install
cd ../frontend && npm install

