
const Articles: React.FC = () => {
  



  return (
    <div className="flex flex-col mx-24 text-2xl">
      <a href="/articles/can-we-ever-really-know">Can we ever really know?</a>
      <a href="/articles/the-big-o-what-is-computational-complexity">The Big O: What is Computational Complexity?      </a> 
      <a href="/articles/black-holes-and-what-we-know">Black holes, and what we know </a> 
      <a href="/articles/relu-and-variants-how-to-implement-and-applications">ReLU and its Variants: How to Implement it and its Applications </a> 
      <div>The calculus series:</div>
      <a href="/calc/1">Gab's <span className="italic">Calc 1 </span></a>
      <a href="/calc/2">Gab's <span className="italic">Calc 2 </span></a>
      <a href="/calc/3">Gab's <span className="italic">Calc 3 </span></a>
      <a href="/calc/4">Gab's <span className="italic">Calc 4 </span></a>
      <div>The relativity series:</div>
      <a href="/relativity/intro-to-tensors"><span className="">Intro to tensors </span></a>
      <a href="/relativity/tensor-calculus"><span className="">Tensor Calculus </span></a>
    </div>
  );
};

export default Articles;
