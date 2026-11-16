export interface Recommendation {
  author: string;
  quote: string;
}

// Short, exact excerpt from a publicly visible LinkedIn recommendation.
// Keep the author's original wording rather than rewriting it as our own claim.
export const recommendations: Recommendation[] = [
  {
    author: 'Eugeniya Pronina',
    quote: 'Nataliia proved herself to be in top 5 students who was on time and delivered high quality design!',
  },
];
