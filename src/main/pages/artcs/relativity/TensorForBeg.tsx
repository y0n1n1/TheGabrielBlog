
import ImageGallery from '@/components/ImageGallery';
import Latex from 'react-latex-next';


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
    <div className="items-center justify-center flex flex-row">
        <div className="w-5/6 sm:w-4/5 md:w-3/5 my-12 mt-2">
        <a href="/notebooks" className="font-light text-lg text-blue-500">{`<`} Notebooks</a>
        <div className="font-light text-xl text-zinc-600">March-May, 2021</div>
        <div className="font-medium text-6xl my-2 mb-4 text-zinc-950">Tensors for beginners</div>
      <ImageGallery images={images} />
          <div className='text-4xl mt-12'>Other units:</div>
          <div className='grid grid-cols-3 gap-4 mt-4'>
          <a 
                    href="/relativity/tensor-calculus" 
                    className="p-6 bg-white h-full border border-neutral-300 rounded-lg hover:shadow-md hover:bg-neutral-200 transition flex flex-col items-center text-center">
                    <span className="text-2xl font-medium">Tensor Calculus</span>
                    <div className="text-lg mt-2">
                      <Latex>{`$\\Gamma^{k}_{ij}=\\frac{1}{2}g^{km}(\\partial_j g_{mi}+\\partial_i g_{mj}+\\partial_m g_{ij})$`}</Latex>
                    </div>
                  </a>
          </div>
      
      </div></div>
  )
}

export default TensorForBeg