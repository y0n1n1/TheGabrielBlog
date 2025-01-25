/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
		colors: {
		  ext: {
			500:"#afafaf",
		  },
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  card: {
			DEFAULT: 'hsl(var(--card))',
			foreground: 'hsl(var(--card-foreground))',
		  },
		  popover: {
			DEFAULT: 'hsl(var(--popover))',
			foreground: 'hsl(var(--popover-foreground))',
		  },
		  primary: {
			DEFAULT: 'hsl(var(--primary))',
			foreground: 'hsl(var(--primary-foreground))',
		  },
		  secondary: {
			DEFAULT: 'hsl(var(--secondary))',
			foreground: 'hsl(var(--secondary-foreground))',
		  },
		  muted: {
			DEFAULT: 'hsl(var(--muted))',
			foreground: 'hsl(var(--muted-foreground))',
		  },
		  accent: {
			DEFAULT: 'hsl(var(--accent))',
			foreground: 'hsl(var(--accent-foreground))',
		  },
		  destructive: {
			DEFAULT: 'hsl(var(--destructive))',
			foreground: 'hsl(var(--destructive-foreground))',
		  },
		  border: 'hsl(var(--border))',
		  input: 'hsl(var(--input))',
		  ring: 'hsl(var(--ring))',
		  chart: {
			'1': 'hsl(var(--chart-1))',
			'2': 'hsl(var(--chart-2))',
			'3': 'hsl(var(--chart-3))',
			'4': 'hsl(var(--chart-4))',
			'5': 'hsl(var(--chart-5))',
		  },
		},
		height: {
		  '10svh': '10svh', // 10% of small viewport height
		  '25svh': '25svh', // 25% of small viewport height
		  '50svh': '50svh', // 50% of small viewport height
		  '75svh': '75svh', // 75% of small viewport height
		  '100svh': '100svh', // 100% of small viewport height
		},
		fontSize: {
		  xs: '0.6rem',
		  '2xs': '0.25rem',
		},
		animation: {
			'ring-color': 'ring-color-animation 12s infinite', // Name of the animation and timing
		  gradient: 'gradient 10s ease infinite',
		  'slide-left': 'slideLeft 11s linear infinite',
		},
		keyframes: {
			'ring-color-animation': {
				'0%': { 'box-shadow': '0 0 0 0px rgba(97, 245, 39, 0.8)' }, // Pink
			  '16%': { 'box-shadow': '0 0 0 8px rgba(97, 245, 39, 0.8)' }, // Pink
			  '24%': { 'box-shadow': '0 0 0 0px rgba(97, 245, 39, 0.8)' }, // Pink
			  '43%': { 'box-shadow': '0 0 0 8px rgba(166, 39, 245, 0.8)' }, // Pink
			  '62%': { 'box-shadow': '0 0 0 0px rgba(166, 39, 245, 0.8)' }, // Pink
			  '81%': { 'box-shadow': '0 0 0 6px rgba(39, 187, 245, 0.8)' }, // Pink
			  '100%': { 'box-shadow': '0 0 0 0px rgba(39, 187, 245, 0.8)' }, // Pink
			},
			slideLeft: {
			  '0%': { transform: 'translateX(0)' },
			  '100%': { transform: 'translateX(-116%)' },
			},
		  gradient: {
			'0%': {
			  backgroundPosition: '0% 50%',
			},
			'50%': {
			  backgroundPosition: '100% 50%',
			},
			'100%': {
			  backgroundPosition: '0% 50%',
			},
		  },
		},
	  },
	},
	plugins: [
		function ({ addUtilities }) {
		  addUtilities({
			'.pause-animation': {
			  animationPlayState: 'paused',
			},
			'.resume-animation': {
				animationPlayState: "running"
			},
		  });
		},
	  ],
  };