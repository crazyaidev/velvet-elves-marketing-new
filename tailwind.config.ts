import type { Config } from 'tailwindcss'

/**
 * Velvet Elves marketing — design tokens.
 *
 * The `ve-*` palette, radii, shadows and keyframes are ported VERBATIM from the
 * base app (velvet-elves-frontend/tailwind.config.js) so the marketing site and
 * the product read as one brand. Never hand-retype these hex values — they
 * mirror the app's single source of truth.
 *
 * Type system (marketing-specific, by design direction): Geist (modern
 * grotesque) for body/UI + Lora (elegant serif) for editorial headlines. The
 * additions over the app are the marketing display type scale + section rhythm
 * (editorial sizes the dense product UI does not need).
 */
const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        sans: ['Geist Variable', 'Geist', 'Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'Cambria', 'serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // Dense product-UI scale (mockups) — from the app.
        xs: ['11.5px', { lineHeight: '1.4' }],
        sm: ['12.5px', { lineHeight: '1.5' }],
        base: ['13.5px', { lineHeight: '1.6' }],
        lg: ['15px', { lineHeight: '1.5' }],
        xl: ['18px', { lineHeight: '1.4' }],
        '2xl': ['20px', { lineHeight: '1.3' }],
        '3xl': ['24px', { lineHeight: '1.25' }],
        // Marketing editorial scale (page chrome) — additive.
        display: ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        title: ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        subtitle: ['clamp(1.125rem, 1.6vw, 1.375rem)', { lineHeight: '1.4', letterSpacing: '-0.005em' }],
        lead: ['clamp(1.0625rem, 1.4vw, 1.1875rem)', { lineHeight: '1.6' }],
        kicker: ['12px', { lineHeight: '1.4', letterSpacing: '1.5px' }],
      },
      borderRadius: {
        DEFAULT: '6px',
        sm: '4px',
        md: '6px',
        lg: '9px',
        xl: '12px',
        '2xl': '16px',
        pill: '20px',
      },
      colors: {
        // shadcn/ui semantic tokens (HSL vars in index.css)
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border: 'hsl(var(--border))',
        ring: 'hsl(var(--ring))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        // Brand identity tokens
        brand: {
          navy: '#1B2B3C',
          orange: '#EE7623',
          bg: '#F5F7FA',
          'ai-glow': '#FFEEC2',
          text: '#333333',
        },
        // Warm editorial neutrals (marketing chrome only — the premium, concierge
        // warmth the Visual Direction Guide asks for; not used inside product shots).
        cream: '#FAF7F1',
        sand: '#F3EEE5',
        ink: '#141A24', // deep near-navy ink for dark drama sections
        // Applied surface colors — ported from the app's `ve` namespace.
        ve: {
          orange: {
            DEFAULT: '#E26812',
            dark: '#C05A0A',
            xdark: '#8B3F00',
            light: '#FEF3E6',
            mid: '#FDD9AD',
            border: '#F4BA87',
            soft: '#FFF9F4',
          },
          charcoal: {
            DEFAULT: '#2C4C7F',
            mid: '#3A5C94',
            soft: '#5A7AAF',
            muted: '#8EA8C8',
            ghost: '#BDD0E5',
          },
          sidebar: '#1E3356',
          bg: '#F4F4F4',
          surface: {
            DEFAULT: '#FFFFFF',
            2: '#F8F8F6',
            3: '#F0F0EE',
          },
          border: {
            DEFAULT: '#E2E2E0',
            strong: '#CACAC8',
          },
          text: {
            primary: '#1A1A1A',
            secondary: '#4A4A4A',
            muted: '#7A7A7A',
            ghost: '#B0B0B0',
          },
          red: { DEFAULT: '#C8322F', bg: '#FFF0F0', border: '#F5C3C3', text: '#8B1A18', light: '#F07070' },
          amber: { DEFAULT: '#C07A0A', bg: '#FFFBF0', border: '#F0D090', text: '#7A4D00' },
          green: { DEFAULT: '#1A7A52', dark: '#0F5C3C', bg: '#EDF7F3', border: '#A8D9C4', text: '#0D4A30', light: '#5EC69A' },
          blue: { DEFAULT: '#2C4C7F', bg: '#EEF3FC', border: '#B0C4E4', text: '#1A3260', light: '#7FBAFF' },
          purple: { DEFAULT: '#5B3CB8', bg: '#F4F0FD', border: '#C8B8F0', text: '#3A2478' },
          teal: { DEFAULT: '#0E6E70', bg: '#EDFAFA', border: '#A8D8DA', text: '#0A4F50', light: '#4FB3B5' },
          neutral: { DEFAULT: '#7A7A7A', bg: '#F0F0EE', border: '#D4D4D2', text: '#555555' },
          ai: { glow: '#FFEEC2', bg: '#FFFCF3', border: '#F5E2B0' },
        },
      },
      boxShadow: {
        soft: '0 2px 8px rgba(20,20,20,.06)',
        card: '0 2px 8px rgba(20,20,20,.06)',
        'card-hover': '0 4px 20px rgba(45,45,45,0.08)',
        premium: '0 12px 28px rgba(20,20,20,.12)',
        // Marketing-scale elevation for floating hero mockups.
        float: '0 24px 64px -16px rgba(20,30,45,0.28), 0 4px 18px -4px rgba(20,30,45,0.10)',
      },
      spacing: {
        section: '7.5rem',
        'section-sm': '5rem',
      },
      maxWidth: {
        content: '1200px',
        prose: '40rem',
      },
      keyframes: {
        'fade-in': { '0%': { opacity: '0', transform: 'translateY(4px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        'fade-in-up': { '0%': { opacity: '0', transform: 'translateY(10px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        'scale-in': { '0%': { opacity: '0', transform: 'scale(0.97)' }, '100%': { opacity: '1', transform: 'scale(1)' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '0.5' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        // Ambient motion for the hero (slow, calm — never distracting).
        'aurora-1': { '0%,100%': { transform: 'translate3d(0,0,0) scale(1)' }, '50%': { transform: 'translate3d(50px,40px,0) scale(1.18)' } },
        'aurora-2': { '0%,100%': { transform: 'translate3d(0,0,0) scale(1)' }, '50%': { transform: 'translate3d(-60px,30px,0) scale(1.12)' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
        'float-sm': { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        'gradient-pan': { '0%,100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
        // Hero rotating-word enter (replaces the framer-motion crossfade).
        'rotate-word': { '0%': { opacity: '0', transform: 'translateY(0.4em)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out',
        'fade-in-up': 'fade-in-up 0.4s ease-out',
        'scale-in': 'scale-in 0.2s ease-out',
        shimmer: 'shimmer 2s linear infinite',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.2,0.7,0.2,1) infinite',
        'aurora-1': 'aurora-1 16s ease-in-out infinite',
        'aurora-2': 'aurora-2 20s ease-in-out infinite',
        float: 'float 6.5s ease-in-out infinite',
        'float-sm': 'float-sm 5.5s ease-in-out infinite',
        marquee: 'marquee 38s linear infinite',
        'gradient-pan': 'gradient-pan 6s ease-in-out infinite',
        'rotate-word': 'rotate-word 0.42s cubic-bezier(0.22,0.61,0.18,1)',
      },
    },
  },
  plugins: [],
}

export default config
