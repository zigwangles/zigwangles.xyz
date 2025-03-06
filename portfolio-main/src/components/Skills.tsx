import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 85 },
  { name: "CSS", level: 75 },
  { name: "JavaScript", level: 40 },
  { name: "Swift", level: 45 },
  { name: "Bootstrap JS", level: 35 },
  { name: "XML", level: 30 },
  { name: "Lua", level: 30 },
  { name: "Tailwind CSS", level: 20 },
  { name: "Next.js", level: 20 },
  { name: "Ruby", level: 5 },
  { name: "Node.js", level: 5 },
];

export const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <motion.div 
        className="max-w-3xl w-full glass rounded-2xl p-8 md:p-12 backdrop-blur-lg"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
        >
          Skills & Expertise
        </motion.h2>
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="flex justify-between mb-2">
                <span className="text-gray-200 text-sm font-medium group-hover:text-pink-400 transition-colors">{skill.name}</span>
                <span className="text-gray-200 text-sm font-medium group-hover:text-purple-400 transition-colors">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
