# 🚀 3D Developer Portfolio — Riya Maurya

An interactive 3D developer portfolio built with **React**, **TypeScript**, **Three.js**, and **GSAP** — featuring a scroll-animated 3D character model and smooth-scroll navigation.

> Live: https://portfolio-website-peach-chi.vercel.app/

---

## ✨ Features

- **3D character model** rendered with React Three Fiber (`@react-three/fiber`, `@react-three/drei`)
- **Scroll-driven animations** using GSAP ScrollTrigger, synced with Lenis smooth scroll
- Custom navbar and stepper-based section navigation
- Responsive across desktop and mobile
- Deployed on Vercel

---

## 🧰 Tech Stack

| Category | Tools |
|---|---|
| Core | React, TypeScript, Vite |
| 3D / WebGL | Three.js, React Three Fiber, React Three Drei |
| Animation | GSAP (ScrollTrigger), Lenis |
| Deployment | Vercel |

---

## 🚀 Getting Started

### 1) Clone
```bash
git clone https://github.com/riyaax07/portfolio-website.git
cd portfolio-website
```

### 2) Install
```bash
npm install
```

### 3) Run locally
```bash
npm run dev
```

### 4) Build for production
```bash
npm run build
```

---

## 📁 Project Structure

```
├── src/            # React components, 3D scenes, animations
├── public/         # Static assets
├── api/            # Serverless functions (Vercel)
└── vite.config.ts  # Vite configuration
```

---

## 🧩 Customize

- Update personal info, hero text, and project list in `src/config.ts`
- Swap the 3D model by replacing the `.glb` file and updating the loader
- Adjust scroll animation timing in the GSAP ScrollTrigger setup

---

## 🤝 Connect

- GitHub: [@riyaax07](https://github.com/riyaax07)
- LinkedIn: [riya-maurya](https://www.linkedin.com/in/riya-maurya-42b290309)

---

## 🪪 License

This project is open source and available under the **MIT License**. See [LICENSE](LICENSE).
