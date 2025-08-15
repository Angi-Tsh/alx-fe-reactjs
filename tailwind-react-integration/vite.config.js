import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'  //added to config to use Tailwind CSS

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(), // ✅ Add this to use Tailwind CSS
  ],
})


