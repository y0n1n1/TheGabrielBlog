import React from "react";

type CircleImageInSquareProps = {
  imageUrl: string;
  altText?: string;
};

const CircleImageInSquare: React.FC<CircleImageInSquareProps> = ({
  imageUrl,
  altText = "Image",
}) => {
  return (
      
<img
  className="w-36 h-36 rounded-full mt-6 ring-4 ring-pink-300 dark:ring-pink-500 animate-ring-color"
  src={imageUrl}
  alt={altText}
/>

  );
};

export default CircleImageInSquare;
