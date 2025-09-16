import { useEffect, useState } from "react";
import QuoteCard from "../components/QuoteCard";

const LOCAL_QUOTES = [
  { content: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { content: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { content: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { content: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { content: "Whether you think you can or you think you can't, you're right.", author: "Henry Ford" }
];

function randomLocal() {
  return LOCAL_QUOTES[Math.floor(Math.random() * LOCAL_QUOTES.length)];
}

export default function Home() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchQuote() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://api.quotable.io/random");
      if (!res.ok) throw new Error("Upstream error");
      const data = await res.json();
      setQuote({ content: data.content, author: data.author, source: "quotable" });
    } catch (err) {
      // fallback to local quotes if network / DNS / CORS fails
      const local = randomLocal();
      setQuote({ ...local, source: "local" });
      setError(""); // keep UI clean; you can show a badge if you want
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { fetchQuote(); }, []);

  return (
    <main className="page">
      <h1 className="title">Quote Generator</h1>
      <div className="center">
        <QuoteCard quote={quote} loading={loading} error={error} onNew={fetchQuote} />
        {quote?.source && <div className="source">Source: {quote.source}</div>}
      </div>
      <footer className="footer">Built with Next.js • Docker • Render</footer>
    </main>
  );
}
