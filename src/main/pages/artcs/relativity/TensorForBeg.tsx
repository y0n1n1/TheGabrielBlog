
import ImageGallery from '@/components/ImageGallery';


// <ImageGallery images={images} />

const TensorForBeg = () => {
  const images = [
    { src: "/TensorNotebook/Cover Large.jpeg", caption: "Cover Large.jpeg" },
    { src: "/TensorNotebook/P1 Large.jpeg", caption: "P1 Large.jpeg" },
    { src: "/TensorNotebook/P2 Large.jpeg", caption: "P2 Large.jpeg" },
    { src: "/TensorNotebook/P3 Large.jpeg", caption: "P3 Large.jpeg" },
    { src: "/TensorNotebook/P4 Large.jpeg", caption: "P4 Large.jpeg" },
    { src: "/TensorNotebook/P5 Large.jpeg", caption: "P5 Large.jpeg" },
    { src: "/TensorNotebook/P6 Large.jpeg", caption: "P6 Large.jpeg" },
    { src: "/TensorNotebook/P7 Large.jpeg", caption: "P7 Large.jpeg" },
    { src: "/TensorNotebook/P8 Large.jpeg", caption: "P8 Large.jpeg" },
    { src: "/TensorNotebook/P9 Large.jpeg", caption: "P9 Large.jpeg" },
    { src: "/TensorNotebook/P10 Large.jpeg", caption: "P10 Large.jpeg" },
    { src: "/TensorNotebook/P11 Large.jpeg", caption: "P11 Large.jpeg" },
    { src: "/TensorNotebook/P12 Large.jpeg", caption: "P12 Large.jpeg" },
    { src: "/TensorNotebook/P13 Large.jpeg", caption: "P13 Large.jpeg" },
    { src: "/TensorNotebook/P14 Large.jpeg", caption: "P14 Large.jpeg" },
  ];
  return (
    <div><ImageGallery images={images} /></div>
  )
}

export default TensorForBeg