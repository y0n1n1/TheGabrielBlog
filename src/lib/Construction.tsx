import React, { useEffect, useState } from 'react';

const ConstructionSection: React.FC = () => {
  const emojis = ['🛠️', '🔨', '🔨', '🔨', '🧱', '🧱', '🧱', '🧱', '🧱', '🏗️', '🏢', '🚧', '🚧', '🚧', '⚒️', '🪚', '🪚', '🪜', '🧰'];
  const [emojiPositions, setEmojiPositions] = useState<{ x: number, y: number, emoji: string }[]>([]);
  const [emojiCount, setEmojiCount] = useState(0);

  const centerX = 50; // 50% for the center of the screen
  const centerY = 50; // 50% for the center of the screen
  const safeRadius = 15; // The safe area radius (in percent) where no emoji should appear

  // Function to check if the emoji is too close to the center
  const isTooCloseToCenter = (x: number, y: number) => {
    return Math.abs(x - centerX) < safeRadius && Math.abs(y - centerY) < safeRadius;
  };

  // Adjust emoji count based on window width
  useEffect(() => {
    const updateEmojiCount = () => {
      const width = window.innerWidth;
      // Scale emojis count between 0 and 10 based on window width (from 100px to 1000px)
      const count = Math.min(Math.max(Math.floor((width - 100) / 90), 0), 10);
      setEmojiCount(count);
    };

    updateEmojiCount(); // Initial calculation
    window.addEventListener('resize', updateEmojiCount); // Recalculate on window resize

    return () => {
      window.removeEventListener('resize', updateEmojiCount);
    };
  }, []);

  // Generate random positions for the emojis
  useEffect(() => {
    const positions = Array.from({ length: emojiCount }).map(() => {
      let x, y;

      // Keep generating until the position is far enough from the center
      do {
        x = Math.random() * 100;
        y = Math.random() * 100;
      } while (isTooCloseToCenter(x, y));

      return {
        x,
        y,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
      };
    });

    setEmojiPositions(positions);
  }, [emojiCount]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Emojis scattered across the screen */}
      {emojiPositions.map((position, index) => (
        <div
          key={index}
          className="absolute text-4xl "
          style={{
            left: `${position.x}%`,
            top: `${position.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {position.emoji}
        </div>
      ))}

      {/* Center message */}
      <div className="absolute text-2xl text-gray-700 font-semibold z-10">
        This section is currently under construction
      </div>
    </div>
  );
};

export default ConstructionSection;
