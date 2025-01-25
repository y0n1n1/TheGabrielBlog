import CircleImage from "@/lib/CircleImage"
import  ImageSliderSm  from "@/lib/ImgSmSlider"


const AboutMe = () => {
  const listImgs = ["/homeLogos/P1.png", "/homeLogos/P2.png", "/homeLogos/P3.png", "/homeLogos/P4.png", 
    "/homeLogos/P5.png", "/homeLogos/P6.png", "/homeLogos/P7.png"
  ]
  return (
    <div>
      <div className="mb-6 flex flex-row align-middle items-center justify-center">
        <div className="border border-ext-500 rounded-3xl flex flex-col w-11/12 sm:w-10/12 md:w-4/5 lg:w-3/5">
            <div className="h-16 w-full border-b border-ext-500 bg-ext-500 bg-opacity-10 rounded-t-3xl justify-start items-center flex flex-row">
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
                <div className="text-2xl text-neutral-900 ">About me</div>
            </div>     
            
            <div>
            <div className="flex flex-col mx-10 md:mx-20">
              <div className="mx-10 flex flex-row justify-between"><CircleImage imageUrl={"Me.png"} altText="Me!"/> <div className="mt-4 h-10 items-center text-center align-middle justify-center w-20 text-xl bg-neutral-50 border-ext-500 border rounded-xl p-1 hover:bg-neutral-100 hover:text-blue-500"><a  target="_blank" rel="noopener noreferrer"   href="https://drive.google.com/file/d/1YfiEovpnJplwgU9-RLL6_iZRKfdUrK0z/view?usp=sharing">CV PDF</a></div>
              </div>
              <div className="font-medium text-4xl  mb-2 text-zinc-950 mt-6">Hi there! 👋</div>
              <div className="text-xl mt-1 text-neutral-800 mx-8"> I’m an 18 year old 🇧🇷 Brazilian 🇮🇹 Italian entrepreneur. I'm in my senior year of high school student and I have a passion for maths, science and technology. My main interest is Artificial Intelligence, however I also have experiences with web development, data science, physics and mathematics.
              </div>
              <div className="font-medium text-4xl mb-2 text-zinc-950 mt-6">💡 My vision</div>
              <div className="text-xl mt-1 text-neutral-800 mb-4 mx-8">I see myself as an engineer, who builds tools that serve the world and the people in it. One of my core principles is to prioritize <span>vision over design</span>. When I build and create things, the thing that matters most is my vision of what the thing will do to help. Then, I center my design for the thing based on achieving the vision.  
              </div>
              <div className="text-xl mt-1 text-neutral-800  mx-8">This way of thinking always forces me to rethink my approaches and improve on failures. I am quick to discard ideas and decisions if I find that they don't enable the vision I have. </div>
              <div className="font-medium text-4xl  mb-2 text-zinc-950 mt-6">🌍 Languages</div>
              <div className="text-xl mt-1 text-neutral-800 mx-8">As a Brazilian-Italian who has lived in 5 countries, I've developed a passion to interact with everyone I meet. Here are the languages I speak and am learning:
              </div>
              <div className="flex flex-wrap my-4 items-center justify-center w-full align-middle">
                <div className="flex flex-col m-2 w-36 hover:transform hover:perspective-[600px] hover:rotate-x-[-2.10476deg] hover:rotate-y-[0.555556deg] hover:scale-[1.05]  bg-blue-400 text-white rounded-xl p-2 pt-1 px-3 items-center justify-center shadow-xl">
                  <div className="text-4xl">🇺🇸</div>
                  <div className="font-bold text-xl">English </div>
 
                  <div className="text-blue-200 text-lg">fluent</div>
                </div>
                <div className="flex flex-col m-2 w-36 hover:transform hover:perspective-[600px] hover:rotate-x-[-2.10476deg] hover:rotate-y-[0.555556deg] hover:scale-[1.05]  bg-green-400 text-white rounded-xl p-2 pt-1 px-3 items-center justify-center shadow-xl">
                  <div className="text-4xl">🇧🇷</div>
                  <div className="font-bold text-xl">Portuguese </div>
 
                  <div className="text-green-200 text-lg">fluent</div>
                </div>
                <div className="flex flex-col m-2 w-36 hover:transform hover:perspective-[600px] hover:rotate-x-[-2.10476deg] hover:rotate-y-[0.555556deg] hover:scale-[1.05]  bg-yellow-400 text-white rounded-xl p-2 pt-1 px-3 items-center justify-center shadow-xl">
                  <div className="text-4xl">🇪🇸</div>
                  <div className="font-bold text-xl">Spanish </div>
 
                  <div className="text-yellow-200 text-lg">Intermediate</div>
                </div>
                <div className="flex flex-col m-2 w-36 hover:transform hover:perspective-[600px] hover:rotate-x-[-2.10476deg] hover:rotate-y-[0.555556deg] hover:scale-[1.05]  bg-red-400 text-white rounded-xl p-2 pt-1 px-3 items-center justify-center shadow-xl">
                  <div className="text-4xl">🇫🇷</div>
                  <div className="font-bold text-xl">French </div>
 
                  <div className="text-red-200 text-lg">Novice</div>
                </div>
                <div className="flex flex-col m-2 w-36 hover:transform hover:perspective-[600px] hover:rotate-x-[-2.10476deg] hover:rotate-y-[0.555556deg] hover:scale-[1.05]  bg-orange-400 text-white rounded-xl p-2 pt-1 px-3 items-center justify-center shadow-xl">
                  <div className="text-4xl">🇮🇹</div>
                  <div className="font-bold text-xl">Italian </div>
 
                  <div className="text-orange-200 text-lg">Novice</div>
                </div>
              </div>
              <div className="font-medium text-4xl mt-6 mb-2 text-zinc-950">🛠️ Technologies</div>

            <div className="flex flex-col w-full items-center align-middle justify-center">
            <div className="text-xl mt-1 text-neutral-800 mb-4 mx-8">Throughout my <span className="font-light text-neutral-400 text-base">coding,</span> <span className="font-light text-neutral-500 text-base">experimenting,</span> <span className="font-normal text-neutral-500 text-lg">blogging,</span> <span className="font-medium  text-neutral-600 text-xl">interning,</span> <span className="font-semibold text-xl text-neutral-700">working,</span> <span className="font-bold text-2xl text-neutral-800">sharing,</span> <span className="font-extrabold text-2xl text-neutral-900">and </span> <span className="font-black text-3xl">inventing</span> journey, I've 
            mastered many tools used in web development and AI. On the web side, I’ve worked with front-end frameworks, databases, and hosting platforms to build seamless user experiences and scalable systems. 
            </div>
            <div className="text-xl text-neutral-800 mb-4 mx-8">In data science and artificial intelligence, I leverage Python’s extensive ecosystem and other cutting-edge technologies to analyze data, train models, and develop intelligent applications.
            Below is a list of technologies and languages I've had experience with in the past and/or use currently.</div>
              <div className="grid w-full max-w-[600px]  grid-cols-2 sm:grid-cols-3  md:grid-cols-3 lg:grid-cols-4 mb-12 gap-3 align-middle items-center justify-start" >
                <div className="flex items-center justify-start align-middle flex-row  text-lg h-8 font-normal"> <img className="mr-2 w-8" width={"30px"} src="/tools/aws.png"/>AWS</div>
                

                <div className="items-center justify-start align-middle flex flex-row  text-lg h-8 font-normal"> <img className="mr-2 w-8" width={"30px"} src="/tools/wix.png"/>Wix</div>
                <div className="items-center justify-start align-middle flex flex-rowh-8  text-lg font-normal"> <img className="mr-2 w-8" width={"30px"} src="/tools/vercel.svg"/>Vercel</div>
                <div className="items-center justify-start align-middle flex flex-rowh-8  text-lg font-normal"> <img className="mr-2 w-8" width={"30px"} src="/tools/html.png"/>HTML</div>
                <div className="items-center justify-start align-middle flex flex-rowh-8  text-lg font-normal"> <img className="mr-2 w-8" width={"30px"} src="/tools/css.png"/>CSS</div>
                <div className="items-center justify-start align-middle flex flex-rowh-8  text-lg font-normal"> <img className="mr-2 w-8" width={"30px"} src="/tools/js.svg"/>JavaScript</div>
                <div className="items-center justify-start align-middle flex flex-rowh-8  text-lg font-normal"> <img className="mr-2 w-8" width={"30px"} src="/tools/typescript.png"/>TypeScript</div>
                

                <div className="items-center justify-start align-middle flex flex-row  text-lg h-8 font-normal"> <img className="mr-2 w-8" width={"30px"} src="/tools/react.png"/>React</div>
                <div className="items-center justify-start align-middle flex flex-rowh-8  text-lg font-normal"> <img className="mr-2 w-8" width={"30px"} src="/tools/tailwind.png"/>Tailwind</div>
                <div className="items-center justify-start align-middle flex flex-rowh-8  text-lg font-normal"> <img className="mr-2 w-8" width={"30px"} src="/tools/db.png"/>SQL</div>
                <div className="items-center justify-start align-middle flex flex-rowh-8  text-lg font-normal"> <img className="mr-2 w-8" width={"30px"} src="/tools/postgres.png"/>Postgres</div>
                <div className="items-center justify-start align-middle flex flex-rowh-8  text-lg font-normal"> <img className="mr-2 w-8" width={"30px"} src="/tools/mongo.svg"/>MongoDB</div>
              

                <div className="items-center justify-start align-middle flex flex-row  text-lg h-8 font-normal"> <img className="mr-2 w-8" width={"30px"} src="/tools/illustrator.png"/>Illustrator</div>
                <div className="items-center justify-start align-middle flex flex-rowh-8  text-lg font-normal"> <img className="mr-2 w-8" width={"30px"} src="/tools/photoshop.png"/>Photoshop</div>
                <div className="items-center justify-start align-middle flex flex-rowh-8  text-lg font-normal"> <img className="mr-2 w-8" width={"30px"} src="/tools/python.png"/>Python</div>
                <div className="items-center justify-start align-middle flex flex-rowh-8  text-lg font-normal"> <img className="mr-2 w-8" width={"30px"} src="/tools/numpy.svg"/>NumPy</div>
                <div className="items-center justify-start align-middle flex flex-rowh-8  text-lg font-normal"> <img className="mr-2 w-8" width={"30px"} src="/tools/pytorch.png"/>PyTorch</div>
                <div className="items-center justify-start align-middle flex flex-rowh-8  text-lg font-normal"> <img className="mr-2 w-8" width={"30px"} src="/tools/tensorflow.png"/>Tensorflow</div>
                

                <div className="items-center justify-start align-middle flex flex-row  text-lg h-8 font-normal"> <img className="mr-2 w-8" width={"30px"} src="/tools/opencv.png"/>OpenCV</div>
                <div className="items-center justify-start align-middle flex flex-rowh-8  text-lg font-normal"> <img className="mr-2 w-8" width={"20px"} src="/tools/pandas.png"/>Pandas</div>
                <div className="items-center justify-start align-middle flex flex-rowh-8  text-lg font-normal"> <img className="mr-2 w-8" width={"30px"} src="/tools/latex.svg"/>Latex</div>
                <div className="items-center justify-start align-middle flex flex-rowh-8  text-lg font-normal"> <img className="mr-2 w-8" width={"30px"} src="/tools/markdown.svg"/>Markdown</div>
                <div className="items-center justify-start align-middle flex flex-rowh-8  text-lg font-normal"> <img className="mr-2 w-8" width={"30px"} src="/tools/github.png"/>GitHub</div>
                <div className="items-center justify-start align-middle flex flex-rowh-8  text-lg font-normal"> <img className="mr-2 w-8" width={"30px"} src="/tools/git.png"/>Git</div>
              </div>
            <div className="text-xl mt-1 text-neutral-800 mb-4 mx-8">Aside from these, there are many new tools that I am venturing into, with my latest projects teaching me a bit of Swift, React Native, and Matlab.</div>
            </div>

            <div className="font-medium text-4xl mt-6 mb-2 text-zinc-950">🏛️ Experiences</div>
            <ImageSliderSm files={listImgs}/>
            <div className="font-medium text-4xl mt-6 mb-2 text-zinc-950">🎓 Education</div>
            <div className="font-medium text-4xl mt-6 mb-2 text-zinc-950">🏆 Awards</div>
            <div className="font-medium text-4xl mt-6 mb-2 text-zinc-950">💻 Projects</div>
              
            </div>
</div>
            
           
        </div>
    </div>

        
    </div>
  )
}

export default AboutMe


