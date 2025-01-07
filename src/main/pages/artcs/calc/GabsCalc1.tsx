import Latex from "react-latex-next";
import 'katex/dist/katex.min.css';

const GabsCalc1 = () => {
  return (
    <div className="items-center justify-center flex flex-row">
        <div className="w-5/6 sm:w-4/5 md:w-3/5 my-12">
        <a href="/articles" className="font-light text-lg text-blue-500">{`<`} Articles</a>
        <div className="font-light text-xl text-zinc-600">March-May, 2021</div>
        <div className="font-medium text-6xl my-2 mb-4 text-zinc-950">Gab's Calc 1: Intro to calculus</div>
        <div className="text-justify">
            <div className="text-2xl font-normal text-zinc-500">Contents</div>
            <div className="text-lg font-light text-zinc-500 pb-3 flex flex-row">
                <div className="flex flex-col w-1/2 ml-4">
                <div className="text-xl font-normal -ml-4">1.1 - Limits</div>
                <div>1.1.1 - The limit</div>
                <div>1.1.2 - L'Hopital's rule</div>
                <div className="text-xl font-normal -ml-4">1.2 - Derivatives</div>
                <div>1.2.1 - The derivative</div>
                <div>1.2.2 - Deriving the derivative</div>
                <div>1.2.3 - Differentiation rules</div>
                <div>1.2.4 - Sign diagrams and slopes</div>
                <div className="text-xl font-normal -ml-4">1.3 - Integrals</div>
                <div>1.3.1 - The integral</div>
                <div>1.3.2 - Proving the fundamental theorem of calculus</div>
                <div>1.3.3 - Integration rules</div></div>
                <div className="flex flex-col w-1/2 ml-4"><div className="text-xl font-normal -ml-4">1.4 - More rules</div>
                <div>1.4.1 - Stationary points</div>
                <div>1.4.2 - Chain, product, and Quotient rules</div>
                <div>1.4.3 - Definite integrals</div>
                <div>1.4.4 - U-substitution</div>
                <div>1.4.5 - Other integrals</div>
                <div className="text-xl font-normal -ml-4">1.5 - Simple applications</div>
                <div>1.5.1 - Taylor series</div>
                <div>1.5.2 - Taylor theorem</div>
                <div>1.5.3 - Taylor polynomial</div>
                <div>1.5.4 - Fourier series</div>
                <div>1.5.5 - Infinite series</div></div>
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

export default GabsCalc1