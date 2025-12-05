# Sample Company Profile Website

A modern, professional company profile website built with React Router, featuring bilingual support (Indonesian & English), responsive design, and a complete set of pages for showcasing company information, services, projects, and career opportunities.

![React Router](https://img.shields.io/badge/React%20Router-7.0+-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0+-38bdf8)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Features

- **🌐 Bilingual Support** - Full Indonesian and English language support with easy language toggle
- **📱 Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- **🎨 Modern UI/UX** - Professional corporate design with navy blue and white color scheme
- **⚡ Fast Performance** - Server-side rendering (SSR) with React Router
- **🔍 SEO Friendly** - Meta tags and semantic HTML structure
- **🎭 Smooth Animations** - Fade-in on scroll animations and smooth transitions
- **📄 Complete Pages**:
  - Home page with hero section, company overview, services, and featured projects
  - About pages (Company Profile, Vision & Mission, Our Team)
  - Services pages (Overview, Product Development, IT Consulting, Marketing Solutions)
  - Projects portfolio page
  - Careers page with job listings and application form
  - Contact page with form and company information

## 🚀 Tech Stack

- **Framework**: React Router v7
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.1.13
- **State Management**: React Context API
- **Internationalization**: Custom i18n implementation
- **Build Tool**: Vite

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd sample-company-profile
```

2. Install dependencies:
```bash
npm install
```

## 🛠️ Development

Start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server (after build)

## 🏗️ Building for Production

Create a production build:

```bash
npm run build
```

The build output will be in the `build/` directory:
```
build/
├── client/    # Static assets
└── server/   # Server-side code
```

## 📁 Project Structure

```
sample-company-profile/
├── app/
│   ├── components/          # Reusable components
│   │   ├── Navbar.tsx       # Navigation bar with dropdown menus
│   │   ├── Footer.tsx       # Footer component
│   │   ├── HeroSection.tsx  # Hero banner component
│   │   ├── ServiceCard.tsx  # Service card component
│   │   ├── TeamCard.tsx     # Team member card
│   │   ├── ContactForm.tsx # Contact form with validation
│   │   └── UI/              # UI components (modals, toggles, etc.)
│   ├── routes/              # Page routes
│   │   ├── home.tsx         # Home page
│   │   ├── about.*.tsx      # About pages
│   │   ├── services.*.tsx   # Services pages
│   │   ├── projects.tsx     # Projects page
│   │   ├── careers.*.tsx    # Careers pages
│   │   └── contact.tsx     # Contact page
│   ├── contexts/            # React contexts
│   │   └── LanguageContext.tsx  # Language context provider
│   ├── utils/               # Utilities
│   │   └── i18n.ts          # Internationalization translations
│   └── root.tsx             # Root layout
├── public/                  # Static assets
│   └── favicon.svg          # Favicon
└── package.json
```

## 🌍 Internationalization

The website supports two languages:
- **Indonesian (ID)** - Default language
- **English (EN)** - Secondary language

Language can be toggled using the language selector in the navbar. The selected language is persisted in localStorage.

All translations are managed in `app/utils/i18n.ts`.

## 🎨 Customization

### Colors

The main color scheme uses:
- Primary: Navy Blue (`#1e3a8a` / `blue-900`)
- Background: White and Gray (`white`, `gray-50`)
- Text: Gray shades (`gray-900`, `gray-600`, `gray-700`)

### Logo

The logo is a custom SVG icon (lightning bolt) that can be customized in:
- `app/components/Navbar.tsx`
- `app/components/Footer.tsx`
- `public/favicon.svg`

### Content

All content can be customized by editing:
- Page components in `app/routes/`
- Translations in `app/utils/i18n.ts`
- Images (currently using Unsplash placeholders)

## 🚀 Deployment

### Netlify Deployment (Recommended)

This project is configured for easy deployment to Netlify.

#### Quick Deploy

1. **Push to GitHub** and connect your repository to Netlify
2. Netlify will auto-detect settings from `netlify.toml`
3. Build settings (auto-configured):
   - Build command: `npm run build`
   - Publish directory: `build/client`
   - Node version: `18`

#### Manual Deploy via CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

#### Configuration Files

- `netlify.toml` - Netlify configuration with build settings, redirects, and headers
- `netlify/functions/server.ts` - Serverless function for SSR support

For detailed deployment instructions, see [.netlify/README.md](.netlify/README.md)

### Docker Deployment

To build and run using Docker:

```bash
docker build -t sample-company-profile .

# Run the container
docker run -p 3000:3000 sample-company-profile
```

The containerized application can be deployed to any platform that supports Docker:
- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway
- Vercel

## 📝 Notes

- This is a **sample/demo website** for demonstration purposes only
- All content, images, and information are for illustrative purposes
- The website includes a modal notice on first visit informing users it's a sample
- Images are currently using Unsplash placeholders - replace with actual images for production use

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Built with ❤️ using React Router and modern web technologies.

---

**Note**: This is a sample company profile website template. All company information, images, and content are for demonstration purposes only.
