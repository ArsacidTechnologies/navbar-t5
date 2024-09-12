/** @type {import('tailwindcss').Config} */

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        yekan: ['Yekan', 'sans'],
        Vazir: ['Vazir'],
        'Vazir-Bold': ['Vazir-Bold'],
        'Vazir-Light': ['Vazir-Light'],
        'Vazir-Medium': ['Vazir-Medium'],
        'Vazir-Thin': ['Vazir-Thin'],
      },
      colors: {
        table: {
          bg: 'var(--table-background)',
          bgTh: 'var(--table-background-th)',
          textTh: 'var(--table-text-th)',
          TextTd: 'var(--table-text-td)',
          th: 'var(--table-th)',
          td: 'var(--table-td)',
          odd: 'var(--table-odd)',
          even: 'var(--table-even)',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        sidebar: { background: 'hsl(var(--sidebar-background))' },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        success: 'hsl(var(--success))',
        successforeground: 'hsl(var(--success-forground))',
        rejectedforeground: 'hsl(var(--rejected-forground))',
        rejected: 'hsl(var(--rejected))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        xl: 'calc(var(--radius) + 4px)',
      },

      keyframes: {
        breath: {
          '0%, 100%': { transform: 'scale(0.95)' },
          '50%': { transform: 'scale(1.1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5%)' },
        },
      
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        gradient: 'gradient 8s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    // nextui(),
  ],
}

export default config

