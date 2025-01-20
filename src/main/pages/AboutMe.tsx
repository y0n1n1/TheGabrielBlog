import  ImageSliderSm  from "@/lib/ImgSmSlider"


const AboutMe = () => {
  const listImgs = ["/homeLogos/P1.png", "/homeLogos/P2.png", "/homeLogos/P3.png", "/homeLogos/P4.png", 
    "/homeLogos/P5.png", "/homeLogos/P6.png", "/homeLogos/P7.png"
  ]
  return (
    <div>
      <div className="flex flex-row align-middle items-center justify-center h-full">
        <div className="border border-ext-500 rounded-3xl flex flex-col mt-12 w-11/12 sm:w-11/12 md:w-5/6 lg:w-4/5 h-[600px]">
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
                <div className="text-2xl text-neutral-900 ">About me</div>
            </div>     
            <div>
            https://drive.google.com/file/d/1M8I02XKR3mo3D3JyilDR8ZMExJ7bzqJ6/view?usp=drive_link
            <ImageSliderSm files={listImgs}/></div>
        </div>
    </div>
      CV, qualifications, and hobbies

        https://github.com/y0n1n1

        languages

        technical arsenal?

        Get in touch
        
        website CV + PDF CV

        
    </div>
  )
}

export default AboutMe


