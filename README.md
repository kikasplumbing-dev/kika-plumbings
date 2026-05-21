# Kika Plumbing

A professional company website for **Kika Plumbing**, a plumbing, water treatment, and cleaning services company based in Lagos, Nigeria.

## About the Project

Kika Plumbing is a modern, responsive React web application built to showcase plumbing, water treatment, and cleaning services. The site features a clean design with the company's brand colors — deep blue, aqua, and orange — and includes multiple pages for company information, services, and contact details.

The company was founded in 2018 and serves residential and commercial clients across Nigeria.

## Features

- **Home Page** — Hero section with company overview and key service highlights
- **About Page** — Company history, mission, and values
- **Services Page** — Detailed service listings including:
  - Plumbing Installation & Repair
  - Water Treatment & Filtration (RO Systems)
  - Pipe & Leak Repair
  - Drain Cleaning & Unclogging
  - Emergency Plumbing
  - Home Cleaning
  - Laundry & Dry Cleaning
  - General Fumigation
  - Office Cleaning
  - New Apartment Cleaning
- **Contact Page** — Contact form and direct call-to-action buttons
- **Social Links** — Facebook, LinkedIn, and Telegram integration

## Tech Stack

- [React](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — Type-safe JavaScript
- [Vite](https://vitejs.dev/) — Build tool and dev server
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) — Accessible, customizable UI components
- [React Router](https://reactrouter.com/) — Client-side routing
- [Lucide React](https://lucide.dev/) — Icon library
- [Lovable Cloud](https://lovable.dev/) — Backend (database, auth, edge functions)

## Project Structure

```
src/
  components/        # Reusable UI components (Navbar, Footer, Layout)
  pages/           # Route-level pages (Home, About, Services, Contact)
  integrations/      # Backend integrations (Lovable Cloud client)
  hooks/             # Custom React hooks
  lib/               # Utility functions and helpers
public/              # Static assets
supabase/            # Edge functions and backend config
```

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm or bun

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project
cd <PROJECT_NAME>

# Install dependencies
npm install
# or
bun install
```

### Development

```sh
# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173` (or the port shown in your terminal).

### Build for Production

```sh
npm run build
```

Output will be generated in the `dist/` directory.

## Brand Identity

- **Primary Colors**: Deep Blue (#004080), Aqua (#00BFFF), Orange (#FF6600)
- **Typography**: Poppins (headings), Roboto (body text)
- **Location**: Lagos, Nigeria
- **Founded**: 2018

## Contact

- **Telegram**: [@Kikaplumbing](http://t.me/Kikaplumbing)
- **LinkedIn**: [Emmanuel Eneji](https://www.linkedin.com/in/emmanuel-eneji-0a3336103)
- **Facebook**: [Kika Plumbing](https://www.facebook.com/profile.php?id=61559059035586)

## License

This project is proprietary to Kika Plumbing.
