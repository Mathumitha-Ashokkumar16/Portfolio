import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold gradient-text mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative group"
          >
            <div className="relative z-10">
              <motion.div
                className="relative overflow-hidden rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Placeholder for profile image */}
                <div className="aspect-square bg-gradient-to-br from-primary-200 via-accent-200 to-primary-300 dark:from-primary-800 dark:via-accent-800 dark:to-primary-900 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-48 h-48 mx-auto bg-white/50 dark:bg-gray-800/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <span className="text-6xl font-bold gradient-text">MA</span>
                    </div>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm">
                      Add your profile photo here
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-400/20 rounded-full blur-2xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-400/20 rounded-full blur-2xl -z-10" />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                Hello! I'm <span className="font-semibold gradient-text">Mathumitha A</span>, 
                a passionate final-year Electrical and Electronics Engineering student with a 
                growing expertise in full-stack web development and IoT innovations.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                I'm an enthusiastic engineering student with foundational knowledge in web 
                development and a growing interest in full-stack technologies. My journey in 
                tech has been driven by curiosity and a desire to create impactful digital 
                experiences that solve real-world problems.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                I'm passionate about learning new technologies, problem-solving, and building 
                innovative solutions that bridge the gap between hardware and software. Whether 
                it's developing responsive web applications or creating IoT systems, I'm always 
                excited to take on new challenges.
              </p>
            </div>

            {/* Quick Stats */}
            <motion.div 
              className="grid grid-cols-2 gap-4 pt-6"
              variants={containerVariants}
            >
              {[
                { label: 'Projects', value: '3+' },
                { label: 'Certifications', value: '5+' },
                { label: 'Technologies', value: '10+' },
                { label: 'Awards', value: '4+' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="card-gradient p-4 rounded-xl text-center border border-primary-200 dark:border-primary-800"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
