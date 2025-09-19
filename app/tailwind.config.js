import { defineConfig } from 'tailwindcss'

/** @type {import('tailwindcss').Config} */
export default defineConfig({
  // The 'content' array tells Tailwind which files to scan for class names.
  // This is crucial for tree-shaking and keeping your final CSS file small.
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  // The 'tw' object is where you define your custom design system.
  tw: {
    // The 'colors' property allows you to extend or override Tailwind's default color palette.
    colors: {
      'primary': '#1da1f2',
      'dark': '#111827',
      'light': '#f9fafb',
    },
    // The 'fontFamily' property lets you define custom font stacks.
    fontFamily: {
      'sans': ['Inter', 'ui-sans-serif', ui-sans-serif, system-ui, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      'serif': ['Merriweather', 'serif'],
    },
    // You can also add custom spacing, sizes, and other design tokens here.
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
    },
  },
  // Plugins are imported and added here.
  // To add a plugin, you would first install it, then import and add it here.
  plugins: [],
});