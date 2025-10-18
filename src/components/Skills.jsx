import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  SiC, SiCplusplus, SiPython, SiJavascript, SiHtml5, SiCss3, 
  SiExpress, SiNodedotjs, SiMongodb, SiVisualstudiocode, 
  SiGit, SiGithub, SiFigma
} from 'react-icons/si'
import { HiCode } from 'react-icons/hi'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: 'Languages',
      icon: <HiCode className="text-3xl" />,
      skills: [
        { name: 'C', icon: <SiC />, color: 'text-blue-600' },
        { name: 'C++', icon: <SiCplusplus />, color: 'text-blue-700' },
        { name: 'Python', icon: <SiPython />, color: 'text-yellow-500' },
        { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-400' },
      ],
    },
    {
      title: 'Frameworks & Technologies',
      icon: <HiCode className="text-3xl" />,
      skills: [
        { name: 'HTML5', icon: <SiHtml5 />, color: 'text-orange-600' },
        { name: 'CSS3', icon: <SiCss3 />, color: 'text-blue-500' },
        { name: 'Express.js', icon: <SiExpress />, color: 'text-gray-700 dark:text-gray-300' },
        { name: 'Node.js', icon: <SiNodedotjs />, color: 'text-green-600' },
        { name: 'REST API', icon: <HiCode />, color: 'text-purple-600' },
      ],
    },
    {
      title: 'Tools & Platforms',
      icon: <HiCode className="text-3xl" />,
      skills: [
        { name: 'VS Code', icon: <SiVisualstudiocode />, color: 'text-blue-600' },
        { name: 'Git', icon: <SiGit />, color: 'text-orange-600' },
        { name: 'GitHub', icon: <SiGithub />, color: 'text-gray-800 dark:text-gray-200' },
        { name: 'Figma', icon: <SiFigma />, color: 'text-purple-600' },
        { name: 'Canva', icon: <HiCode />, color: 'text-cyan-500' },
      ],
    },
    {
      title: 'Database',
      icon: <SiMongodb className="text-3xl" />,
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-600' },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold gradient-text mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto rounded-full" />
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="card-gradient p-8 rounded-2xl border border-primary-200 dark:border-primary-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-primary-500 to-accent-500 text-white rounded-xl">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group"
                  >
                    <div className={`text-2xl ${skill.color} group-hover:scale-110 transition-transform duration-200`}>
                      {skill.icon}
                    </div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          variants={itemVariants}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Always learning and exploring new technologies to expand my skillset 🚀
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills
