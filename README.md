# 📝 Quote Generator

A simple **Next.js app** that displays random quotes with options to copy or share them.
Deployed with **Docker** on [Render](https://render.com).

👉 **Live Demo:** [quote-generator](https://quote-generator-6l9c.onrender.com/)

---

## ✨ Features

* 🎲 Generate random quotes
* 📋 Copy quotes to clipboard
* 🐦 Share directly on Twitter
* 🎨 Custom CSS styling (no UI framework)
* 🐳 Dockerized & deployed on Render (Free Tier)
* ⚡ Local fallback quotes when API is unavailable

---

## 🛠️ Tech Stack

* [Next.js 15](https://nextjs.org/) – React framework
* [React 18](https://react.dev/) – UI library
* [Docker](https://www.docker.com/) – Containerization
* [Render](https://render.com/) – Deployment platform

---

## 🚀 Running Locally

Clone the repository:

```bash
git clone https://github.com/PapaPureza999/quote-generator.git
cd quote-generator
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🐳 Running with Docker

Build the image:

```bash
docker build -t quote-generator .
```

Run the container:

```bash
docker run -p 3000:10000 -e PORT=10000 quote-generator
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🔧 Usage Example

1. Open the app.
2. Click the **New Quote** button to fetch a random quote.
3. Click **Copy** to copy the quote to clipboard.
4. Click **Share** to post the quote to Twitter.
