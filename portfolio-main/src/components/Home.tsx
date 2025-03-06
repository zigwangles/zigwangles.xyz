import { motion } from "framer-motion";
import { Github, MessageCircle, Gamepad2 } from "lucide-react";
import { Button } from "./ui/button";

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-blue-500/10 via-indigo-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/5"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 4}px`,
                height: `${Math.random() * 4}px`,
                animation: `twinkle ${2 + Math.random() * 3}s infinite ${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-4xl w-full glass rounded-2xl p-8 md:p-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image Section */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
            <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden ring-2 ring-white/20">
              <img
                src="https://avatars.githubusercontent.com/u/176533579?v=4"
                alt="MoonyDev Profile"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <div className="space-y-2">
              <motion.span 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-block px-4 py-1 rounded-full text-sm uppercase tracking-wider bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-gray-200"
              >
                Welcome to my portfolio
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text"
              >
                iOS Sideloading Developer
              </motion.h1>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              Passionate about creating innovative sideloading tools and pushing the
              boundaries of iOS development. Specializing in custom application
              deployment and development solutions.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start pt-4"
            >
              <Button
                variant="secondary"
                className="group relative overflow-hidden hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
                onClick={() => window.open("https://github.com/m0onyy", "_blank")}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                <span className="relative z-10">GitHub</span>
              </Button>
              <Button
                variant="secondary"
                className="group relative overflow-hidden hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                onClick={() => window.open("https://discord.com/users/827682781844471908", "_blank")}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                <span className="relative z-10">Discord</span>
              </Button>
              <Button
                variant="secondary"
                className="group relative overflow-hidden hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
                onClick={() => window.open("https://www.roblox.com/users/2219572186/profile", "_blank")}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-pink-500/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <Gamepad2 className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                <span className="relative z-10">Roblox</span>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
