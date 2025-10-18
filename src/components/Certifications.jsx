import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiAcademicCap, HiStar, HiLightningBolt, HiBadgeCheck } from 'react-icons/hi'

const Certifications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const achievements = [
    {
      type: 'certification',
      title: 'Web Development Internship',
      organization: 'InternPe',
      date: '2024',
      description: 'Completed comprehensive web development internship focusing on modern web technologies and best practices.',
      icon: <HiAcademicCap className="text-3xl" />,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      type: 'award',
      title: 'Project Expo Winner',
      organization: 'College Technical Fest',
      date: '2025',
      description: 'First place in project exhibition for innovative IoT-based solar tracking and irrigation system.',
      icon: <HiBadgeCheck className="text-3xl" />,
      color: 'from-yellow-500 to-orange-500',
    },
    {
      type: 'award',
      title: 'Tech Quiz Champion',
      organization: 'Department Event',
      date: '2024',
      description: 'Winner of technical quiz competition demonstrating strong knowledge in programming and electronics.',
      icon: <HiStar className="text-3xl" />,
      color: 'from-purple-500 to-pink-500',
    },
    {
      type: 'award',
      title: 'Circuit Debugging Excellence',
      organization: 'Technical Workshop',
      date: '2023',
      description: 'Awarded for exceptional performance in circuit debugging and troubleshooting competition.',
      icon: <HiLightningBolt className="text-3xl" />,
      color: 'from-green-500 to-teal-500',
    },
    {
      type: 'award',
      title: 'Best Paper Presentation',
      organization: 'Academic Symposium',
      date: '2022',
      description: 'Recognition for outstanding paper presentation on emerging technologies in electrical engineering.',
      icon: <HiAcademicCap className="text-3xl" />,
      color: 'from-red-500 to-pink-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold gradient-text mb-4">
            Certifications & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto rounded-full" />
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Recognition and milestones achieved throughout my academic and professional journey
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 via-accent-400 to-primary-400 transform md:-translate-x-1/2" />

          {/* Achievement Items */}
          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full transform md:-translate-x-1/2 z-10 shadow-lg"
                  whileHover={{ scale: 1.5 }}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: index * 0.15 }}
                />

                {/* Content Card */}
                <motion.div
                  className={`ml-16 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                  }`}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="card-gradient p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-200 dark:border-primary-800">
                    {/* Icon and Type */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 bg-gradient-to-br ${achievement.color} text-white rounded-xl shadow-md`}>
                        {achievement.icon}
                      </div>
                      <span className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-xs font-semibold text-gray-700 dark:text-gray-300 capitalize">
                        {achievement.type}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                      {achievement.title}
                    </h3>

                    {/* Organization and Date */}
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
                        {achievement.organization}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {achievement.date}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {achievement.description}
                    </p>

                    {/* Decorative Bottom Border */}
                    <div className={`mt-4 h-1 bg-gradient-to-r ${achievement.color} rounded-full`} />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Certifications', value: '1+', icon: <HiAcademicCap /> },
            { label: 'Awards', value: '4+', icon: <HiBadgeCheck /> },
            { label: 'Competitions', value: '3+', icon: <HiStar /> },
            { label: 'Years Active', value: '3+', icon: <HiLightningBolt /> },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="card-gradient p-6 rounded-2xl text-center border border-primary-200 dark:border-primary-800 shadow-lg"
            >
              <div className="flex justify-center mb-3 text-4xl text-primary-600 dark:text-primary-400">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Certifications
