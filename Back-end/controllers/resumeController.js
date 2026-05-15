const {
  extractTextFromPDF,
} = require("../services/pdfService");

const {
  analyzeWithAI,
} = require("../services/aiService");

const {
  buildPrompt,
} = require("../utils/promptBuilder");

const analyzeResume = async (req, res) => {
  try {

    if (!req.file) {
      return res.status(400).json({
        message: "No file uploaded",
      });
    }

    const filePath = req.file.path;

    const jobDescription =req.body.jobDescription || "";

    const extractedText =
      (
        await extractTextFromPDF(filePath)
      ).substring(0, 6000);

    const prompt =
     buildPrompt(
     extractedText,
     jobDescription
  );

    const aiResponse =
      await analyzeWithAI(prompt);

    console.log(aiResponse);

    res.status(200).json({
      message: "Resume analyzed successfully",
      analysis: aiResponse,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};


module.exports = {
  analyzeResume,
};