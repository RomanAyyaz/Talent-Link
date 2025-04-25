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

### Environment Variables

Create a `.env` in both `backend/` and `frontend/` directories:

```env
# backend/.env
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret

# frontend/.env
REACT_APP_API_URL=http://localhost:5000/graphql

### Running the App

```bash
# Start backend server
cd backend
npm run server

# In a new terminal, start frontend
cd frontend
npm run client

---

## 📋 Usage

1. **Sign Up** as a student or company recruiter.  
2. **Complete your profile** (students upload resume, companies add logo).  
3. **Explore features**—students search jobs & courses; companies post jobs & review candidates.  
4. **Engage** in chats, mock interviews, and get notified in real time.

---

## 📸 Screenshots

<div align="center">
  <img src="docs/screenshots/dashboard-student.png" alt="Student Dashboard" width="300" />
  <img src="docs/screenshots/dashboard-company.png" alt="Company Dashboard" width="300" />
</div>

> More screenshots coming soon!

---

## 🤝 Contributing

1. Fork the repository  
2. Create a feature branch (`git checkout -b feature/YourFeature`)  
3. Commit your changes (`git commit -m 'Add YourFeature'`)  
4. Push to the branch (`git push origin feature/YourFeature`)  
5. Open a Pull Request  

Please follow the [Contributor Covenant](https://www.contributor-covenant.org/) code of conduct.

---

## 📄 License

This project is licensed under the **MIT License**. See [LICENSE](LICENSE) for details.

---

## 📬 Contact

**Roman Ayyaz**  
- Email: [romanayaz7@gmail.com](mailto:romanayaz7@gmail.com)  
- LinkedIn: [linkedin.com/in/romanayaz](https://www.linkedin.com/in/romanayaz)  
- GitHub: [github.com/RomanAyyaz](https://github.com/RomanAyyaz)

Feel free to reach out with questions, feedback, or collaboration ideas!


