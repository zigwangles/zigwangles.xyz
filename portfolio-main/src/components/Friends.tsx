import { motion } from "framer-motion";

const friends = [
  {
    name: "loyahdev",
    description: `Hello! I'm Jaxon, a 14-year-old software and web developer from Canada. I started coding back when I was 8 and have moved to new languages over time such as JS, Swift, Web, and Python. I've learnt a lot in the past 6 years with new projects and fun programs I've attended in my city that have led me to this point. If you'd like to chat or have any questions about my projects, feel free to message me on Discord at loyah. I'll be sure to reply!`,
    image: "https://github.com/loyahdev.png",
    url: "https://loyah.dev",
  },
  {
    name: "Dack",
    description: "A sideloading expert just tryna increase my coding knowledge.",
    image: "https://avatars.githubusercontent.com/u/179164741?v=4",
    url: "https://guns.lol/dack",
  },
  {
    name: "BrocoDev",
    description: "I'm BrocoDev, an iOS and game developer.",
    image: "https://avatars.githubusercontent.com/u/60705848?v=4",
    url: "https://broco8dev.github.io/",
  },
  ...Array(1).fill(null), // Adjust array size as necessary
];

export const Friends = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-6xl w-full">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Friends
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {friends.map((friend, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`glass rounded-xl p-6 h-full ${friend?.url ? 'cursor-pointer hover:scale-105 transition-transform' : ''}`}
              onClick={() => friend?.url && window.open(friend.url, '_blank')}
            >
              {friend ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div 
                      className="w-16 h-16 rounded-full overflow-hidden"
                      whileHover={{ scale: 1.1 }}
                    >
                      <img
                        src={friend.image}
                        alt={friend.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <h3 className="text-xl font-semibold">{friend.name}</h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {friend.description}
                  </p>
                </motion.div>
              ) : (
                <div className="flex items-center justify-center h-full min-h-[200px]">
                  <span className="text-gray-500">Coming Soon</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
