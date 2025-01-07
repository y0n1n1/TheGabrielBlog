import Latex from "react-latex-next";
import 'katex/dist/katex.min.css';

const GabsCalc2 = () => {
  return (
    <div className="items-center justify-center flex flex-row">
        <div className="w-5/6 sm:w-4/5 md:w-3/5 my-12">
        <a href="/articles" className="font-light text-lg text-blue-500">{`<`} Articles</a>
        <div className="font-light text-xl text-zinc-600">March-May, 2021</div>
        <div className="font-medium text-6xl my-2 mb-4 text-zinc-950">Gab's Calc 2: Intro to calculus extended</div>
        <div className="text-justify">
            <div className="text-2xl font-normal text-zinc-500">Contents</div>
            <div className="text-lg font-light text-zinc-500 pb-3 flex flex-row">
                <div className="flex flex-col w-1/2 ml-4">
                <div className="text-xl font-normal -ml-4">2.1 - More single variable calculus</div>
                <div>2.1.1 - Implicit differentiation</div>
                <div>2.1.2 - Maxima/minima and the extreme value theorem</div>
                <div>2.1.3 - Limit of a function</div>
                <div>2.1.4 - One-sided limit</div>
                <div>2.1.5 - Limit of a sequence</div>
                <div>2.1.6 - Epsilon-delta definition</div>
                <div>2.1.7 - Linearity of differentiation</div>
                <div>2.1.8 - Inverse differentiation</div>
                <div className="text-xl font-normal -ml-4">2.2 - More rules and methods</div>
                <div>2.2.1 - Newton's method</div>
                </div>
                <div className="flex flex-col w-1/2 ml-4">
                <div>2.2.2 - General leibniz rule</div>
                <div>2.2.3 - Mean value theorem</div>
                <div>2.2.4 - Logarithmic derivative</div>
                <div>2.2.5 - Rolle's theorem</div>
                <div>2.2.6 - Stirling's approximation</div>
                <div className="text-xl font-normal -ml-4">2.3 - Further integration</div>
                <div>2.3.1 - Arc length</div>
                <div>2.3.2 - Double integrals</div>
                <div>2.3.3 - Line integrals</div>
                <div>2.3.4 - Triple integrals</div>
                </div>
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

export default GabsCalc2