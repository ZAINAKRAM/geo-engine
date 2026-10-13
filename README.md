# GEO Engine

**Open Source** Generative Engine Optimization (GEO) backend.

RankAI-style autonomous SEO + GEO tool — free testing version.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## What is GEO?

Generative Engine Optimization is the practice of optimizing content so AI engines (ChatGPT, Perplexity, Gemini, Google AI Overviews) cite and recommend your brand.

## Free Stack (Current)

- **Content Generation**: Google Gemini (`gemini-1.5-flash`)
- **Crawling**: Simple Cheerio-based crawler
- **No paid APIs required** for basic testing

## Quick Start

```bash
git clone https://github.com/ZAINAKRAM/geo-engine.git
cd geo-engine
npm install
cp .env.example .env
# Add your free Gemini API key
npm run test:free
```

### Get Free Gemini API Key
https://aistudio.google.com/app/apikey

## Project Structure

```
src/
├── services/
│   ├── content.service.ts   # Gemini GEO content generation
│   └── crawl.service.ts     # Free website crawler
└── test-free.ts             # Quick test script
```

## Roadmap

- [ ] Add Express API routes
- [ ] Citation tracking (Perplexity)
- [ ] Keyword research integration
- [ ] WordPress / Webflow publishing
- [ ] Auto-rewrite underperforming pages
- [ ] Frontend dashboard

## Contributing

Contributions are welcome! Feel free to open issues or pull requests.

## License

MIT — see [LICENSE](LICENSE)
