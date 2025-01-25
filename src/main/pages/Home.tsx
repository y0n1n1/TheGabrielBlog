import{ useState, useEffect } from 'react';

const Home = () => {
  
  const [textSize, setTextSize] = useState(() => (window.innerWidth >504) ? 0.12 * window.innerWidth : 0.18 * window.innerWidth -  30);


  useEffect(() => {
    const handleResize = () => {
      
      if (window.innerWidth >504) {
      setTextSize(0.12 * window.innerWidth )
      } else {
      setTextSize(0.18 * window.innerWidth - 30)
      }
    };

    window.addEventListener('resize', handleResize);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col h-full items-center justify-center align-middle">
      <div className="flex flex-col justify-center align-middle items-center">
        <div
          className="font-normal mt-12 text-neutral-800 px-3 pr-9"
          style={{ fontSize: `${textSize}px` }}
        >Gabriel Gramicelli</div>
        <div
          className="font-normal mb-12 text-neutral-800 px-3 pr-9 text-4xl"
        >Vision {'>'} Design</div>
        <div className='text-neutral-800 font-extralight text-3xl sm:text-3xl md:text-4xl lg:text-4xl mx-12 md:mx-24 z-20 text-justify'>
          Hello! Let me introduce myself. Read my CV, qualifications, and hobbies to learn <span className="group relative cursor-pointer">
  <a className="text-blue-500 hover:text-blue-600 relative z-20" href="/about-me">
    about me
  </a>
  <div
    className=" absolute inset-0 group-hover:bg-blue-300 blur-3xl opacity-100 z-10 rounded-3xl"
    style={{ filter: 'blur(40px)' }}
  ></div>
</span>
. While you're at it, check out my <span className="group relative cursor-pointer">
  <a className="text-blue-500 hover:text-blue-600 relative z-20" href="/articles">
    articles
  </a>
  <div
    className=" absolute inset-0 group-hover:bg-blue-300 blur-3xl opacity-100 z-10 rounded-3xl"
    style={{ filter: 'blur(40px)' }}
  ></div>
</span>, for all my ideas, experiments, and creations. I also create <span className="group relative cursor-pointer">
  <a className="text-blue-500 hover:text-blue-600 relative z-20" href="/notebooks">
    notebooks
  </a>
  <div
    className=" absolute inset-0 group-hover:bg-blue-300 blur-3xl opacity-100 z-10 rounded-3xl"
    style={{ filter: 'blur(40px)' }}
  ></div>
</span> of what I learn, which you can check out too.  
        </div>
      </div>
    </div>
  );
};

export default Home;
