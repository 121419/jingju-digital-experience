module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 京剧色彩系统
        'jingju-red': '#C41E3A',      // 中国红
        'jingju-black': '#1A1A1A',    // 墨黑
        'jingju-gold': '#D4AF37',     // 金色
        'jingju-cream': '#F5F1E8',    // 米白
        'jingju-gray': '#3A3A3A',     // 暗灰
        'jingju-zhu': '#8B4040',      // 朱砂色
      },
      fontFamily: {
        serif: ['Noto Serif SC', 'Georgia', 'serif'],
        sans: ['Noto Sans SC', 'Helvetica', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in',
        'slide-up': 'slideUp 0.8s ease-out',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(196, 30, 58, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(196, 30, 58, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
