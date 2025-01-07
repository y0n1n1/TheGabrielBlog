import Latex from "react-latex-next";
import 'katex/dist/katex.min.css';

const GabsCalc3 = () => {
  return (
    <div className="items-center justify-center flex flex-row">
        <div className="w-5/6 sm:w-4/5 md:w-3/5 my-12">
        <a href="/articles" className="font-light text-lg text-blue-500">{`<`} Articles</a>
        <div className="font-light text-xl text-zinc-600">March-May, 2021</div>
        <div className="font-medium text-6xl my-2 mb-4 text-zinc-950">Gab's Calc 3: Ordinary differential equations</div>
        <div className="text-justify">
            <div className="text-2xl font-normal text-zinc-500">Contents</div>
            <div className="text-lg font-light text-zinc-500 pb-3 flex flex-row">
                <div className="flex flex-col w-1/2 ml-4">
                <div>3.1 - Differential equation</div>
                <div>3.2 - Differential operator</div>
                <div>3.3 - Euler method (forward euler method)</div>
                <div>3.4 - Definitions</div>
                <div>3.5 - Other</div>
                <div>3.6 - Other part 2</div>
                <div>3.7 - Existence and uniqueness</div></div>
                <div className="flex flex-col w-1/2 ml-4">
                <div>3.8 - Linear DEs</div>
                <div>3.9 - Bernoulli equation</div>
                <div>3.10 - Autonomous equations</div>
                <div>3.11 - 2nd order ODEs</div>
                <div>3.12 - CCODEs</div>
                <div>3.13 - Super position</div></div>
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

export default GabsCalc3