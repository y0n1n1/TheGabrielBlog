import 'katex/dist/katex.min.css';
import ImageGallery from '@/components/ImageGallery';
import Latex from 'react-latex-next';


const GabsCalc1 = () => {
  const images = [
    { src: "/calcNotebook/Cover.jpeg", caption: "Cover.jpeg" },
    { src: "/calcNotebook/C1.jpeg", caption: "C1.jpeg" },
    { src: "/calcNotebook/C2.jpeg", caption: "C2.jpeg" },
    { src: "/calcNotebook/C3.jpeg", caption: "C3.jpeg" },
    { src: "/calcNotebook/C4.jpeg", caption: "C4.jpeg" },
    { src: "/calcNotebook/C5.jpeg", caption: "C5.jpeg" },
    { src: "/calcNotebook/C6.jpeg", caption: "C6.jpeg" },
    { src: "/calcNotebook/C7.jpeg", caption: "C7.jpeg" },
    { src: "/calcNotebook/C8.jpeg", caption: "C8.jpeg" },
    { src: "/calcNotebook/C9.jpeg", caption: "C9.jpeg" },
    { src: "/calcNotebook/C10.jpeg", caption: "C10.jpeg" },
    { src: "/calcNotebook/C11.jpeg", caption: "C11.jpeg" },
    { src: "/calcNotebook/C12.jpeg", caption: "C12.jpeg" },
    { src: "/calcNotebook/C13.jpeg", caption: "C13.jpeg" },
    { src: "/calcNotebook/C14.jpeg", caption: "C14.jpeg" },
    { src: "/calcNotebook/C15.jpeg", caption: "C15.jpeg" },
    { src: "/calcNotebook/C16.jpeg", caption: "C16.jpeg" },
    { src: "/calcNotebook/C17.jpeg", caption: "C17.jpeg" },
    { src: "/calcNotebook/C18.jpeg", caption: "C18.jpeg" },
    { src: "/calcNotebook/C19.jpeg", caption: "C19.jpeg" },
    { src: "/calcNotebook/C20.jpeg", caption: "C20.jpeg" },
    { src: "/calcNotebook/C21.jpeg", caption: "C21.jpeg" },
    { src: "/calcNotebook/C22.jpeg", caption: "C22.jpeg" },
    { src: "/calcNotebook/C23.jpeg", caption: "C23.jpeg" }
  ]
  return (
    <div className="items-center justify-center flex flex-row">
        <div className="w-5/6 sm:w-4/5 md:w-3/5 my-12 mt-2">
        <a href="/notebooks" className="font-light text-lg text-blue-500">{`<`} Notebooks</a>
        <div className="font-light text-xl text-zinc-600">March-May, 2021</div>
        <div className="font-medium text-6xl my-2 mb-4 text-zinc-950">Calculus 1: Intro to calculus</div>
        <div className="text-justify">
            <div className="text-2xl font-normal text-zinc-500">Contents</div>
            <div className="text-lg font-light text-zinc-500 pb-3 flex flex-row">
                <div className="flex flex-col w-1/2 ml-4">
                <div className="text-xl font-normal -ml-4">1.1 - Limits</div>
                <div>1.1.1 - The limit</div>
                <div>1.1.2 - L'Hopital's rule</div>
                <div className="text-xl font-normal -ml-4">1.2 - Derivatives</div>
                <div>1.2.1 - The derivative</div>
                <div>1.2.2 - Deriving the derivative</div>
                <div>1.2.3 - Differentiation rules</div>
                <div>1.2.4 - Sign diagrams and slopes</div>
                <div className="text-xl font-normal -ml-4">1.3 - Integrals</div>
                <div>1.3.1 - The integral</div>
                <div>1.3.2 - Proving the fundamental theorem of calculus</div>
                <div>1.3.3 - Integration rules</div></div>
                <div className="flex flex-col w-1/2 ml-4"><div className="text-xl font-normal -ml-4">1.4 - More rules</div>
                <div>1.4.1 - Stationary points</div>
                <div>1.4.2 - Chain, product, and Quotient rules</div>
                <div>1.4.3 - Definite integrals</div>
                <div>1.4.4 - U-substitution</div>
                <div>1.4.5 - Other integrals</div>
                <div className="text-xl font-normal -ml-4">1.5 - Simple applications</div>
                <div>1.5.1 - Taylor series</div>
                <div>1.5.2 - Taylor theorem</div>
                <div>1.5.3 - Taylor polynomial</div>
                <div>1.5.4 - Fourier series</div>
                <div>1.5.5 - Infinite series</div></div>
            </div>
        </div>
        
    <ImageGallery images={images} />
    <div className='text-4xl mt-12'>Other units:</div>
    <div className='grid grid-cols-3 gap-4 mt-4'>
    <a 
              href="/calc/2" 
              className="flex flex-col text-2xl font-medium items-center justify-center p-4 bg-white border border-neutral-300 rounded-lg hover:shadow-md hover:bg-neutral-200 transition">
              Calculus 2
              <img src="/Calc2.png" height={"150px"} width={"150px"}/>
            </a>
            <a 
              href="/calc/3" 
              className="flex flex-col text-2xl font-medium items-center justify-center p-4 bg-white border border-neutral-300 rounded-lg hover:shadow-md hover:bg-neutral-200 transition">
              Calculus 3
              <img src="/Calc3.png" height={"150px"} width={"300px"}/>
            </a>
            <a 
              href="/calc/4" 
              className="p-6 bg-white border border-neutral-300 rounded-lg hover:shadow-md hover:bg-neutral-200 transition flex flex-col items-center text-center">
              <span className="text-2xl font-medium">Calculus 4</span>
              <div className="text-2xl mt-2">
              <Latex>
      {`\\( \\rho \\left( \\frac{\\partial \\mathbf{u}}{\\partial t} + \\mathbf{u} \\cdot \\nabla \\mathbf{u} \\right) = -\\nabla p + \\mu \\nabla^2 \\mathbf{u} + \\mathbf{f} \\)`}
    </Latex>
              </div>
            </a>
    </div>
    </div>
    </div>
  )
}

export default GabsCalc1