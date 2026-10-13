export class OpportunityService {
  async getKeywordIdeas(seed: string) {
    // Placeholder - connect DataForSEO later
    return [
      { keyword: seed, volume: 1000, difficulty: 30 },
      { keyword: `${seed} guide`, volume: 500, difficulty: 25 }
    ];
  }
}
