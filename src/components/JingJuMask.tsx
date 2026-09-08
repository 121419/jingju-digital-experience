import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const JingJuMask = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <motion.div
      className="relative w-64 h-64 md:w-96 md:h-96 mx-auto"
      animate={{
        rotateZ: mousePosition.x * 5 - 2.5,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {/* 简化的京剧脸谱SVG */}
      <svg
        viewBox="0 0 200 240"
        className="w-full h-full filter drop-shadow-2xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 脸部轮廓 - 米白色 */}
        <ellipse
          cx="100"
          cy="100"
          rx="70"
          ry="85"
          fill="#F5F1E8"
          stroke="#C41E3A"
          strokeWidth="3"
        />

        {/* 眼睛 - 黑色圆形 */}
        <circle cx="75" cy="85" r="12" fill="#1A1A1A" />
        <circle cx="125" cy="85" r="12" fill="#1A1A1A" />

        {/* 眼睛高光 */}
        <circle cx="77" cy="83" r="4" fill="#F5F1E8" />
        <circle cx="127" cy="83" r="4" fill="#F5F1E8" />

        {/* 眉毛 - 红色弧形 */}
        <path
          d="M 60 70 Q 75 60 90 70"
          stroke="#C41E3A"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 110 70 Q 125 60 140 70"
          stroke="#C41E3A"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />

        {/* 鼻子 */}
        <line
          x1="100"
          y1="90"
          x2="100"
          y2="110"
          stroke="#C41E3A"
          strokeWidth="2"
        />

        {/* 嘴 - 弧形 */}
        <path
          d="M 70 130 Q 100 145 130 130"
          stroke="#C41E3A"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* 红色脸谱纹样 - 左侧 */}
        <path
          d="M 50 95 Q 45 110 50 125"
          stroke="#C41E3A"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />

        {/* 红色脸谱纹样 - 右侧 */}
        <path
          d="M 150 95 Q 155 110 150 125"
          stroke="#C41E3A"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />

        {/* 金色装饰点 */}
        <circle cx="100" cy="50" r="3" fill="#D4AF37" />
        <circle cx="70" cy="140" r="2" fill="#D4AF37" />
        <circle cx="130" cy="140" r="2" fill="#D4AF37" />
      </svg>

      {/* 脉搏动画环 */}
      <motion.div
        className="absolute inset-0 border-2 border-jingju-red rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  )
}

export default JingJuMask