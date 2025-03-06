import { Star } from "lucide-react";
import { useEffect, useState } from "react";

interface StarProps {
  x: number;
  y: number;
}

const StarEffect = () => {
  const [stars, setStars] = useState<StarProps[]>([]);

  useEffect(() => {
    const handleInteraction = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      
      // Create fewer stars with more controlled positioning
      const newStars = Array.from({ length: 3 }, (_, i) => ({
        x: clientX + (Math.random() - 0.5) * 20, // Reduced spread
        y: clientY + (Math.random() - 0.5) * 20, // Reduced spread
      }));
      
      setStars((prev) => [...prev, ...newStars]);
      
      // Reduced timeout to 600ms for faster disappearance
      setTimeout(() => {
        setStars((prev) => prev.filter((star) => !newStars.includes(star)));
      }, 600);
    };

    window.addEventListener('click', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };
  }, []);

  return (
    <>
      {stars.map((star, index) => (
        <div
          key={index}
          className="fixed pointer-events-none z-50"
          style={{
            left: star.x - 10,
            top: star.y - 10,
            animation: 'star-sparkle 0.6s ease-out forwards',
          }}
        >
          <Star 
            className="text-pink-400/80" 
            fill="currentColor"
            style={{
              transform: `rotate(${Math.random() * 360}deg) scale(${0.6 + Math.random() * 0.3})`,
              width: `${16 + Math.random() * 8}px`, // Smaller stars
              height: `${16 + Math.random() * 8}px`, // Smaller stars
              filter: 'drop-shadow(0 0 4px rgba(236, 72, 153, 0.5))', // Added glow effect
            }}
          />
        </div>
      ))}
    </>
  );
};

export default StarEffect;