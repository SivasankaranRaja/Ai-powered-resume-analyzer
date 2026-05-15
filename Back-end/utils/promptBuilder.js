const buildPrompt = (
  resumeText,
  jobDescription
) => {

  return `
You are an expert AI Resume Analyzer and ATS system.

Analyze the resume based on the provided job description.

Return ONLY valid JSON.

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

Instructions:

1. Give resume score out of 100
2. Give ATS job match score out of 100
3. Identify strengths
4. Identify weaknesses
5. Find missing skills compared to job description
6. Find matched skills from job description
7. Give improvement suggestions
8. Return ONLY JSON
`;

};

module.exports = {
  buildPrompt,
};