import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  { name: "CherryArchives", link: "https://cherryarchives.netlify.app" },
  { name: "DackHub", link: "https://dackhub.netlify.app" },
  { name: "Cathub", link: "https://cathub.moony-dev.xyz" },
];

export const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-4xl w-full">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="glass rounded-xl p-6 hover:bg-secondary/20 transition-colors cursor-pointer"
              onClick={() => project.link && window.open(project.link, '_blank')}
            >
              <motion.div 
                className="aspect-video rounded-lg overflow-hidden mb-4 glass"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={`/assets/${project.name.toLowerCase().replace(/['\s]/g, '')}.png`}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              {project.link && (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-gray-300 hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Visit Project <ExternalLink className="ml-1 h-4 w-4" />
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
