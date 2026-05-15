AI Resume Analyzer

An AI-powered Resume Analyzer built using React, Node.js, Express, Tailwind CSS, and Google Gemini AI.

Users can upload resumes in PDF format and receive intelligent AI-based feedback including:

- Resume Score
- Profile Summary
- Strengths
- Weaknesses
- Missing Skills
- Suggestions
- Job Description Matching
- Matched Skills

---

Live Demo

Frontend:
https://ai-powered-resume-analyzer-azure-three.vercel.app

Backend:
https://ai-powered-resume-analyzer-jb27.onrender.com

---

 Features

- Modern Glassmorphism UI
- PDF Resume Upload
- AI Resume Analysis
- ATS-style Resume Scoring
- Job Description Matching
- Skill Gap Detection
- Responsive Design
- Real-time Analysis

---

Tech Stack

 Frontend
- React.js
- Tailwind CSS
- Axios
- Vite

### Backend
- Node.js
- Express.js
- Multer
- PDF-Parse
- Google Gemini AI API

### Deployment
- Vercel (Frontend)
- Render (Backend)

---

## Folder Structure

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
````

---

## Installation

### Clone Repository

```bash
git clone https://github.com/SivasankaranRaja/Ai-powered-resume-analyzer.git
```

---

## Frontend Setup

```bash
cd Front-end
npm install
npm run dev
```

---

## Backend Setup

```bash
cd Back-end
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file inside `Back-end`

```env
GEMINI_API_KEY=your_api_key
PORT=5000
```

---

## API Endpoint

### Analyze Resume

```http
POST /api/resume/analyze
```

Form Data:

* resume (PDF File)
* jobDescription (Text)

---

## Future Improvements

* Authentication System
* Resume History
* Download Report as PDF
* Section-wise Scoring
* Resume Keyword Highlighting
* AI Interview Question Generator
* MongoDB Integration
* Cloud Deployment Insights

---

## Screenshots

Add your project screenshots here.

---

## Author

Sivasankaran R

GitHub:
[https://github.com/SivasankaranRaja](https://github.com/SivasankaranRaja)

---

## License

This project is licensed under the MIT License.

```

Then:

1. Open `README.md`
2. Replace everything
3. Commit changes
4. Push to GitHub

Your GitHub project page will look much more professional after this.
```
