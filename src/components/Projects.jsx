import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiExternalLink, HiCode } from 'react-icons/hi'
import { SiGithub } from 'react-icons/si'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: 'Solar Tracking & Smart Irrigation',
      description: 'An innovative IoT-based system combining solar tracking technology with automated irrigation. Uses ESP32 microcontroller and soil moisture sensors to optimize energy collection and water usage for sustainable agriculture.',
      tags: ['IoT', 'ESP32', 'Sensors', 'Automation'],
      category: 'IoT',
      gradient: 'from-yellow-400 to-orange-500',
      icon: '🌞',
      github: '#',
    },
    {
      title: 'To-Do List Application',
      description: 'A responsive and intuitive task management web application built with vanilla JavaScript. Features include task creation, editing, deletion, local storage persistence, and a clean, modern UI with smooth animations.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage'],
      category: 'Web Development',
      gradient: 'from-blue-400 to-cyan-500',
      icon: '✓',
      github: 'https://github.com/Mathumitha-Ashokkumar16/To-do-List',
    },
    {
      title: 'E-Commerce Website',
      description: 'A fully responsive e-commerce frontend featuring product listings, shopping cart functionality, search and filter options, and an elegant user interface. Built with modern web technologies and best UX practices.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      category: 'Web Development',
      gradient: 'from-purple-400 to-pink-500',
      icon: '🛒',
      github: 'https://github.com/Mathumitha-Ashokkumar16/E-Commerce-Website',
    },
  ]

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
      },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto rounded-full" />
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my work in web development and IoT innovations
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="h-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
                {/* Project Icon/Header */}
                <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                  <motion.div
                    className="text-8xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.icon}
                  </motion.div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800 dark:text-gray-200">
                    {project.category}
                  </div>

                  {/* Overlay on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white dark:bg-gray-800 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        if (project.github === '#') {
                          e.preventDefault()
                          alert('GitHub link coming soon!')
                        }
                      }}
                    >
                      <SiGithub className="text-2xl text-gray-800 dark:text-gray-200" />
                    </motion.a>
                    <motion.button
                      className="p-3 bg-white dark:bg-gray-800 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <HiExternalLink className="text-2xl text-gray-800 dark:text-gray-200" />
                    </motion.button>
                  </motion.div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Mathumitha-Ashokkumar16"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <SiGithub size={20} />
            View More on GitHub
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects
