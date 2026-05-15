import { useState } from "react";
import axios from "axios";

function App() {

  const [file, setFile] = useState(null);

  const [analysis, setAnalysis] =
    useState(null);

  const [loading, setLoading] =
    useState(false);
  
  const [jobDescription, setJobDescription] =
  useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {

    if (!file) {
      alert("Please select a PDF");
      return;
    }

    try {

      setLoading(true);

      const formData = new FormData();

      formData.append("resume", file);

      formData.append(
        "jobDescription",
        jobDescription
      );

      const response = await axios.post(
        "http://localhost:5000/api/resume/analyze",
        formData
      );

      const cleanText =
        response.data.analysis
          .replace(/```json/g, "")
          .replace(/```/g, "")
          .trim();

      const parsedAnalysis =
        JSON.parse(cleanText);

      setAnalysis(parsedAnalysis);

    } catch (error) {

      console.error(error);

      alert("Analysis Failed");

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white p-6">

      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-10">

          <h1 className="text-5xl font-bold mb-4">
            AI Resume Analyzer
          </h1>

          <p className="text-slate-300 text-lg">
            Upload your resume and receive AI-powered feedback instantly
          </p>

        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl mb-8">

          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="mb-6 block w-full text-sm text-slate-300
            file:mr-4 file:py-3 file:px-6
            file:rounded-xl
            file:border-0
            file:text-sm
            file:font-semibold
            file:bg-blue-500
            file:text-white
            hover:file:bg-blue-600"
          />

          <textarea placeholder="Paste Job Description Here..." value={jobDescription} onChange={(e) => setJobDescription(e.target.value) } className="w-full p-4 rounded-2xl bg-white/10 border border-white/10 text-white mb-6 h-40 outline-none"></textarea>

          <button
            onClick={handleUpload}
            disabled={loading}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition-all duration-300 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg"
          >
            {loading
              ? "Analyzing..."
              : "Analyze Resume"}
          </button>

        </div>

        {analysis && (

          <div className="space-y-8">

            <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-green-400/20 rounded-3xl p-10 text-center backdrop-blur-lg">

              <h2 className="text-3xl font-bold mb-4">
                Resume Score
              </h2>

              <div className="text-7xl font-extrabold text-green-400 mb-6">
                {analysis.score}/100
              </div>
              <div className="text-3xl font-bold text-cyan-400 mt-6">
                 Job Match: {analysis.jobMatchScore}%
              </div>

              <div className="w-full bg-slate-700 rounded-full h-5 overflow-hidden">

                <div
                  className="bg-gradient-to-r from-green-400 to-emerald-500 h-5 rounded-full transition-all duration-1000"
                  style={{
                    width: `${analysis.score}%`,
                  }}
                />

              </div>

            </div>

            <Card
              title="Profile Summary"
              color="text-cyan-400"
              content={analysis.summary}
            />

            <ListCard
              title="Strengths"
              color="text-green-400"
              items={analysis.strengths}
            />

            <ListCard
              title="Weaknesses"
              color="text-red-400"
              items={analysis.weaknesses}
            />

            <ListCard
              title="Missing Skills"
              color="text-yellow-400"
              items={analysis.missingSkills}
            />

            <ListCard
              title="Matched Skills"
              color="text-purple-400"
              items={analysis.matchedSkills}
            />

            <ListCard
              title="Suggestions"
              color="text-blue-400"
              items={analysis.suggestions}
            />

          </div>
        )}

      </div>
    </div>
  );
}

function Card({ title, color, content }) {

  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-xl">

      <h2 className={`text-2xl font-bold mb-4 ${color}`}>
        {title}
      </h2>

      <p className="text-slate-200 leading-8">
        {content}
      </p>

    </div>
  );
}

function ListCard({ title, color, items }) {

  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-xl">

      <h2 className={`text-2xl font-bold mb-5 ${color}`}>
        {title}
      </h2>

      <ul className="space-y-4">

        {items?.map((item, index) => (
          <li
            key={index}
            className="bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-all duration-300"
          >
            {item}
          </li>
        ))}

      </ul>

    </div>
  );
}

export default App;