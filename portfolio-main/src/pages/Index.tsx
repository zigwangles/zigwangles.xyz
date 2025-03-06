import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Home } from "@/components/Home";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Friends } from "@/components/Friends";
import { AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const Index = () => {
  const [currentTab, setCurrentTab] = useState("Home");

  const renderContent = () => {
    switch (currentTab) {
      case "Home":
        return <Home />;
      case "Skills":
        return <Skills />;
      case "Projects":
        return <Projects />;
      case "Friends":
        return <Friends />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500/40 via-purple-500/30 to-indigo-500/20 relative overflow-hidden">
      {/* Background Stars */}
      {[...Array(20)].map((_, i) => (
        <Star
          key={i}
          className="absolute text-pink-200/30 animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `scale(${0.5 + Math.random()})`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}
      <Navigation currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <AnimatePresence mode="wait">
        {renderContent()}
      </AnimatePresence>
    </div>
  );
};

export default Index;