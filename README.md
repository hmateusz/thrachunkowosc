# Tatiana Hajduczek – Rachunkowość

Professional business card website for Tatiana Hajduczek's accounting services, built with modern Svelte architecture.

## 🚀 Features

- **Modern Design**: Clean, professional design optimized for accounting services
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Google Maps**: Embedded map showing office location in Rybnik
- **Smooth Navigation**: Seamless routing between pages with smooth scrolling
- **SEO Optimized**: Proper meta tags and structured content
- **Fast Performance**: Optimized for speed and user experience

## 📋 Pages

- **Home** (`/`): Hero section, service overview, call-to-action
- **About Us** (`/about`): Company story, education, values
- **Services** (`/services`): Detailed service offerings for different client types
- **Pricing** (`/pricing`): Service pricing and promotional offers
- **Contact** (`/contact`): Contact form, office info, interactive map

## 🛠️ Technology Stack

- **Frontend**: Svelte/SvelteKit
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Build Tool**: Vite
- **Maps**: Google Maps API
- **Deployment**: Vercel (recommended)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd thrachunkowosc

# Install dependencies
npm install
# or
pnpm install

# Start development server
npm run dev
# or
pnpm dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
# Build the project
npm run build
# or
pnpm build

# Preview production build
npm run preview
# or
pnpm preview
```

## 📁 Project Structure

```
src/
├── lib/
│   ├── components/
│   │   ├── common/          # Reusable UI components
│   │   ├── layout/          # Header, Footer
│   │   └── sections/        # Page sections (Hero, Services)
│   ├── types/               # TypeScript definitions
│   └── stores/              # Svelte stores
├── routes/                  # SvelteKit pages
│   ├── +layout.svelte       # Main layout
│   ├── +page.svelte         # Home page
│   ├── about/               # About us page
│   ├── services/            # Services page
│   ├── pricing/             # Pricing page
│   └── contact/             # Contact page
└── static/                  # Static assets
```

## 🎨 Customization

### Colors
The primary color scheme is defined in `tailwind.config.js`:
- Primary: Navy blue palette
- Background: White and light blue gradients
- Text: Dark blue and gray tones

### Content Updates
- **Text content**: Update directly in the respective `.svelte` files
- **Contact info**: Modify in `src/routes/contact/+page.svelte`
- **Services**: Update in `src/lib/components/sections/Services.svelte`
- **Pricing**: Modify in `src/routes/pricing/+page.svelte`

### Google Maps
- **Location**: Update coordinates in `src/routes/contact/+page.svelte`
- **API Key**: Replace with your own Google Maps API key
- **Styling**: Customize map appearance in the `initMap()` function

## 🔧 Development

### Code Style
- Follow SvelteKit conventions
- Use TypeScript for type safety
- Implement component-based architecture
- Follow SOLID principles

### Component Guidelines
- Each component has a single responsibility
- Use props for data input, events for output
- Implement proper TypeScript interfaces
- Use Tailwind utility classes for styling

### Adding New Pages
1. Create new directory in `src/routes/`
2. Add `+page.svelte` file
3. Update navigation in `src/lib/components/layout/Header.svelte`
4. Add meta tags for SEO

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables if needed
3. Deploy automatically on push to main branch

### Environment Variables
```env
# Google Maps API Key (optional for development)
GOOGLE_MAPS_API_KEY=your_api_key_here
```

### Vercel Configuration
The project includes `vercel.json` with the correct configuration:
- Build command: `npm run build`
- Output directory: `.svelte-kit/output/client`
- Framework: SvelteKit

## 📱 Mobile Optimization

- Responsive design with mobile-first approach
- Touch-friendly navigation
- Optimized images and assets
- Fast loading times on mobile networks

## 🔍 SEO Features

- Proper meta tags on all pages
- Semantic HTML structure
- Open Graph and Twitter Card meta tags
- Structured data for better search visibility

## 📞 Contact Information

- **Phone**: +48 722 381 309
- **Email**: thajduczek@thrachunkowosc.pl
- **Address**: Ul. Piłsudskiego 6/3, 44-200 Rybnik
- **Hours**: Pn-Pt: 7:30-15:30

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is private and proprietary.

---

**Built with ❤️ using SvelteKit and Tailwind CSS**