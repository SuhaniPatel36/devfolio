/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Flat aliases (e.g. bg-main, text-primary, border-subtle)
        main: 'var(--bg-main)',
        surface: 'var(--bg-surface)',
        subtle: 'var(--bg-subtle)',
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        tertiary: 'var(--text-tertiary)',
        
        // Nested aliases (e.g. bg-bg-main, text-text-primary, border-border-subtle)
        bg: {
          main: 'var(--bg-main)',
          surface: 'var(--bg-surface)',
          subtle: 'var(--bg-subtle)',
        },
        border: {
          subtle: 'var(--border-subtle)',
          hover: 'var(--border-hover)',
          focus: 'var(--border-focus)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
        },
        brand: {
          primary: 'var(--brand-primary)',
          'primary-hover': 'var(--brand-primary-hover)',
          'primary-text': 'var(--brand-primary-text, #ffffff)',
          accent: 'var(--brand-accent)',
          'accent-subtle': 'var(--brand-accent-subtle)',
        },
        badge: {
          bg: 'var(--badge-bg)',
          text: 'var(--badge-text)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      borderRadius: {
        'card': '16px',
        'btn': '10px',
        'pill': '9999px',
        'banner': '20px',
      },
      boxShadow: {
        'card': 'var(--card-shadow)',
        'card-hover': 'var(--card-shadow-hover)',
        'elevation': '0 12px 32px -4px rgba(24, 24, 27, 0.08), 0 4px 12px -2px rgba(24, 24, 27, 0.03)',
      },
    },
  },
  plugins: [],
};
