import { GoogleGenerativeAI } from "@google/generative-ai";

export class ContentService {
  private genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

  async generateGeoPage(params: {
    keyword: string;
    brandVoice?: string;
    domain?: string;
  }) {
    const model = this.genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
You are a GEO (Generative Engine Optimization) expert.
Create a high-quality article optimized for AI citation.

Keyword: ${params.keyword}
Brand Voice: ${params.brandVoice || "Professional and helpful"}
Domain: ${params.domain || "example.com"}

Requirements:
- Start with a direct 40-60 word answer
- Include specific statistics or numbers
- Add at least one expert-style quotation
- Use clear headings (H2, H3)
- Add a short FAQ section
- Write in fluent, clear language
- Output in clean Markdown
`;

    const result = await model.generateContent(prompt);
    return result.response.text();
  }
}
