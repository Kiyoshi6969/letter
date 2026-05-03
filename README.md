# 💌 Romantic Website — Setup Guide

A beautiful, interactive romantic website built with React + Vite.

---

## 📁 Project Structure

```
romantic-website/
├── public/
│   ├── images/          ← Put your 4 photos here
│   │   ├── photo1.jpg
│   │   ├── photo2.jpg
│   │   ├── photo3.jpg
│   │   └── photo4.jpg
│   ├── music/           ← Put your music file here
│   │   └── background.mp3
│   └── heart.svg
├── src/
│   ├── components/
│   │   ├── AnimatedBackground.jsx
│   │   ├── Hero.jsx
│   │   ├── Letter.jsx
│   │   └── Slideshow.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Step 1 — Open in VS Code

1. Extract / move this folder somewhere on your computer
2. Open **VS Code**
3. Click **File → Open Folder** and select `romantic-website`

---

## 📦 Step 2 — Install Dependencies

Open the **VS Code Terminal** (`` Ctrl+` `` or Terminal → New Terminal) and run:

```bash
npm install
```

---

## ▶️ Step 3 — Run Locally

```bash
npm run dev
```

Open your browser and go to: **http://localhost:5173**

---

## 🖼️ Step 4 — Add Your Photos

1. Get 4 of your favorite photos (JPG format works best)
2. Rename them: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, `photo4.jpg`
3. Copy them into the **`public/images/`** folder
4. The slideshow will automatically show them!

To change the captions under each photo, open:
`src/components/Slideshow.jsx`
And edit the `caption:` text inside the `SLIDES` array.

---

## 🎵 Step 5 — Add Your Music

1. Download your romantic background music (MP3 format)
2. Rename the file to: `background.mp3`
3. Copy it into the **`public/music/`** folder
4. The music will play automatically when she clicks the envelope!

---

## ✏️ Step 6 — Customize (Optional)

| What to change | Where to find it |
|---|---|
| Hero title text | `src/components/Hero.jsx` |
| Letter content | `src/components/Letter.jsx` |
| Photo captions | `src/components/Slideshow.jsx` — `SLIDES` array |
| Colors / fonts | `src/index.css` — `:root` variables |
| Music file path | `src/components/Letter.jsx` — `MUSIC_PATH` |

---

## 🌐 Step 7 — Deploy on Vercel (Free!)

### Option A: Using the Vercel website (easiest)

1. Go to [vercel.com](https://vercel.com) and create a free account
2. Install the **Vercel CLI**:
   ```bash
   npm install -g vercel
   ```
3. In your project folder, run:
   ```bash
   vercel
   ```
4. Follow the prompts — it will give you a public URL!

### Option B: Using GitHub + Vercel (recommended for updates)

1. Create a free account on [github.com](https://github.com)
2. Create a new repository (name it `romantic-website`)
3. In VS Code terminal:
   ```bash
   git init
   git add .
   git commit -m "first commit"
   git remote add origin https://github.com/YOUR_USERNAME/romantic-website.git
   git push -u origin main
   ```
4. Go to [vercel.com](https://vercel.com) → **Add New Project**
5. Import your GitHub repository
6. Click **Deploy** — done! 🎉

Your site will be live at something like: `https://romantic-website.vercel.app`

---

## 💡 Tips

- **Music autoplay**: Some browsers block music autoplay. The music starts only when she clicks the envelope — this is intentional and works correctly.
- **Mobile**: The site is fully responsive and looks great on phones.
- **Large photos**: If your photos are very large files, compress them at [squoosh.app](https://squoosh.app) for faster loading.
- **Custom domain**: On Vercel, you can add a custom domain for free (e.g., `forluv.com`) in your project settings.

---

Made with ❤️ — For Takahiro & his love.
