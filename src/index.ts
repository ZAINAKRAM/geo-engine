import express from "express";
import path from "path";
import dotenv from "dotenv";
import { ContentService } from "./services/content.service";
import { CrawlService } from "./services/crawl.service";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

const contentService = new ContentService();
const crawlService = new CrawlService();

// Health
app.get("/health", (_, res) => {
  res.json({ status: "ok", service: "geo-engine" });
});

// Crawl a URL
app.post("/api/crawl", async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) return res.status(400).json({ error: "url required" });
    const result = await crawlService.crawlWebsite(url);
    res.json(result);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

// Generate GEO page
app.post("/api/generate", async (req, res) => {
  try {
    const { keyword, brandVoice, domain } = req.body;
    if (!keyword) return res.status(400).json({ error: "keyword required" });
    const content = await contentService.generateGeoPage({ keyword, brandVoice, domain });
    res.json({ keyword, content });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`GEO Engine running on http://localhost:${PORT}`);
});
