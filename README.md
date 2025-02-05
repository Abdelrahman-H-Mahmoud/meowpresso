# ☕ Coffee Store Explorer

![Coffee Store Explorer](https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&h=400&fit=crop)

A modern, elegant web application for discovering local coffee stores. Built with Next.js 14 and TypeScript, featuring real-time opening hours, customer reviews, and a beautiful dark mode.

## ✨ Features

### For Coffee Lovers
- 🔍 Browse and discover local coffee stores
- ⭐ Read and write authentic reviews
- 🕒 Check real-time opening status
- 📍 Get directions to your favorite spots

### Technical Features
- 🎨 Modern, responsive UI with Tailwind CSS
- 🌓 Dark mode support
- ⚡ Server-side rendering with Next.js 14
- 📱 Mobile-first design
- 🔄 Real-time data updates with React Query

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **State Management**: React Query
- **Database**: PostgreSQL with Prisma
- **API**: Next.js API Routes
- **UI Components**: Custom components with Lucide Icons

## 🚀 Getting Started

1. **Clone and Install**
```bash
git clone https://github.com/yourusername/coffee-store-explorer.git
cd coffee-store-explorer
npm install
```

2. **Set up Environment**
```bash
cp .env.example .env
# Update .env with your database credentials
```

3. **Database Setup**
```bash
npx prisma migrate dev
npx prisma db seed
```

4. **Start Development Server**
```bash
npm run dev
```

Visit `http://localhost:3000` to see the magic! ✨

## 📁 Project Structure

```
src/
├── app/                  # Next.js app router
│   ├── stores/          # Store pages & components
│   └── api/             # API endpoints
├── components/          # Shared components
├── hooks/              # Custom React hooks
└── server/             # Server-side code
```

## 📸 Screenshots

| Light Mode | Dark Mode |
|------------|-----------|
| [Homepage Light] | [Homepage Dark] |
| [Store Details Light] | [Store Details Dark] |

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## 🙏 Acknowledgments

- Coffee store images from [Unsplash](https://unsplash.com)
- Icons by [Lucide Icons](https://lucide.dev)
- UI inspiration from various coffee apps

---

<p align="center">
  Made with ☕ and 💖 by [Your Name]
</p>
