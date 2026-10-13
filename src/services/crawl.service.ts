import axios from "axios";
import * as cheerio from "cheerio";

export class CrawlService {
  // Free simple crawler (no Firecrawl needed for testing)
  async crawlWebsite(url: string) {
    try {
      const res = await axios.get(url, {
        timeout: 15000,
        headers: { "User-Agent": "GEO-Engine-Bot/1.0" }
      });

      const $ = cheerio.load(res.data);
      const title = $("title").text().trim();
      const description = $('meta[name="description"]').attr("content") || "";
      const headings = $("h1, h2, h3").map((_, el) => $(el).text().trim()).get();
      const text = $("body").text().replace(/\s+/g, " ").trim().slice(0, 5000);

      return {
        url,
        title,
        description,
        headings: headings.slice(0, 15),
        excerpt: text.slice(0, 1500),
        success: true
      };
    } catch (error: any) {
      return { url, success: false, error: error.message };
    }
  }

  async extractBrandContext(crawlData: any) {
    return {
      brandVoice: "Clear, helpful, and professional",
      mainTopics: crawlData.headings?.slice(0, 5) || [],
      title: crawlData.title || ""
    };
  }
}
