
import 'katex/dist/katex.min.css';
import ImageGallery from '@/components/ImageGallery';
import Latex from 'react-latex-next';

const GabsCalc2 = () => {
  const images = [
    { src: "/calcNotebook/Cover.jpeg", caption: "Cover.jpeg" },
    
    { src: "/calcNotebook/C24.jpeg", caption: "C24.jpeg" },
    { src: "/calcNotebook/C25.jpeg", caption: "C25.jpeg" },
    { src: "/calcNotebook/C26.jpeg", caption: "C26.jpeg" },
    { src: "/calcNotebook/C27.jpeg", caption: "C27.jpeg" },
    { src: "/calcNotebook/C28.jpeg", caption: "C28.jpeg" },
    { src: "/calcNotebook/C29.jpeg", caption: "C29.jpeg" },
    { src: "/calcNotebook/C30.jpeg", caption: "C30.jpeg" },
    { src: "/calcNotebook/C31.jpeg", caption: "C31.jpeg" },
    { src: "/calcNotebook/C32.jpeg", caption: "C32.jpeg" },
    { src: "/calcNotebook/C33.jpeg", caption: "C33.jpeg" },
    { src: "/calcNotebook/C34.jpeg", caption: "C34.jpeg" },
    { src: "/calcNotebook/C35.jpeg", caption: "C35.jpeg" },
    { src: "/calcNotebook/C36.jpeg", caption: "C36.jpeg" },
    { src: "/calcNotebook/C37.jpeg", caption: "C37.jpeg" },
    { src: "/calcNotebook/C38.jpeg", caption: "C38.jpeg" },
    { src: "/calcNotebook/C39.jpeg", caption: "C39.jpeg" },
    { src: "/calcNotebook/C40.jpeg", caption: "C40.jpeg" },
    { src: "/calcNotebook/C41.jpeg", caption: "C41.jpeg" },
    
  ]
  return (
    <div className="items-center justify-center flex flex-row">
        <div className="w-5/6 sm:w-4/5 md:w-3/5 my-12 mt-2">
        <a href="/notebooks" className="font-light text-lg text-blue-500">{`<`} Notebooks</a>
        <div className="font-light text-xl text-zinc-600">March-May, 2021</div>
        <div className="font-medium text-6xl my-2 mb-4 text-zinc-950">Calculus 2: Intro to calculus extended</div>
        <div className="text-justify">
            <div className="text-2xl font-normal text-zinc-500">Contents</div>
            <div className="text-lg font-light text-zinc-500 pb-3 flex flex-row">
                <div className="flex flex-col w-1/2 ml-4">
                <div className="text-xl font-normal -ml-4">2.1 - More single variable calculus</div>
                <div>2.1.1 - Implicit differentiation</div>
                <div>2.1.2 - Maxima/minima and the extreme value theorem</div>
                <div>2.1.3 - Limit of a function</div>
                <div>2.1.4 - One-sided limit</div>
                <div>2.1.5 - Limit of a sequence</div>
                <div>2.1.6 - Epsilon-delta definition</div>
                <div>2.1.7 - Linearity of differentiation</div>
                <div>2.1.8 - Inverse differentiation</div>
                <div className="text-xl font-normal -ml-4">2.2 - More rules and methods</div>
                <div>2.2.1 - Newton's method</div>
                </div>
                <div className="flex flex-col w-1/2 ml-4">
                <div>2.2.2 - General leibniz rule</div>
                <div>2.2.3 - Mean value theorem</div>
                <div>2.2.4 - Logarithmic derivative</div>
                <div>2.2.5 - Rolle's theorem</div>
                <div>2.2.6 - Stirling's approximation</div>
                <div className="text-xl font-normal -ml-4">2.3 - Further integration</div>
                <div>2.3.1 - Arc length</div>
                <div>2.3.2 - Double integrals</div>
                <div>2.3.3 - Line integrals</div>
                <div>2.3.4 - Triple integrals</div>
                </div>
            </div>
        </div>
        
        <ImageGallery images={images} />
            <div className='text-4xl mt-12'>Other units:</div>
            <div className='grid grid-cols-3 gap-4 mt-4'>
        <a 
          href="/calc/1" 
          className="flex flex-col text-2xl font-medium items-center justify-center p-4 bg-white border border-neutral-300 rounded-lg hover:shadow-md hover:bg-neutral-200 transition">
          Calculus 1
          <img src="/Calc1.png" height={"150px"} width={"200px"}/>
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

export default GabsCalc2