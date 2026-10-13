import { ContentService } from "./services/content.service";
import { CrawlService } from "./services/crawl.service";
import dotenv from "dotenv";

dotenv.config();

async function testFreeStack() {
  console.log("=== Free GEO Stack Test ===\n");

  const crawl = new CrawlService();
  const content = new ContentService();

  // 1. Crawl a page (free)
  console.log("1. Crawling example page...");
  const crawled = await crawl.crawlWebsite("https://example.com");
  console.log("Title:", crawled.title);
  console.log("Success:", crawled.success);

  // 2. Generate GEO content (Gemini free tier)
  console.log("\n2. Generating GEO page with Gemini...");
  const article = await content.generateGeoPage({
    keyword: "best AI tools for small business",
    brandVoice: "Helpful and practical",
    domain: "example.com"
  });

  console.log("\n--- Generated Article (first 800 chars) ---");
  console.log(article.slice(0, 800));
  console.log("\n... (truncated)");
}

testFreeStack().catch(console.error);
