
```markdown
# 📝 Quote Generator

A simple **Next.js app** that displays random quotes with options to copy or share them.  
Deployed with **Docker** on [Render](https://render.com).

👉 **Live Demo:** [quote-generator](https://quote-generator-6l9c.onrender.com/)

---

## ✨ Features
- 🎲 Generate random quotes  
- 📋 Copy quotes to clipboard  
- 🐦 Share quotes directly to Twitter  
- 🎨 Styled with custom CSS (no UI framework)  
- 🐳 Dockerized and deployed on Render (Free Tier)  
- ⚡ Local fallback quotes when API is unreachable  

---

## 🛠️ Tech Stack
- [Next.js 15](https://nextjs.org/) – React framework  
- [React 18](https://react.dev/) – UI library  
- [Docker](https://www.docker.com/) – containerization  
- [Render](https://render.com/) – deployment platform  

---

## 🚀 Running Locally

Clone the repo:

git clone https://github.com/PapaPureza999/quote-generator.git
cd quote-generator
````

Install dependencies:

npm install
```

Start development server:

npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🐳 Running with Docker

Build image:

```bash
docker build -t quote-generator .
```

Run container:

```bash
docker run -p 3000:10000 -e PORT=10000 quote-generator
```

Visit: [http://localhost:3000](http://localhost:3000)


---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

