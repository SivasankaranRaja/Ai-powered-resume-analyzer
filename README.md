# AI Resume Analyzer 🚀

An AI-powered Resume Analyzer that evaluates resumes, matches them with job descriptions, identifies missing skills, and provides intelligent suggestions using Google Gemini AI.

---

# 🌐 Live Demo

### Frontend

[AI Resume Analyzer Live App](https://ai-powered-resume-analyzer-azure-three.vercel.app)

### GitHub Repository

[GitHub Repository](https://github.com/SivasankaranRaja/Ai-powered-resume-analyzer)

---

# ✨ Features

* 📄 Upload Resume PDF
* 🤖 AI Resume Analysis
* 📊 Resume Score
* 🎯 Job Description Matching
* ✅ Matched Skills Detection
* ❌ Missing Skills Detection
* 💪 Strengths & Weaknesses Analysis
* 💡 AI Suggestions
* 🎨 Modern Tailwind CSS UI
* ⚡ Fast Analysis Workflow
* ☁️ Cloud Deployment

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* Axios

## Backend

* Node.js
* Express.js
* Multer
* PDF-Parse
* Google Gemini API

## Deployment

* Vercel (Frontend)
* Render (Backend)

---

# 📂 Project Structure

```bash
Ai-powered-resume-analyzer/
│
├── Front-end/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── Back-end/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── uploads/
│   └── server.js
│
└── README.md
```

---

# ⚙️ Project Setup

# 1️⃣ Clone Repository

```bash
git clone https://github.com/SivasankaranRaja/Ai-powered-resume-analyzer.git
```

---

# 2️⃣ Frontend Setup

```bash
cd Front-end

npm install

npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# 3️⃣ Backend Setup

```bash
cd Back-end

npm install

npm start
```

Backend runs on:

```bash
http://localhost:5000
```

---

# 🔑 Environment Variables

Create a `.env` file inside the `Back-end` folder.

```env
GEMINI_API_KEY=your_api_key
```

---

# 🧠 Architecture / Flow Explanation

```text
User Uploads Resume PDF
            ↓
Frontend (React + Tailwind)
            ↓
Axios API Request
            ↓
Backend Express Server
            ↓
PDF Text Extraction
            ↓
Prompt Builder
            ↓
Google Gemini AI API
            ↓
AI JSON Response
            ↓
Frontend Dashboard UI
```

---

# 🤖 AI Tools / Models Used

## Google Gemini API

Model Used:

```text
gemini-2.0-flash
```

Purpose:

* Resume analysis
* Skill extraction
* Resume scoring
* Job matching
* Suggestions generation

---

# 📝 Prompt Used

```javascript
You are an expert AI Resume Analyzer.

Analyze the following resume and return ONLY valid JSON.

Return format:

{
  "score": number,
  "jobMatchScore": number,
  "summary": "",
  "strengths": [],
  "weaknesses": [],
  "missingSkills": [],
  "matchedSkills": [],
  "suggestions": []
}

Resume:
${resumeText}

Job Description:
${jobDescription}
```

---

# ✅ What Worked Well

* PDF text extraction worked accurately.
* Gemini AI generated structured responses successfully.
* Tailwind CSS improved UI quality significantly.
* Job description matching produced meaningful results.
* Deployment on Vercel and Render worked successfully.
* Glassmorphism UI design improved user experience.

---

# ⚠️ Where AI Output Was Incorrect / Needed Manual Correction

* Sometimes Gemini returned markdown JSON blocks like:

````text
```json
{
}
````

````

This required manual cleanup using:

```javascript
.replace(/```json/g, "")
.replace(/```/g, "")
````

* Occasionally AI responses missed fields like:

  * `matchedSkills`
  * `jobMatchScore`

* Some suggestions were too generic and required prompt improvements.

* AI score variations occurred for the same resume because LLM outputs are non-deterministic.

---

# 📌 Assumptions Made

* Users upload only PDF resumes.
* Resume text is machine-readable.
* Job descriptions are optional.
* AI responses always return valid JSON after cleanup.
* Users have internet access for AI API calls.

---

# ⚠️ Limitations

* No authentication system.
* No database storage.
* PDF-only support.
* AI output may vary slightly.
* Large resumes may increase response time.
* No ATS keyword optimization yet.
* No report export feature currently.

---

# 🚀 Improvements Possible With More Time

* 📥 Download Analysis as PDF
* 🔐 Authentication System
* 🧠 ATS Resume Optimization
* 📊 Section-wise Scoring
* ☁️ Cloud Storage Integration
* 📈 Resume Analytics Dashboard
* 🌍 Multi-language Support
* 🧪 Better Prompt Engineering
* 📌 Resume Keyword Highlighting
* ⚡ AI Response Caching
* 🧵 Streaming AI Responses
* 📱 Mobile Optimization

---


# 👨‍💻 Author

## Sivasankaran R

* Backend Developer
* AI & Blockchain Enthusiast
* MERN Stack Developer

---

# ⭐ Support

If you like this project:

* ⭐ Star the repository
* 🍴 Fork the project
* 🚀 Contribute improvements

---

# 📜 License

This project is licensed under the MIT License.
