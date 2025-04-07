
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				cyber: {
					'black': '#0c0c0f',
					'dark': '#121318',
					'purple': '#8b5cf6',
					'cyan': '#06b6d4',
					'pink': '#ec4899',
					'blue': '#3b82f6',
					'green': '#10b981'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				'cyber': ['Orbitron', 'sans-serif'],
				'mono': ['Space Mono', 'monospace'],
				'sans': ['Inter', 'sans-serif']
			},
			boxShadow: {
				'neon-purple': '0 0 5px #8b5cf6, 0 0 20px #8b5cf6',
				'neon-cyan': '0 0 5px #06b6d4, 0 0 20px #06b6d4',
				'neon-pink': '0 0 5px #ec4899, 0 0 20px #ec4899',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						opacity: '1',
						boxShadow: '0 0 5px rgba(139, 92, 246, 0.7), 0 0 10px rgba(139, 92, 246, 0.5)'
					},
					'50%': {
						opacity: '0.8',
						boxShadow: '0 0 15px rgba(139, 92, 246, 0.8), 0 0 20px rgba(139, 92, 246, 0.6)'
					},
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'text-flicker': {
					'0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '0.99' },
					'20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.4' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				'circuit-flow': {
					'0%': { strokeDashoffset: '100%' },
					'100%': { strokeDashoffset: '0%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-glow': 'pulse-glow 2s infinite',
				'float': 'float 6s ease-in-out infinite',
				'text-flicker': 'text-flicker 3s linear infinite',
				'shimmer': 'shimmer 3s linear infinite',
				'circuit-flow': 'circuit-flow 3s ease-out infinite'
			},
			backgroundImage: {
				'cyber-grid': "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1h98v98H1V1zm0 0v10h98V1H1z' fill='%235A67D8' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
				'cyber-circuits': "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 15h10v10H15V15zm-5 0h5v20H10V15zm5 20h15v5H15v-5zm15-5h5v10h-5V30zm-10 0h5v10h-5V30zm5-10h5v5h-5v-5zm30-5h10v10H45V15zm-5 0h5v20h-5V15zm5 20h15v5H45v-5zm15-5h5v10h-5V30zm-10 0h5v10h-5V30zm5-10h5v5h-5v-5z' fill='%235A67D8' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
