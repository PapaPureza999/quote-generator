import React from "react";

export default function QuoteCard({ quote, loading, error, onNew }) {
  function handleCopy() {
    if (!quote) return;
    const text = `"${quote.content}" — ${quote.author}`;
    try { navigator.clipboard.writeText(text); alert("Copied!"); }
    catch { prompt("Copy:", text); }
  }

  function handleTweet() {
    if (!quote) return;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote.content}" — ${quote.author}`)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="card">
      {loading ? <div className="loading">Loading…</div> :
        error ? <div className="error">{error}</div> :
        quote ? (
          <>
            <p className="quote">“{quote.content}”</p>
            <p className="author">— {quote.author}</p>
          </>
        ) : null
      }

      <div className="controls">
        <button className="btn" onClick={onNew} disabled={loading}>New Quote</button>
        <button className="btn" onClick={handleCopy} disabled={!quote}>Copy</button>
        <button className="btn" onClick={handleTweet} disabled={!quote}>Tweet</button>
      </div>
    </div>
  );
}
