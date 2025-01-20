import Latex from "react-latex-next";
import 'katex/dist/katex.min.css';

const ArticleIdea = () => {
  return (
    <div className="items-center justify-center flex flex-row">
        <div className="w-5/6 sm:w-4/5 md:w-3/5 my-12 mt-2">
        <a href="/articles" className="font-light text-lg text-blue-500">{`<`} Articles</a>
        <div className="font-light text-xl text-zinc-600">23/12/24</div>
        <div className="font-medium text-6xl my-2 mb-4 text-zinc-950">Title</div>
        <div className="text-justify">
            <div className="text-xl font-light text-zinc-800 pb-3"><Latex>text $X=Y_1ww$ testing</Latex></div>
            <div className="text-xl font-light text-zinc-800 pb-3"><Latex>text</Latex></div>
            <div className="font-medium text-3xl my-2 mb-4 text-zinc-950">SubTitle</div>
            <div className="text-2xl text-center w-full font-light text-zinc-800 pb-3 "><Latex>{`$P(A|B)=\\frac{P(B|A)P(A)}{P(B)}$`}</Latex></div>
        </div>
    </div>
    </div>
  )
}

export default ArticleIdea