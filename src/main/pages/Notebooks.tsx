import Latex from "react-latex-next"

const Notebooks = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center p-6">
      <div>
      <div className="flex flex-row align-middle items-center justify-center h-full">
        <div className="border border-ext-500 rounded-3xl flex flex-col  w-full mx-12 h-[700px]">
            <div className="h-16 w-full bg-ext-500 bg-opacity-10 rounded-t-3xl justify-start items-center flex flex-row">
            <div className="flex justify-left items-left p-5 space-x-4">
      <button 
        className="w-5 h-5 bg-red-500 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300" 
        aria-label="Red Button"
      />
      <button 
        className="w-5 h-5 bg-yellow-400 rounded-full hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300" 
        aria-label="Yellow Button"
      />
      <button 
        className="w-5 h-5 bg-green-500 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300" 
        aria-label="Green Button"
      />
    </div>
                <div className="text-2xl text-neutral-900 ">Notebooks</div>
            </div>     
            <div>
            
          
  <div className="flex flex-col md:flex-row w-full max-w-7xl m-5 gap-8">
    {/* Calculus Series */}
    <div className="w-full md:w-1/2 p-6  ">
      <h2 className="text-3xl font-semibold text-neutral-800 mb-6">The Calculus Series</h2>
      <div className="grid grid-cols-2 gap-4">
        <a 
          href="/calc/1" 
          className="flex flex-col text-2xl font-medium items-center justify-center p-4 bg-white border border-neutral-300 rounded-lg hover:shadow-md hover:bg-neutral-200 transition">
          Gab's Calc 1
          <img src="/Calc1.png" height={"150px"} width={"200px"}/>
        </a>
        <a 
          href="/calc/2" 
          className="flex flex-col text-2xl font-medium items-center justify-center p-4 bg-white border border-neutral-300 rounded-lg hover:shadow-md hover:bg-neutral-200 transition">
          Gab's Calc 2
          <img src="/Calc2.png" height={"150px"} width={"150px"}/>
        </a>
        <a 
          href="/calc/3" 
          className="flex flex-col text-2xl font-medium items-center justify-center p-4 bg-white border border-neutral-300 rounded-lg hover:shadow-md hover:bg-neutral-200 transition">
          Gab's Calc 3
          <img src="/Calc3.png" height={"150px"} width={"300px"}/>
        </a>
        <a 
          href="/calc/4" 
          className="p-6 bg-white border border-neutral-300 rounded-lg hover:shadow-md hover:bg-neutral-200 transition flex flex-col items-center text-center">
          <span className="text-2xl font-medium">Gab's Calc 4</span>
          <div className="text-2xl mt-2">
          <Latex>
  {`\\( \\rho \\left( \\frac{\\partial \\mathbf{u}}{\\partial t} + \\mathbf{u} \\cdot \\nabla \\mathbf{u} \\right) = -\\nabla p + \\mu \\nabla^2 \\mathbf{u} + \\mathbf{f} \\)`}
</Latex>
          </div>
        </a>
      </div>
    </div>

    {/* Relativity Series */}
    <div className="w-full md:w-1/2 p-6  mb-14 pb-7">
      <h2 className="text-3xl font-semibold text-neutral-800 mb-6">The Relativity Series</h2>
      <div className="grid grid-cols-2 gap-4 h-full">
        <a 
          href="/relativity/intro-to-tensors" 
          className="p-6 bg-white h-full border border-neutral-300 rounded-lg hover:shadow-md hover:bg-neutral-200 transition flex flex-col items-center text-center">
          <span className="text-2xl font-medium">Tensor Algebra</span>
          <div className="text-4xl mt-2">
            <Latex>{`$v_i=g_{ij}v^j$`}</Latex>
          </div>
        </a>

        <a 
          href="/relativity/tensor-calculus" 
          className="p-6 bg-white h-full border border-neutral-300 rounded-lg hover:shadow-md hover:bg-neutral-200 transition flex flex-col items-center text-center">
          <span className="text-2xl font-medium">Tensor Calculus</span>
          <div className="text-lg mt-2">
            <Latex>{`$\\Gamma^{k}_{ij}=\\frac{1}{2}g^{km}(\\partial_j g_{mi}+\\partial_i g_{mj}+\\partial_m g_{ij})$`}</Latex>
          </div>
        </a>

        <div 
          className="p-6 bg-white h-full opacity-85 hover:opacity-40  cursor-pointer border border-neutral-300 rounded-lg hover:shadow-md hover:bg-neutral-200 transition flex flex-col items-center text-center">
          <span className="text-2xl font-medium">Special Relativity</span>
          <div className="text-4xl mt-2">
            <Latex>{`$\\gamma = \\frac{1}{\\sqrt{1 - \\frac{v^2}{c^2}}}$`}</Latex>
          </div>
        </div>

        <div 
          className="p-6 cursor-pointer h-full opacity-85 hover:opacity-40  bg-white border border-neutral-300 rounded-lg hover:shadow-md hover:bg-neutral-200 transition flex flex-col items-center text-center">
          <span className="text-2xl font-medium">General Relativity</span>
          <div className="text-lg mt-2">
            <Latex>{`$G_{\\mu\\nu}+g_{\\mu\\nu}\\Lambda=\\frac{8\\pi G}{c^4}T_{\\mu\\nu}$`}</Latex>
          </div>
        </div>
      </div>
    </div>
  </div>
            </div>
        </div>
    </div>

        
    </div>




  
</div>

  )
}

export default Notebooks