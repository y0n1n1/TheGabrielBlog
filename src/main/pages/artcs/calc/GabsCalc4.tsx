import Latex from "react-latex-next";
import 'katex/dist/katex.min.css';

const GabsCalc4 = () => {
  return (
    <div className="items-center justify-center flex flex-row">
        <div className="w-5/6 sm:w-4/5 md:w-3/5 my-12">
        <a href="/articles" className="font-light text-lg text-blue-500">{`<`} Articles</a>
        <div className="font-light text-xl text-zinc-600">March-May, 2021</div>
        <div className="font-medium text-6xl my-2 mb-4 text-zinc-950">Gab's Calc 4: Multivariable and vector calculus</div>
        <div className="text-justify">
            <div className="text-2xl font-normal text-zinc-500">Contents</div>
            <div className="text-lg font-light text-zinc-500 pb-3 flex flex-row">
                <div className="flex flex-col w-1/2 ml-4">
                <div className="text-xl font-normal -ml-4">4.1 - Multivariable functions</div>
                <div>4.1.1 - The limit</div>
                <div>4.1.2 - L'Hopital's rule</div>
                <div>4.1.2 - L'Hopital's rule</div>
                <div>4.1.2 - L'Hopital's rule</div>
                <div>4.1.2 - L'Hopital's rule</div>
                <div>4.1.2 - L'Hopital's rule</div>
                <div>4.1.2 - L'Hopital's rule</div>
                <div>4.1.2 - L'Hopital's rule</div>
                <div>4.1.2 - L'Hopital's rule</div>
                <div>4.1.2 - L'Hopital's rule</div>
                <div>4.1.2 - L'Hopital's rule</div>
                <div>4.1.2 - L'Hopital's rule</div>
                <div className="text-xl font-normal -ml-4">4.2 - Complex multivariable calculus</div>
                <div>4.2.1 - Taylor series</div>
                <div>4.2.2 - Taylor theorem</div>
                <div>4.2.3 - Taylor polynomial</div>
                <div>4.2.4 - Fourier series</div>
                <div>4.2.12 - The end (for now)</div></div>
            </div>
            <div className="text-xl font-light text-zinc-800 pb-3"><Latex>text $X=Y_1ww$ testing</Latex></div>
            <div className="text-xl font-light text-zinc-800 pb-3"><Latex>text</Latex></div>
            <div className="font-medium text-3xl my-2 mb-4 text-zinc-950">SubTitle</div>
            <div className="text-2xl text-center w-full font-light text-zinc-800 pb-3 "><Latex>{`$P(A|B)=\\frac{P(B|A)P(A)}{P(B)}$`}</Latex></div>
        </div>
    </div>
    </div>
  )
}

export default GabsCalc4