import React from 'react';

type ImageCardProps = {
  src: string;
  alt: string;
};

const ImageCard: React.FC<ImageCardProps> = ({ src, alt }) => {
    
  return (
    <div className="flex-shrink-0 h-16 m-5">
      <img src={src} alt={alt} className="object-contain w-full h-full" />
    </div>
  );
};

type ImageSliderProps = {
  files: File[]; // Input is now a list of files passed as prop
};

 const ImageSlider: React.FC<ImageSliderProps> = ({ files }) => {
  // Convert the list of File objects into object URLs
  const images = files
  return (
    <div className="w-svw my-5">
      <div className="relative overflow-hidden group border-x-white mx-24">
        {/* Add fading effect using ::before and ::after */}
        <div className="relative">
          {/* Fading edges */}
          <div className="absolute z-50 inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute z-50 inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          <div className="absolute z-50 inset-y-0 left-0 -ml-1 w-2 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute z-50 inset-y-0 right-0  -mr-1  w-2 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

          {/* Animated sliding container */}
          <div className="flex z-20 w- animate-slide-left group-hover:pause-animation transition-all">
            {/* Duplicate images for the loop effect */}
            {[...images, ...images].map((item, index) => (
              <ImageCard key={index} src={item} alt={`Image ${index + 1}`} />
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ImageSlider

