import { motion } from 'framer-motion'
import { useState } from 'react'
import JingJuMask from '../components/JingJuMask'

const Home = () => {
  const [isEntered, setIsEntered] = useState(false)

  return (
    <div className="stage-bg min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* 舞台帷幕顶部装饰 */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-jingju-red to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      />

      {/* 主容器 */}
      <motion.div
        className="relative z-10 text-center px-4 md:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* 脸谱动效 - 核心入口 */}
        {!isEntered ? (
          <motion.div
            className="mb-8 cursor-pointer"
            onClick={() => setIsEntered(true)}
            whileHover={{ scale: 1.05 }}
          >
            <JingJuMask />
          </motion.div>
        ) : null}

        {/* 标题 */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="jingju-title">戏韵·新生</h1>
          <p className="jingju-subtitle">京剧文化数字体验平台</p>
        </motion.div>

        {/* 副标题 */}
        <motion.p
          className="text-jingju-cream text-lg mt-8 max-w-2xl mx-auto leading-relaxed font-light"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          在数字的舞台上，感受传统京剧的魅力。
          <br />
          从观看到参与，让古老的艺术在你的指尖复活。
        </motion.p>

        {/* 按钮组 */}
        <motion.div
          className="mt-12 flex flex-col md:flex-row gap-6 justify-center items-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <button className="btn-jingju" onClick={() => setIsEntered(true)}>
            进入剧场
          </button>
          <button className="btn-jingju-outline">
            了解更多
          </button>
        </motion.div>
      </motion.div>

      {/* 舞台帷幕底部装饰 */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-jingju-red to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      />
    </div>
  )
}

export default Home