# BroomFi - Cryptocurrency DEX Aggregator built on the Arc blockchain

A modern, dark-themed cryptocurrency trading platform built with Next.js, TypeScript, Framer Motion, and Tailwind CSS.

## Features

- 🎨 Modern dark UI with gradient backgrounds
- 🧹 BroomFi branding with animated components
- 💱 Swap interface for token trading
- 📊 Real-time price ticker
- 🎭 Smooth animations with Framer Motion
- 📱 Responsive design

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Project Structure

```
BroomFi/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main page
├── components/
│   ├── Header.tsx       # Top header with logo and search
│   ├── Sidebar.tsx      # Left navigation sidebar
│   ├── PriceTicker.tsx  # Crypto price ticker
│   └── Swap.tsx         # Swap interface component
└── package.json
```

## Build for Production

```bash
npm run build
npm start
```

