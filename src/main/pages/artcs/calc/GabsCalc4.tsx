
import 'katex/dist/katex.min.css';
import ImageGallery from '@/components/ImageGallery';

const GabsCalc4 = () => {  
  const images = [
  { src: "/calcNotebook/Cover.jpeg", caption: "Cover.jpeg" },
  { src: "/calcNotebook/C56.jpeg", caption: "C56.jpeg" },
  { src: "/calcNotebook/C57.jpeg", caption: "C57.jpeg" },
  { src: "/calcNotebook/C58.jpeg", caption: "C58.jpeg" },
  { src: "/calcNotebook/C59.jpeg", caption: "C59.jpeg" },
  { src: "/calcNotebook/C60.jpeg", caption: "C60.jpeg" },
  { src: "/calcNotebook/C61.jpeg", caption: "C61.jpeg" },
  { src: "/calcNotebook/C62.jpeg", caption: "C62.jpeg" },
  { src: "/calcNotebook/C63.jpeg", caption: "C63.jpeg" },
  { src: "/calcNotebook/C64.jpeg", caption: "C64.jpeg" },
  { src: "/calcNotebook/C65.jpeg", caption: "C65.jpeg" },
  { src: "/calcNotebook/C66.jpeg", caption: "C66.jpeg" },
  { src: "/calcNotebook/C67.jpeg", caption: "C67.jpeg" },
  { src: "/calcNotebook/C68.jpeg", caption: "C68.jpeg" },
  { src: "/calcNotebook/C69.jpeg", caption: "C69.jpeg" },
  { src: "/calcNotebook/C70.jpeg", caption: "C70.jpeg" },
  { src: "/calcNotebook/C71.jpeg", caption: "C71.jpeg" },
  { src: "/calcNotebook/C72.jpeg", caption: "C72.jpeg" },
  { src: "/calcNotebook/C73.jpeg", caption: "C73.jpeg" },
  { src: "/calcNotebook/C74.jpeg", caption: "C74.jpeg" },
  { src: "/calcNotebook/C75.jpeg", caption: "C75.jpeg" },
  { src: "/calcNotebook/C76.jpeg", caption: "C76.jpeg" },
  { src: "/calcNotebook/C77.jpeg", caption: "C77.jpeg" },
  { src: "/calcNotebook/C78.jpeg", caption: "C78.jpeg" },
  { src: "/calcNotebook/C79.jpeg", caption: "C79.jpeg" },
  { src: "/calcNotebook/C80.jpeg", caption: "C80.jpeg" },
  { src: "/calcNotebook/C81.jpeg", caption: "C81.jpeg" },
  { src: "/calcNotebook/C82.jpeg", caption: "C82.jpeg" },
  { src: "/calcNotebook/C83.jpeg", caption: "C83.jpeg" },
  { src: "/calcNotebook/C84.jpeg", caption: "C84.jpeg" },
  { src: "/calcNotebook/C85.jpeg", caption: "C85.jpeg" },
  { src: "/calcNotebook/C86.jpeg", caption: "C86.jpeg" },
  { src: "/calcNotebook/C87.jpeg", caption: "C87.jpeg" },
  { src: "/calcNotebook/C88.jpeg", caption: "C88.jpeg" },
  { src: "/calcNotebook/C89.jpeg", caption: "C89.jpeg" },
  { src: "/calcNotebook/C90.jpeg", caption: "C90.jpeg" },
  { src: "/calcNotebook/C91.jpeg", caption: "C91.jpeg" },
  { src: "/calcNotebook/C92.jpeg", caption: "C92.jpeg" },
  { src: "/calcNotebook/C93.jpeg", caption: "C93.jpeg" },
  { src: "/calcNotebook/C94.jpeg", caption: "C94.jpeg" },
  { src: "/calcNotebook/C95.jpeg", caption: "C95.jpeg" },
  { src: "/calcNotebook/C96.jpeg", caption: "C96.jpeg" },
  { src: "/calcNotebook/C97.jpeg", caption: "C97.jpeg" },
  { src: "/calcNotebook/C98.jpeg", caption: "C98.jpeg" },
  { src: "/calcNotebook/C99.jpeg", caption: "C99.jpeg" },
  { src: "/calcNotebook/C100.jpeg", caption: "C100.jpeg" },
  { src: "/calcNotebook/C101.jpeg", caption: "C101.jpeg" },
  { src: "/calcNotebook/C102.jpeg", caption: "C102.jpeg" },
  { src: "/calcNotebook/C103.jpeg", caption: "C103.jpeg" },
  { src: "/calcNotebook/C104.jpeg", caption: "C104.jpeg" },
  { src: "/calcNotebook/C105.jpeg", caption: "C105.jpeg" },
  { src: "/calcNotebook/C106.jpeg", caption: "C106.jpeg" },
  { src: "/calcNotebook/C107.jpeg", caption: "C107.jpeg" },
  { src: "/calcNotebook/C108.jpeg", caption: "C108.jpeg" },
  { src: "/calcNotebook/C109.jpeg", caption: "C109.jpeg" },
  { src: "/calcNotebook/C110.jpeg", caption: "C110.jpeg" },
  { src: "/calcNotebook/C111.jpeg", caption: "C111.jpeg" },
  { src: "/calcNotebook/C112.jpeg", caption: "C112.jpeg" },
]
  return (
    <div className="items-center justify-center flex flex-row">
        <div className="w-5/6 sm:w-4/5 md:w-3/5 my-12 mt-2">
        <a href="/notebooks" className="font-light text-lg text-blue-500">{`<`} Notebooks</a>
        <div className="font-light text-xl text-zinc-600">March-May, 2021</div>
        <div className="font-medium text-6xl my-2 mb-4 text-zinc-950">Calculus 4: Multivariable and vector calculus</div>
        <div className="text-justify">
            <div className="text-2xl font-normal text-zinc-500">Contents</div>
            <div className="text-lg font-light text-zinc-500 pb-3 flex flex-row">
                <div className="flex flex-col w-1/2 ml-4">
                <div className="text-xl font-normal -ml-4">4.1 - Multivariable functions</div>
                <div>4.1.0 - Definition of partial derivative</div>
                <div>4.1.1 - Multivariable functions</div>
                <div>4.1.2 - Vector fields</div>
                <div>4.1.3 - Partial derivative symmetry</div>
                <div>4.1.4 - Formal definition of partial derivatives</div>
                <div>4.1.5 - Multivariable gradient</div>
                <div>4.1.6 - Directional derivative</div>
                <div>4.1.6.2 - Why the gradient is the direction of steepest ascent</div>
                <div>4.1.7 - Vector valued functions</div>
                <div>4.1.8 - Multivariable chain rule</div>
                <div>4.1.9 - Curvature</div>
                <div>4.1.10 - Vector differentiation and integration</div>
                <div className="text-xl font-normal -ml-4">4.2 - Complex multivariable calculus</div>
                <div>4.2.1 - Second partial derivatives</div></div>
                <div className="flex flex-col w-1/2 ml-4">
                <div>4.2.2 - Divergence</div>
                <div>4.2.3 - Curl</div>
                <div>4.2.4 - Laplacian</div>
                <div>4.2.4.2 - Harmonic functions</div>
                <div>4.2.5 - Jacobian</div>
                <div>4.2.5.2 - Spacial planes</div>
                <div>4.2.5.3 - Quadratic approximation</div>
                <div>4.2.6 - Hessian matrix</div>
                <div>4.2.7 - Multivariable maxima/minima</div>
                <div>4.2.8 - Partial fraction decomposition</div>
                <div>4.2.9 - Lagrange multipliers</div>
                <div>4.2.10 - Line integral</div>
                <div>4.2.10.2 - Parametrizing and integrating</div>
                <div>4.2.11 - Green's theorem</div>
                <div>4.2.12 - The end (for now)</div>

                </div>
            </div>
        </div>
        
        <ImageGallery images={images} />
        <div className="text-xl font-light text-zinc-800 pb-3 text-justify">So! This is the end... for now. I hope to one day continue my calculus series, and create digital versions of my notebooks. </div>
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
                      href="/calc/3" 
                      className="flex flex-col text-2xl font-medium items-center justify-center p-4 bg-white border border-neutral-300 rounded-lg hover:shadow-md hover:bg-neutral-200 transition">
                      Calculus 3
                      <img src="/Calc3.png" height={"150px"} width={"300px"}/>
                    </a>
                            </div>
    </div>
    </div>
  )
}

export default GabsCalc4