
import ImageGallery from '@/components/ImageGallery';
import Latex from 'react-latex-next';


// <ImageGallery images={images} />

const TensorCalc = () => {
  const images = [
    { src: "/TensorNotebook/Cover Large.jpeg", caption: "Cover Large.jpeg" },
    { src: "/TensorNotebook/P15 Large.jpeg", caption: "P15 Large.jpeg" },
    { src: "/TensorNotebook/P16 Large.jpeg", caption: "P16 Large.jpeg" },
    { src: "/TensorNotebook/P17 Large.jpeg", caption: "P17 Large.jpeg" },
    { src: "/TensorNotebook/P18 Large.jpeg", caption: "P18 Large.jpeg" },
    { src: "/TensorNotebook/P19 Large.jpeg", caption: "P19 Large.jpeg" },
    { src: "/TensorNotebook/P20 Large.jpeg", caption: "P20 Large.jpeg" },
    { src: "/TensorNotebook/P21 Large.jpeg", caption: "P21 Large.jpeg" },
    { src: "/TensorNotebook/P22 Large.jpeg", caption: "P22 Large.jpeg" },
    { src: "/TensorNotebook/P23 Large.jpeg", caption: "P23 Large.jpeg" },
    { src: "/TensorNotebook/P24 Large.jpeg", caption: "P24 Large.jpeg" },
    { src: "/TensorNotebook/P25 Large.jpeg", caption: "P25 Large.jpeg" },
    { src: "/TensorNotebook/P26 Large.jpeg", caption: "P26 Large.jpeg" },
    { src: "/TensorNotebook/P27 Large.jpeg", caption: "P27 Large.jpeg" },
    { src: "/TensorNotebook/P28 Large.jpeg", caption: "P28 Large.jpeg" },
    { src: "/TensorNotebook/P29 Large.jpeg", caption: "P29 Large.jpeg" },
    { src: "/TensorNotebook/P30 Large.jpeg", caption: "P30 Large.jpeg" },
    { src: "/TensorNotebook/P31 Large.jpeg", caption: "P31 Large.jpeg" },
    { src: "/TensorNotebook/P32 Large.jpeg", caption: "P32 Large.jpeg" },
    { src: "/TensorNotebook/P33 Large.jpeg", caption: "P33 Large.jpeg" },
    { src: "/TensorNotebook/P34 Large.jpeg", caption: "P34 Large.jpeg" },
    { src: "/TensorNotebook/P35 Large.jpeg", caption: "P35 Large.jpeg" },
    { src: "/TensorNotebook/P36 Large.jpeg", caption: "P36 Large.jpeg" },
    { src: "/TensorNotebook/P37 Large.jpeg", caption: "P37 Large.jpeg" },
    { src: "/TensorNotebook/P38 Large.jpeg", caption: "P38 Large.jpeg" },
    { src: "/TensorNotebook/P39 Large.jpeg", caption: "P39 Large.jpeg" },
    { src: "/TensorNotebook/P40 Large.jpeg", caption: "P40 Large.jpeg" },
    { src: "/TensorNotebook/P41 Large.jpeg", caption: "P41 Large.jpeg" },
    { src: "/TensorNotebook/P42 Large.jpeg", caption: "P42 Large.jpeg" },
    { src: "/TensorNotebook/P43 Large.jpeg", caption: "P43 Large.jpeg" },
    { src: "/TensorNotebook/P44 Large.jpeg", caption: "P44 Large.jpeg" },
    { src: "/TensorNotebook/P45 Large.jpeg", caption: "P45 Large.jpeg" },
    { src: "/TensorNotebook/P46 Large.jpeg", caption: "P46 Large.jpeg" },
    { src: "/TensorNotebook/P47 Large.jpeg", caption: "P47 Large.jpeg" },
    { src: "/TensorNotebook/P48 Large.jpeg", caption: "P48 Large.jpeg" },
    { src: "/TensorNotebook/P49 Large.jpeg", caption: "P49 Large.jpeg" },
    { src: "/TensorNotebook/P50 Large.jpeg", caption: "P50 Large.jpeg" },
    { src: "/TensorNotebook/P51 Large.jpeg", caption: "P51 Large.jpeg" },
    { src: "/TensorNotebook/P52 Large.jpeg", caption: "P52 Large.jpeg" },
    { src: "/TensorNotebook/P53 Large.jpeg", caption: "P53 Large.jpeg" },
    { src: "/TensorNotebook/P54 Large.jpeg", caption: "P54 Large.jpeg" },
    { src: "/TensorNotebook/P55 Large.jpeg", caption: "P55 Large.jpeg" },
    { src: "/TensorNotebook/P56 Large.jpeg", caption: "P56 Large.jpeg" },
    { src: "/TensorNotebook/P57 Large.jpeg", caption: "P57 Large.jpeg" },
    { src: "/TensorNotebook/P58 Large.jpeg", caption: "P58 Large.jpeg" },
    { src: "/TensorNotebook/P59 Large.jpeg", caption: "P59 Large.jpeg" },
    { src: "/TensorNotebook/P60 Large.jpeg", caption: "P60 Large.jpeg" },
    { src: "/TensorNotebook/P61 Large.jpeg", caption: "P61 Large.jpeg" },
    { src: "/TensorNotebook/P62 Large.jpeg", caption: "P62 Large.jpeg" },
    { src: "/TensorNotebook/P63 Large.jpeg", caption: "P63 Large.jpeg" },
    { src: "/TensorNotebook/P64 Large.jpeg", caption: "P64 Large.jpeg" },
    { src: "/TensorNotebook/P65 Large.jpeg", caption: "P65 Large.jpeg" },
    { src: "/TensorNotebook/P66 Large.jpeg", caption: "P66 Large.jpeg" },
    { src: "/TensorNotebook/P67 Large.jpeg", caption: "P67 Large.jpeg" },
    { src: "/TensorNotebook/P68 Large.jpeg", caption: "P68 Large.jpeg" },
    { src: "/TensorNotebook/P69 Large.jpeg", caption: "P69 Large.jpeg" },
    { src: "/TensorNotebook/P70 Large.jpeg", caption: "P70 Large.jpeg" },
    { src: "/TensorNotebook/P71 Large.jpeg", caption: "P71 Large.jpeg" },
    { src: "/TensorNotebook/P72 Large.jpeg", caption: "P72 Large.jpeg" },
    { src: "/TensorNotebook/P73 Large.jpeg", caption: "P73 Large.jpeg" },
    { src: "/TensorNotebook/P74 Large.jpeg", caption: "P74 Large.jpeg" },
    { src: "/TensorNotebook/P75 Large.jpeg", caption: "P75 Large.jpeg" },
    { src: "/TensorNotebook/P76 Large.jpeg", caption: "P76 Large.jpeg" },
    { src: "/TensorNotebook/P77 Large.jpeg", caption: "P77 Large.jpeg" },
    { src: "/TensorNotebook/P78 Large.jpeg", caption: "P78 Large.jpeg" },
    { src: "/TensorNotebook/P79 Large.jpeg", caption: "P79 Large.jpeg" },
    { src: "/TensorNotebook/P80 Large.jpeg", caption: "P80 Large.jpeg" },
    { src: "/TensorNotebook/P81 Large.jpeg", caption: "P81 Large.jpeg" },
    { src: "/TensorNotebook/P82 Large.jpeg", caption: "P82 Large.jpeg" },
    { src: "/TensorNotebook/P83 Large.jpeg", caption: "P83 Large.jpeg" },
    { src: "/TensorNotebook/P84 Large.jpeg", caption: "P84 Large.jpeg" },
    { src: "/TensorNotebook/P85 Large.jpeg", caption: "P85 Large.jpeg" },
    { src: "/TensorNotebook/P86 Large.jpeg", caption: "P86 Large.jpeg" },
    { src: "/TensorNotebook/P87 Large.jpeg", caption: "P87 Large.jpeg" },
    { src: "/TensorNotebook/P88 Large.jpeg", caption: "P88 Large.jpeg" },
    { src: "/TensorNotebook/P89 Large.jpeg", caption: "P89 Large.jpeg" },
    { src: "/TensorNotebook/P90 Large.jpeg", caption: "P90 Large.jpeg" },
    { src: "/TensorNotebook/P91 Large.jpeg", caption: "P91 Large.jpeg" },
    { src: "/TensorNotebook/P92 Large.jpeg", caption: "P92 Large.jpeg" },
    { src: "/TensorNotebook/P93 Large.jpeg", caption: "P93 Large.jpeg" },
    { src: "/TensorNotebook/P94 Large.jpeg", caption: "P94 Large.jpeg" },
    { src: "/TensorNotebook/P95 Large.jpeg", caption: "P95 Large.jpeg" },
    { src: "/TensorNotebook/P96 Large.jpeg", caption: "P96 Large.jpeg" },
    { src: "/TensorNotebook/P97 Large.jpeg", caption: "P97 Large.jpeg" },
    { src: "/TensorNotebook/P98 Large.jpeg", caption: "P98 Large.jpeg" },
    { src: "/TensorNotebook/P99 Large.jpeg", caption: "P99 Large.jpeg" },
    { src: "/TensorNotebook/P100 Large.jpeg", caption: "P100 Large.jpeg" },
    { src: "/TensorNotebook/P101 Large.jpeg", caption: "P101 Large.jpeg" },
    { src: "/TensorNotebook/P102 Large.jpeg", caption: "P102 Large.jpeg" },
    { src: "/TensorNotebook/P103 Large.jpeg", caption: "P103 Large.jpeg" },
    { src: "/TensorNotebook/P104 Large.jpeg", caption: "P104 Large.jpeg" },
    { src: "/TensorNotebook/P105 Large.jpeg", caption: "P105 Large.jpeg" },
    { src: "/TensorNotebook/P106 Large.jpeg", caption: "P106 Large.jpeg" },
    { src: "/TensorNotebook/P107 Large.jpeg", caption: "P107 Large.jpeg" },
    { src: "/TensorNotebook/P108 Large.jpeg", caption: "P108 Large.jpeg" },
    { src: "/TensorNotebook/P109 Large.jpeg", caption: "P109 Large.jpeg" },
    { src: "/TensorNotebook/P110 Large.jpeg", caption: "P110 Large.jpeg" },
    { src: "/TensorNotebook/P111 Large.jpeg", caption: "P111 Large.jpeg" },
    { src: "/TensorNotebook/P112 Large.jpeg", caption: "P112 Large.jpeg" },
    { src: "/TensorNotebook/P113 Large.jpeg", caption: "P113 Large.jpeg" },
    { src: "/TensorNotebook/P114 Large.jpeg", caption: "P114 Large.jpeg" },
    { src: "/TensorNotebook/P115 Large.jpeg", caption: "P115 Large.jpeg" },
    { src: "/TensorNotebook/P116 Large.jpeg", caption: "P116 Large.jpeg" },
    { src: "/TensorNotebook/P117 Large.jpeg", caption: "P117 Large.jpeg" },
    { src: "/TensorNotebook/P118 Large.jpeg", caption: "P118 Large.jpeg" },
    { src: "/TensorNotebook/P119 Large.jpeg", caption: "P119 Large.jpeg" },
    { src: "/TensorNotebook/P120 Large.jpeg", caption: "P120 Large.jpeg" }
  ];
  return (
    <div className="items-center justify-center flex flex-row">
        <div className="w-5/6 sm:w-4/5 md:w-3/5 my-12 mt-2">
        <a href="/notebooks" className="font-light text-lg text-blue-500">{`<`} Notebooks</a>
        <div className="font-light text-xl text-zinc-600">March-May, 2021</div>
        <div className="font-medium text-6xl my-2 mb-4 text-zinc-950">Tensor Calculus</div>
      <ImageGallery images={images} />
                <div className='text-4xl mt-12'>Other units:</div>
                <div className='grid grid-cols-3 gap-4 mt-4'>
                <a 
                          href="/relativity/intro-to-tensors" 
                          className="p-6 bg-white h-full border border-neutral-300 rounded-lg hover:shadow-md hover:bg-neutral-200 transition flex flex-col items-center text-center">
                          <span className="text-2xl font-medium">Tensor Algebra</span>
                          <div className="text-4xl mt-2">
                            <Latex>{`$v_i=g_{ij}v^j$`}</Latex>
                          </div>
                        </a>
                </div>
      </div></div>
  )
}

export default TensorCalc