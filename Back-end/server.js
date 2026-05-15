const express = require("express");
const cors = require("cors");
require("dotenv").config();

const resumeRoutes = require("./routes/resumeRoutes");

const app = express();

app.use(
  cors({
    origin:
      "https://ai-powered-resume-analyzer-black.vercel.app",
      "https://ai-powered-resume-analyzer-azure-three.vercel.app",
  })
);

app.use(express.json());

app.use("/api/resume", resumeRoutes);

app.get("/", (req, res) => {
  res.send("Resume Analyzer Backend is Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
