# Peddireddy Ajay — Portfolio

A modern, responsive single-page developer portfolio showcasing data analytics projects, technical skillsets, and work experience.

**Live site:** https://YOUR-SITE-URL/

Built during the placement training program at [TAP Academy](https://thetapacademy.com/) (full-stack development, AI and augmented reality training).

## Tech Stack

- **React 19**
- **Vite**
- **Tailwind CSS 4**
- **Framer Motion**
- **AOS (Animate On Scroll)**
- **EmailJS**
- **WebGL** (SplashCursor fluid physics)

## Run Locally

Clone the repository and run the following commands:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Environment Variables

To enable the contact form via EmailJS, configure the following variables in a `.env.local` file:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

*(If not configured, the contact form automatically uses an email client mailto fallback).*
