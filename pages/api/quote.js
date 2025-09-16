// pages/api/quote.js
// API route that fetches quotes from Quotable, with local fallback if unreachable.

const LOCAL_QUOTES = [
  { content: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { content: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { content: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { content: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { content: "Whether you think you can or you think you can't, you're right.", author: "Henry Ford" },
  { content: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
  { content: "Action is the foundational key to all success.", author: "Pablo Picasso" }
];

function randomLocalQuote() {
  return LOCAL_QUOTES[Math.floor(Math.random() * LOCAL_QUOTES.length)];
}

export default async function handler(req, res) {
  try {
    const resp = await fetch("https://api.quotable.io/random");
    if (resp.ok) {
      const data = await resp.json();
      return res.status(200).json({ content: data.content, author: data.author, source: "quotable" });
    }
    console.warn("Quotable returned non-OK:", resp.status);
  } catch (err) {
    console.warn("Quotable fetch failed, using local fallback. Error:", err?.message ?? err);
  }

  // Local fallback
  const fallback = randomLocalQuote();
  return res.status(200).json({ content: fallback.content, author: fallback.author, source: "local" });
}
