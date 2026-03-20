/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        zentry:['zentry','sanf-serif'],
        general:['general','sanf-serif'],
        'circular-web':['circular-web','sanf-serif'],
        'robert-medium':['robert-medium','sanf-serif'],
        'robert-regular':['robert-regular','sanf-serif'],
      },
      colors:{
        blue:{
          50:"#F5F5DC",
          75:"#FFF8E7",
          100:"#FFFBF0",
          200:"#1B4332",
          300:"#D4AF37"
        },
        voilet:{
          300:"#228B22"
        },
        yellow:{
          100:"#8B7355",
          300:"#D4AF37"
        },
        eid:{
          green:"#1B4332",
          gold:"#D4AF37",
          cream:"#FFF8E7",
          darkGreen:"#0D2818"
        }
      },
    },
  },
  plugins: [],
}