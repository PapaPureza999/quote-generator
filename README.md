

## 📄 `README.md`

```markdown
# 📜 Quote Generator

A simple web app built with **Next.js (React)** that fetches random quotes from the free [Quotable API](https://api.quotable.io).  
It lets you:
- Generate random quotes
- Copy quotes to clipboard
- Share quotes on Twitter

The project is **Dockerized** and ready to deploy on **Render free tier**.

---

## 🚀 Features
- Fetch random quotes from an API
- Display quote + author
- New Quote button
- Copy to clipboard
- Tweet directly
- Responsive, minimal UI

---

## 🛠 Tech Stack
- **React** (with Next.js pages router)
- **CSS** for styling
- **Docker** for containerization
- **Render** for deployment


---

## 🖥 Run Locally

1. Clone this repository:
   ```bash
   git clone <your-repo-url>
   cd quote-generator

2. Install dependencies:

   ```bash
   npm install

3. Start the development server:

   ```bash
   npm run dev

   App will run at 👉 [http://localhost:3000](http://localhost:3000)

4. Build and run production:

   ```bash
   npm run build
   PORT=3000 npm start
   ```

---

## 🐳 Run with Docker

1. Build the image:

   ```bash
   docker build -t quote-generator .
   ```

2. Run the container:

   ```bash
   docker run -p 3000:10000 -e PORT=10000 quote-generator
   ```

3. Open 👉 [http://localhost:3000](http://localhost:3000)

---