
const Articles: React.FC = () => {
  



  return (
    <div>
    <div className="flex flex-row align-middle items-center justify-center h-full">
      <div className="border border-ext-500 rounded-3xl flex flex-col mt-12 w-11/12 sm:w-10/12 md:w-2/3 lg:w-3/5 h-[600px]">
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
              <div className="text-2xl text-neutral-900 ">Articles</div>
          </div>     
          <div>
          
    <div className="flex flex-wrap w-full mx-24 text-2xl">
      <a  href="/articles/can-we-ever-really-know"
                className="p-4 m-4 w-96 bg-white   cursor-pointer border border-neutral-300 rounded-lg hover:shadow-md hover:bg-neutral-200 transition flex flex-col items-center text-center">
                <a href="/articles/can-we-ever-really-know" className="text-3xl text-left font-semibold tracking-tighter leading-7">Can we ever really know?</a>
                <div className="tracking-tighter w-full text-right font-medium text-neutral-600">
                16/06/2024</div>
                <div className="text-justify text-lg tracking-tighter leading-5">An exploration of diagnostic testing through the lenses of probability and exploring the real-life scenario of COVID-19
                </div>
              </a>

      <a href="/articles/the-big-o-what-is-computational-complexity"
                className="p-4 m-4 w-96 bg-white   cursor-pointer border border-neutral-300 rounded-lg hover:shadow-md hover:bg-neutral-200 transition flex flex-col items-center text-center">
                <a href="/articles/the-big-o-what-is-computational-complexity" className="text-3xl text-left font-semibold tracking-tighter leading-7">The Big O: What is Computational Complexity?</a>
                <div className="tracking-tighter w-full text-right font-medium text-neutral-600">
                12/02/2024</div>
                <div className="text-justify text-lg tracking-tighter leading-5">Computational complexity is a fundamental area of Computer Science, but to understand why, we must first understand how computers operate.
                </div>
              </a>

              <a  href="/articles/black-holes-and-what-we-know"
                className="p-4 m-4 w-96 bg-white   cursor-pointer border border-neutral-300 rounded-lg hover:shadow-md hover:bg-neutral-200 transition flex flex-col items-center text-center">
                <a href="/articles/black-holes-and-what-we-know" className="text-3xl text-left font-semibold tracking-tighter leading-7">Black holes, and what we know</a>
                <div className="tracking-tighter w-full text-right font-medium text-neutral-600">
                22/12/2020</div>
                <div className="text-justify text-lg tracking-tighter leading-5">In 1916, Karl Schwarzschild created the first solution to describe a black hole using general relativity. Earlier that year, Einstein had proved the influence of gravity on light’s motion. He...
                </div>
              </a>

      <a   href="/articles/relu-and-variants-how-to-implement-and-applications" 
                className="p-4 m-4 w-96 bg-white   cursor-pointer border border-neutral-300 rounded-lg hover:shadow-md hover:bg-neutral-200 transition flex flex-col items-center text-center">
                <a href="/articles/relu-and-variants-how-to-implement-and-applications" className="text-3xl text-left font-semibold tracking-tighter leading-7">ReLU and its Variants: How to Implement it and its Applications</a>
                <div className="tracking-tighter w-full text-right font-medium text-neutral-600">
                16/06/2024</div>
                <div className="text-justify text-lg tracking-tighter leading-5">
                ReLU is an essential activation function in the world of Neural Networks. In this article I will teach you how to implement it...
                </div>
              </a>
      
    </div></div>
      </div>
  </div>

      
  </div>
  );
};

export default Articles;
