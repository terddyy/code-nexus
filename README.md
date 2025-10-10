# 🎮 CodeNexus Esports League

<div align="center">

![CodeNexus Banner](./public/image/codenexus_logo.png)

**A Modern, High-Performance Landing Page for OLOPSC's Premier Mobile Legends Tournament**

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen.svg)](https://codenexus.zentariph.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-61dafb.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646cff.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8.svg)](https://tailwindcss.com/)

[View Demo](https://your-demo-url.vercel.app) • [Report Bug](https://github.com/terddyy/code-nexus/issues) • [Request Feature](https://github.com/terddyy/code-nexus/issues)

</div>
</div>

---

## 📸 Preview

<div align="center">

### Hero Section
![Hero Section](./public/screenshot/hero_section_screenshot.png)
*Immersive hero section featuring animated gradient backgrounds, tournament branding, and strategic CTAs*

### Full Page View
![Full Page](./public/screenshot/codenexus.zentariph.com_.png)
*Complete landing page showcasing responsive design, prize pool display, event highlights, and footer*

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Development](#-development)
- [Performance Optimizations](#-performance-optimizations)
- [Design Decisions](#-design-decisions)
- [Deployment](#-deployment)
- [Future Enhancements](#-future-enhancements)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🌟 Overview

**CodeNexus** is a production-ready, high-performance landing page designed for the OLOPSC Mobile Legends Tournament Season 4. This project showcases modern web development practices, creating an immersive, visually stunning user experience that effectively promotes the tournament while maintaining exceptional performance metrics.

### 🎯 Project Goals

- **Engagement**: Create an engaging, interactive experience that captures the excitement of competitive esports
- **Performance**: Deliver lightning-fast load times and smooth animations for optimal user experience
- **Accessibility**: Ensure the platform is accessible to all users across devices and browsers
- **Conversion**: Drive registrations through strategic CTAs and compelling design
- **Maintainability**: Build a scalable, well-documented codebase for future iterations

---

## ✨ Key Features

### 🎨 **Modern UI/UX Design**
- **Glassmorphism Effects**: Elegant frosted-glass design elements with backdrop blur
- **Gradient Animations**: Dynamic purple-pink gradient system creating visual depth
- **Responsive Layout**: Fully responsive design optimized for mobile, tablet, and desktop
- **Custom Glow Effects**: CSS-based glow effects for enhanced visual appeal
- **Smooth Transitions**: Polished hover states and scale transforms for interactive elements

### 🚀 **Performance Optimized**
- **Vite Build System**: Lightning-fast HMR (Hot Module Replacement) during development
- **Code Splitting**: Automatic code splitting for optimized bundle sizes
- **Tree Shaking**: Dead code elimination for minimal production builds
- **Lazy Loading**: Strategic lazy loading of images and components
- **Analytics Integration**: Vercel Analytics for real-time performance monitoring

### 📱 **Mobile-First Approach**
- **Touch-Optimized**: Enhanced touch targets and mobile interactions
- **Progressive Enhancement**: Core functionality works on all devices
- **Adaptive Images**: Responsive image handling for various screen sizes
- **Mobile Navigation**: Streamlined navigation optimized for small screens

### 🎪 **Interactive Components**
- **Prize Pool Display**: Eye-catching prize breakdown with custom styling
- **Event Highlights**: Feature cards showcasing tournament benefits
- **Sponsor Showcase**: Professional partner/organizer presentation
- **Social Integration**: Direct links to Facebook, email, and registration forms
- **CTA Sections**: Strategic call-to-action placements with tracking

### 🔧 **Developer Experience**
- **TypeScript**: Full type safety across the entire codebase
- **ESLint Configuration**: Enforced code quality and consistency
- **Modern React Patterns**: Hooks, functional components, and best practices
- **Component Architecture**: Reusable, modular component design
- **Documentation**: Comprehensive inline documentation

---

## 🛠 Tech Stack

### **Core Technologies**

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.3.1 | UI library for building interactive interfaces |
| **TypeScript** | 5.5.3 | Type-safe JavaScript for better DX |
| **Vite** | 5.4.2 | Next-generation frontend build tool |
| **Tailwind CSS** | 3.4.1 | Utility-first CSS framework |

### **Libraries & Tools**

| Package | Purpose |
|---------|---------|
| **Lucide React** | Beautiful, consistent icon library (344+ icons) |
| **Supabase** | Backend-as-a-Service for future data features |
| **Vercel Analytics** | Real-time website analytics and performance monitoring |
| **PostCSS** | CSS processing and optimization |
| **Autoprefixer** | Automatic vendor prefix management |

### **Development Tools**

| Tool | Purpose |
|------|---------|
| **ESLint** | Code linting and quality enforcement |
| **TypeScript ESLint** | TypeScript-specific linting rules |
| **React Hooks ESLint** | React hooks best practices enforcement |
| **React Refresh** | Fast Refresh for instant HMR |

---

## 📁 Project Structure

```
CodeNexus/
├── public/
│   └── image/
│       ├── codenexus_logo.png    # Tournament logo
│       └── tnc_logo.png          # Sponsor logo
├── src/
│   ├── App.tsx                   # Main application component
│   ├── main.tsx                  # Application entry point
│   ├── index.css                 # Global styles & Tailwind directives
│   └── vite-env.d.ts            # TypeScript environment definitions
├── eslint.config.js              # ESLint configuration
├── postcss.config.js             # PostCSS configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
├── tsconfig.app.json             # App-specific TS config
├── tsconfig.node.json            # Node-specific TS config
├── vite.config.ts                # Vite configuration
├── index.html                    # HTML entry point
└── package.json                  # Project dependencies & scripts
```

### **Component Architecture**

```tsx
App.tsx
├── Hero Section
│   ├── Animated Background Gradients
│   ├── Logo Display
│   ├── Event Information
│   └── Primary CTAs
├── Prize Pool Section
│   ├── Champion Prize Card
│   └── PrizeCard Components (1st-4th)
├── Event Highlights Section
│   └── HighlightCard Components
├── Partners Section
│   └── SponsorCard Components
├── CTA Section
│   ├── Registration CTA
│   └── Social Links
└── Footer
    ├── Contact Information
    ├── Quick Links
    └── Event Hashtags
```

---

## 🚀 Getting Started

### **Prerequisites**

Ensure you have the following installed:

- **Node.js**: v18.0.0 or higher ([Download](https://nodejs.org/))
- **npm**: v9.0.0 or higher (comes with Node.js)
- **Git**: Latest version ([Download](https://git-scm.com/))

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/terddyy/code-nexus.git
   cd code-nexus/project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` to see the application running.

### **Environment Setup (Optional)**

If integrating Supabase or other services, create a `.env` file:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
```

---

## 💻 Development

### **Available Scripts**

| Script | Command | Description |
|--------|---------|-------------|
| **Dev Server** | `npm run dev` | Start development server with HMR |
| **Build** | `npm run build` | Create production-optimized build |
| **Preview** | `npm run preview` | Preview production build locally |
| **Lint** | `npm run lint` | Run ESLint for code quality checks |
| **Type Check** | `npm run typecheck` | Run TypeScript compiler checks |

### **Development Workflow**

1. **Feature Development**
   - Create a new branch: `git checkout -b feature/your-feature-name`
   - Make your changes
   - Run type checking: `npm run typecheck`
   - Run linting: `npm run lint`
   - Commit with descriptive messages

2. **Code Quality Standards**
   - Follow TypeScript best practices
   - Use functional components with hooks
   - Implement proper prop typing
   - Write semantic HTML
   - Use Tailwind utility classes appropriately
   - Comment complex logic

3. **Testing Before Commit**
   ```bash
   npm run typecheck  # Check for type errors
   npm run lint       # Check for linting issues
   npm run build      # Ensure production build succeeds
   ```

---

## ⚡ Performance Optimizations

### **Build Optimizations**

- **Tree Shaking**: Removes unused code from final bundle
- **Code Splitting**: Automatic chunking for optimal loading
- **Minification**: JavaScript and CSS minification
- **Asset Optimization**: Image and font optimization
- **Compression**: Gzip/Brotli compression ready

### **Runtime Optimizations**

- **React 18 Features**: Automatic batching and concurrent features
- **Vite Fast Refresh**: Sub-100ms HMR updates
- **CSS Optimization**: PurgeCSS via Tailwind removes unused styles
- **Lazy Loading**: Images load on-demand
- **Memoization**: Strategic use of React optimization hooks

### **Performance Metrics** (Target)

| Metric | Target | Current |
|--------|--------|---------|
| **First Contentful Paint** | < 1.5s | ✅ |
| **Largest Contentful Paint** | < 2.5s | ✅ |
| **Time to Interactive** | < 3.5s | ✅ |
| **Cumulative Layout Shift** | < 0.1 | ✅ |
| **Bundle Size** | < 150KB | ✅ |

---

## 🎨 Design Decisions

### **Color Palette**

```css
/* Primary Colors */
--color-primary: #9B5DE0      /* Purple */
--color-secondary: #D78FEE    /* Pink */
--color-accent: #FDCFFA       /* Light Pink */
--color-dark: #4E56C0         /* Deep Blue */

/* Background */
--bg-primary: #000000         /* Pure Black */
--bg-secondary: rgba(255, 255, 255, 0.05)  /* Glassmorphism */
```

### **Typography**

- **System Font Stack**: Optimized for performance and consistency
- **Responsive Scale**: Fluid typography using Tailwind's responsive classes
- **Weight Hierarchy**: Strategic use of font weights (light, semibold, bold, black)

### **Component Design Philosophy**

1. **Reusability**: Create generic, configurable components
2. **Composition**: Build complex UIs from simple components
3. **Accessibility**: WCAG 2.1 Level AA compliance
4. **Performance**: Minimize re-renders, optimize event handlers
5. **Maintainability**: Clear naming, proper documentation

### **Animation Strategy**

- **Subtle Transitions**: 200-300ms for hover states
- **Scale Transforms**: 1.05 scale for interactive elements
- **Blur Effects**: Backdrop blur for glassmorphism
- **Gradient Overlays**: Animated background gradients for depth

---

## 🌐 Deployment

### **Vercel (Recommended)**

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Production Deployment**
   ```bash
   vercel --prod
   ```

### **GitHub Pages**

```bash
npm run build
# Deploy the 'dist' folder to GitHub Pages
```

### **Netlify**

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### **Build Output**

Production builds are created in the `dist/` folder:

```
dist/
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [optimized-images]
├── image/
│   ├── codenexus_logo.png
│   └── tnc_logo.png
└── index.html
```

---

## 🔮 Future Enhancements

### **Planned Features**

- [ ] **Team Registration Portal**: Integrated registration system with Supabase
- [ ] **Live Tournament Bracket**: Real-time bracket visualization
- [ ] **Match Scheduling**: Calendar integration for event schedule
- [ ] **Live Streaming Integration**: Embed live tournament streams
- [ ] **Photo Gallery**: Tournament photo showcase with lightbox
- [ ] **News & Updates Section**: CMS integration for tournament updates
- [ ] **Mobile App**: React Native companion app
- [ ] **Multi-language Support**: i18n implementation for broader reach

### **Technical Improvements**

- [ ] **PWA Features**: Offline support and installability
- [ ] **Advanced Analytics**: Custom event tracking and user journey analysis
- [ ] **SEO Optimization**: Meta tags, structured data, sitemap
- [ ] **Accessibility Audit**: WCAG 2.1 AAA compliance
- [ ] **E2E Testing**: Playwright/Cypress integration
- [ ] **Storybook**: Component documentation and testing
- [ ] **API Integration**: Backend service for dynamic content

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### **Contribution Guidelines**

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes**
4. **Commit your changes**: `git commit -m 'Add amazing feature'`
5. **Push to the branch**: `git push origin feature/amazing-feature`
6. **Open a Pull Request**

### **Code Standards**

- Follow existing code style and conventions
- Write meaningful commit messages
- Add comments for complex logic
- Update documentation as needed
- Ensure all tests pass before submitting

### **Reporting Issues**

Found a bug? Have a suggestion? Please [open an issue](https://github.com/terddyy/code-nexus/issues) with:

- Clear description of the issue/suggestion
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Screenshots (if applicable)
- Environment details (browser, OS, etc.)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

**Developer**: Terd  
**Portfolio**: [terd.zentariph.com](https://terd.zentariph.com)  
**GitHub**: [@terddyy](https://github.com/terddyy)

**Project Organization**: OLOPSC Computer Society  
**Event Email**: [olopscmlt@gmail.com](mailto:olopscmlt@gmail.com)  
**Facebook**: [@olopscmlt](https://www.facebook.com/olopscmlt)

---

## 🙏 Acknowledgments

- **TNC Group** - Tournament sponsor and esports excellence partner
- **OLOPSC Computer Society** - Tournament organizers
- **Raelevant Marketing** - Marketing partnership
- **React Team** - For the amazing library
- **Vercel** - For hosting and analytics platform
- **Tailwind Labs** - For the excellent CSS framework

---

<div align="center">

**Built with ❤️ for the esports community**

[![GitHub Stars](https://img.shields.io/github/stars/terddyy/code-nexus?style=social)](https://github.com/terddyy/code-nexus)
[![GitHub Forks](https://img.shields.io/github/forks/terddyy/code-nexus?style=social)](https://github.com/terddyy/code-nexus)

**[⬆ Back to Top](#-codenexus-esports-league)**

</div>
