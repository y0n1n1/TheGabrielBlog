import { X } from 'lucide-react';
import React, { useRef, useState } from 'react';

interface Image {
  src: string;
  caption: string;
}

interface ImageGalleryProps {
  images: Image[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const scrollToImage = (index: number) => {
    if (scrollRef.current) {
      const child = scrollRef.current.children[index] as HTMLElement;
      child?.scrollIntoView({ behavior: 'smooth', inline: 'start' });
    }
  };

  const openImagePopup = (image: Image) => {
    setSelectedImage(image);
  };

  const closeImagePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className="space-y-4">
      {/* Horizontal Scrollable Image Gallery */}
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 space-x-4 p-4"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="min-w-[200px] flex-shrink-0 flex flex-col items-center"
            onClick={() => openImagePopup(image)} // Open popup on image click
          >
            <img
              src={image.src}
              alt={image.caption}
              className="w-full h-[500px] object-cover rounded-md shadow-md cursor-pointer"
            />
            <p className="text-sm text-gray-500 mt-2 text-center">{image.caption}</p>
          </div>
        ))}
      </div>

      {/* Mini Icon Menu */}
      <div className="flex flex-wrap gap-2 p-2 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => scrollToImage(index)}
            className="flex-shrink-0 border-2 border-transparent hover:border-gray-400 focus:outline-none focus:border-gray-600 rounded-md"
          >
            <img
              src={image.src}
              alt={image.caption}
              className="w-16 h-16 object-cover rounded-md shadow-md"
            />
          </button>
        ))}
      </div>

      {/* Popup for Image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white p-4 rounded-md shadow-lg max-w-lg w-full">
            <button
              onClick={closeImagePopup}
              className="absolute top-2 right-2 text-white rounded-full p-2"
            >
              <X width={"36px"} height={"36px"}/>
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className="max-w-full max-h-full object-contain"
            />
            <p className="mt-4 text-center text-lg text-gray-700">{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
