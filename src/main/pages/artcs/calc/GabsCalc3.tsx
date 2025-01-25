
import 'katex/dist/katex.min.css';
import ImageGallery from '@/components/ImageGallery';
import Latex from 'react-latex-next';

const GabsCalc3 = () => {
  const images = [
    { src: "/calcNotebook/Cover.jpeg", caption: "Cover.jpeg" },
    { src: "/calcNotebook/C42.jpeg", caption: "C42.jpeg" },
    { src: "/calcNotebook/C43.jpeg", caption: "C43.jpeg" },
    { src: "/calcNotebook/C44.jpeg", caption: "C44.jpeg" },
    { src: "/calcNotebook/C45.jpeg", caption: "C45.jpeg" },
    { src: "/calcNotebook/C46.jpeg", caption: "C46.jpeg" },
    { src: "/calcNotebook/C47.jpeg", caption: "C47.jpeg" },
    { src: "/calcNotebook/C48.jpeg", caption: "C48.jpeg" },
    { src: "/calcNotebook/C49.jpeg", caption: "C49.jpeg" },
    { src: "/calcNotebook/C50.jpeg", caption: "C50.jpeg" },
    { src: "/calcNotebook/C51.jpeg", caption: "C51.jpeg" },
    { src: "/calcNotebook/C52.jpeg", caption: "C52.jpeg" },
    { src: "/calcNotebook/C53.jpeg", caption: "C53.jpeg" },
    { src: "/calcNotebook/C54.jpeg", caption: "C54.jpeg" },
    { src: "/calcNotebook/C55.jpeg", caption: "C55.jpeg" },
  ]
  return (
    <div className="items-center justify-center flex flex-row">
        <div className="w-5/6 sm:w-4/5 md:w-3/5 my-12 mt-2">
        <a href="/notebooks" className="font-light text-lg text-blue-500">{`<`} Notebooks</a>
        <div className="font-light text-xl text-zinc-600">March-May, 2021</div>
        <div className="font-medium text-6xl my-2 mb-4 text-zinc-950">Calculus 3: Ordinary differential equations</div>
        <div className="text-justify">
            <div className="text-2xl font-normal text-zinc-500">Contents</div>
            <div className="text-lg font-light text-zinc-500 pb-3 flex flex-row">
                <div className="flex flex-col w-1/2 ml-4">
                <div>3.1 - Differential equation</div>
                <div>3.2 - Differential operator</div>
                <div>3.3 - Euler method (forward euler method)</div>
                <div>3.4 - Definitions</div>
                <div>3.5 - Other</div>
                <div>3.6 - Other part 2</div>
                <div>3.7 - Existence and uniqueness</div></div>
                <div className="flex flex-col w-1/2 ml-4">
                <div>3.8 - Linear DEs</div>
                <div>3.9 - Bernoulli equation</div>
                <div>3.10 - Autonomous equations</div>
                <div>3.11 - 2nd order ODEs</div>
                <div>3.12 - CCODEs</div>
                <div>3.13 - Super position</div></div>
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
              href="/calc/2" 
              className="flex flex-col text-2xl font-medium items-center justify-center p-4 bg-white border border-neutral-300 rounded-lg hover:shadow-md hover:bg-neutral-200 transition">
              Calculus 2
              <img src="/Calc2.png" height={"150px"} width={"150px"}/>
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

export default GabsCalc3