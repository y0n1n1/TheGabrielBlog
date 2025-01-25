import Latex from "react-latex-next";
import 'katex/dist/katex.min.css';
import { useState } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { githubGist } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Check, Copy } from "lucide-react";

const Article4 = () => {

    const codeString = `# PyTorch
ReLU = torch.nn.ReLU()
ReLU(3) # returns 3
ReLU(-4) # returns 0

# Tensorflow
ReLU_layer = tf.keras.layers.ReLU() # to be used in a model
model.add(ReLU_layer) # adds the ReLU layer to a model
# to be used by itself:
x = [-5.0, 3.0, 4.0]
ReLU = tf.nn.relu(x).numpy() # returns [0.0, 3.0, 4.0]

# native Python
def ReLU(x):
  return max(0, x)`
    const [copied1, setCopied1] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText(codeString).then(() => {
            setCopied1(true);
            setTimeout(() => setCopied1(false), 2000); // Revert to Copy icon after 2 seconds      
        });
      };
  return (
    <div className="items-center justify-center flex flex-row">
        <div className="w-5/6 sm:w-4/5 md:w-3/5 my-12 mt-2">
        <a href="/articles" className="font-light text-lg text-blue-500">{`<`} Articles</a>
        <div className="font-light text-xl text-zinc-600">15/03/2024</div>
        <div className="font-medium text-6xl my-2 mb-4 text-zinc-950">ReLU and its Variants: How to Implement it and its Applications</div>
        <div className="text-justify">
        <div className="w-full items-center align-middle flex flex-col">
        <img src="/A4-1.png" className="my-5 h-72" />
            </div>
            <div className="text-xl font-light italic mx-4 text-zinc-800 pb-3"><span className="font-bold">ReLU — Rectified Linear Unit</span> is an essential activation function in the world of Neural Networks. In this article I will teach you how to implement it (using PyTorch or Tensorflow, and from scratch). I will also explain the variants of ReLU and their applications.</div>
            <div className="text-xl font-light text-zinc-800 pb-3"><span className="font-bold">Activation functions</span> are mathematical operations applied to the output of each neuron in a <span className="italic">Neural Net</span>. They serve as non-linear transformations that <span className="font-bold">introduce complexity to the network</span> and enable the network to learn and model <span className="font-bold">intricate patterns</span> within data.</div>
            <div className="text-xl font-light text-zinc-800 pb-3"><Latex>ReLU is possibly the simplest activation function, though it is very powerful and widely used.</Latex></div>
            <div className="w-full items-center align-middle flex flex-col">
            <img src="/A4-2.png" className="my-5 h-72" />
                </div>
            <div className="font-medium text-3xl my-2 mb-4 text-zinc-950">Implementing ReLU</div>
            <div className="text-xl font-light text-zinc-800 pb-3">The <span className="font-bold">ReLU Function</span> can be mathematically expressed as:</div>
            <div className="text-2xl text-center w-full font-light text-zinc-800 pb-3 "><Latex>{`$ReLU(x)=max(0,x)$`}</Latex></div>
            <div className="text-xl font-light text-zinc-800 pb-3">Here, any input value x to the function will remain the same if it is positive, and if it is negative, the function will return zero. This is powerful for many reasons. One is that it is <span className="font-bold">easy to compute</span>, it doesn’t require any calculations to be performed. It has also been <span className="font-bold">empirically proven to work</span>.</div>
            <div className="text-xl font-light text-zinc-800 pb-3">To implement it in <span className="font-bold">PyTorch</span>, <span className="font-bold">Tensorflow</span>, or just standard <span className="font-bold">Python</span>, simply write:</div><div className="flex flex-col"><div className="text-base border p-4 pt-0 mx-8 my-1 mb-4 rounded-3xl font-light text-zinc-800 pb-3 flex flex-row justify-between items-start align-top">
            
<div className="pt-4">
  <SyntaxHighlighter language="python"  style={githubGist}>
  {codeString}
</SyntaxHighlighter>
</div><div className="flex items-center justify-end align-middle pt-4 mr-2">
  <button
    onClick={handleCopy}
    className="flex items-center space-x-1 font-light align-middle text-base text-zinc-500 hover:text-zinc-400"
  >
    {copied1 ? (
            <Check className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
    <span>Copy</span>
  </button>
</div></div>

</div>
<div className="w-full items-center align-middle flex flex-col">
<img src="/A4-3.png" className="my-5 h-72" />
    </div>
            <div className="text-xl font-light text-zinc-800 pb-3">Above, you can see what ReLU does: it <span className="italic">filters</span> input values to output only positive or zero values.</div>
            <div className="text-xl font-light text-zinc-800 pb-3">A final property of ReLU is that <span className="font-bold">its derivative</span>: it is zero for negative inputs, and 1 for positive inputs. Below you can see the derivative of the ReLU function in purple:</div>
            <div className="w-full items-center align-middle flex flex-col">
                
                
            <img src="/A4-4.png" className="my-5 h-72" />
                </div>
            <div className="font-medium text-3xl my-2 mb-4 text-zinc-950">The ReLU Variants and their Applications</div>
            <div className="text-xl font-light text-zinc-800 pb-3">Although ReLU has a myriad of applications, it has a main limitation which is solved by most ReLU variants. <span className="font-bold">The dying ReLU problem</span> is when ReLU neurons become inactive (output zero) for all inputs during training, causing a portion of the network to stop learning.</div>
            <div className="w-full items-center align-middle flex flex-col">
            <img src="/A4-5.png" className="my-5 h-72" />
                </div>
            <div className="font-medium text-3xl my-2 mb-4 text-zinc-950">1. Leaky ReLU (LReLU)</div>
            <div className="w-full items-center align-middle flex flex-col"><img src="/A4-6.png" className="my-5 h-72" /></div>
            <div className="text-xl font-light text-zinc-800 pb-3"><span className="font-bold">Leaky ReLU</span> addresses the Dying ReLU Problem by allowing a small, positive slope for negative inputs. Instead of setting negative values to zero, Leaky ReLU multiplies negative inputs by a small constant alpha (typically a very small value like 0.01), allowing a small gradient to flow through the neuron even when the input is negative.</div>
            <div className="text-2xl text-center w-full font-light text-zinc-800 pb-3 "><Latex>{`$LReLU(x)=\\begin{cases} x &  x\\geq  0\\\\ \\alpha x & x< 2 \\end{cases}$`}</Latex></div>
            <div className="font-medium text-3xl my-2 mb-4 text-zinc-950">2. Parametric ReLU (PReLU)</div>
            <div className="text-xl font-light text-zinc-800 pb-3"><span className="font-bold">Parametric ReLU</span> is an extension of Leaky ReLU where <span className="italic">the slope of the negative part of the function is not a fixed constant but instead is a learnable parameter</span>, allowing the network to have individually learned parameters for each neuron.</div>
            <div className="text-xl font-light text-zinc-800 pb-3">It has the same formula as Leaky ReLU, but <span className="font-bold">alpha</span> can be individually modified.</div>
            <div className="font-medium text-3xl my-2 mb-4 text-zinc-950">3. Exponential Linear Unit (ELU)            </div>
            <div className="w-full items-center align-middle flex flex-col">
            <img src="/A4-7.png" className="my-5 h-72" />
                </div>
            <div className="text-xl font-light text-zinc-800 pb-3"><span className="font-bold">ELU</span> addresses the Dying ReLU Problem by introducing a slight negative slope for negative inputs. But Unlike Leaky ReLU, which uses a linear function for negative inputs, ELU uses an exponential function.</div>
            <div className="text-xl font-light text-zinc-800 pb-3">ELU has been shown to <span className="font-bold">improve training performance</span> and convergence speed compared to traditional LReLU due to the smoother transition to negative values. Its formula is:</div>
            <div className="text-2xl text-center w-full font-light text-zinc-800 pb-3 "><Latex>{`$ELU(x)=\\begin{cases} x & x\\geq 0 \\\\ \\alpha (e^x-1) & x< 0 \\end{cases}$`}</Latex></div>
            <div className="font-medium text-3xl my-2 mb-4 text-zinc-950">4. Scaled Exponential Linear Unit (SELU)</div>
            <div className="w-full items-center align-middle flex flex-col">
            <img src="/A4-8.png" className="my-5 h-72" />
                </div>
            <div className="text-xl font-light text-zinc-800 pb-3"><span className="font-bold">SELU</span> is a variant of ELU that introduces a normalization term to stabilize the activations and encourages self-normalization of hidden layers. This is done by multiplying ELU by a factor <span className="font-bold">lambda</span>. Both <span className="font-bold">lambda</span> and <span className="font-bold">alpha</span> are controlled to follow 2 criteria for the outputs:</div>
            <ul className="list-disc list-outside space-y-4 text-justify mx-8">
  <li className="text-xl font-light text-zinc-800">
  The mean is approximately zero
  </li>
  <li className="text-xl font-light text-zinc-800">
  The standard deviation is approximately one
  </li>
</ul>
            <div className="text-xl font-light text-zinc-800 pb-3">This encourages <span className="font-bold">self-normalization</span> of the network’s activations. This normalization helps stabilize the activations during training and <span className="italic">improves convergence and generalization performance</span>.</div>
            <div className="text-2xl text-center w-full font-light text-zinc-800 pb-3 "><Latex>{`$SELU(x)=\\lambda \\begin{cases} x & x\\geq 0 \\\\ \\alpha (e^x-1) & x< 0 \\end{cases}$`}</Latex></div>
            <div className="font-medium text-3xl my-2 mb-4 text-zinc-950">5. Gaussian Error Linear Unit (GELU)</div>
            <div className="text-xl font-light text-zinc-800 pb-3"><span className="font-bold">GELU</span> approximates the <span className="font-bold">cumulative distribution</span> function of a standard <span className="font-bold">Gaussian distribution</span> up to a point x, and multiplies that by the input. This is calculated using the <span className="italic">erf</span> function:</div>
            <div className="text-2xl text-center w-full font-light text-zinc-800 pb-3 "><Latex>{`$f_{erf}=\\frac{2}{\\sqrt{\\pi }}\\int_{0}^{x}e^{-t^2}dt$`}</Latex></div>
            <div className="text-2xl text-center w-full font-light text-zinc-800 pb-3 "><Latex>{`$GELU(x)=\\frac{x}{2}(1+f_{erf}(\\frac{x}{\\sqrt{2}}))$`}</Latex></div>
            <div className="text-xl font-light text-zinc-800 pb-3">GELU is favoured due to it’s distinct shape that introduces non-linearity both for negative and positive inputs, while still maintaining a similar shape to ELU:</div>
            <div className="w-full items-center align-middle flex flex-col">
            <img src="/A4-9.png" className="my-5 h-72" />
                </div>
            <div className="text-xl font-light text-zinc-800 pb-3">This can be a <span className="italic">mathematically costly operation</span>, however, PyTorch’s implementation is sufficiently fast (3). Either way, it is important to note that there exists a <span className="font-bold">popular approximation</span> for GELU using <span className="font-bold">sigmoid</span>:</div>
            <div className="text-2xl text-center w-full font-light text-zinc-800 pb-3 "><Latex>{`$sigmoid(x)=\\frac{1}{1+e^{-x}}$`}</Latex></div>
            <div className="text-2xl text-center w-full font-light text-zinc-800 pb-3 "><Latex>{`$GELU_{approximation}(x)=x\\cdot sigmoid(1.704x)$`}</Latex></div>
            <div className="w-full items-center align-middle flex flex-col">
            <img src="/A4-10.png" className="my-5 h-72" />
                </div>
            <div className="text-xl font-light text-zinc-800 pb-3">As you can see above, there are only very minor differences between GELU and it’s approximation.</div>
            <div className="text-xl font-light text-zinc-800 pb-3">GELU is one of the <span className="font-bold">newest activation functions</span>, created by Hendrycks, Dan, and Kevin Gimpel in 2016 (3).</div>
            <div className="text-xl font-light text-zinc-800 pb-3 italic"><span className="font-bold">GELU</span> is currently the activation function with the most ‘hype’ in the industry, and it has been famously used in <span className="font-bold">GPT-3</span>, <span className="font-bold">BERT</span>, and many other transformers.</div>
            <div className="w-full items-center align-middle flex flex-col">
            <img src="/A4-11.png" className="my-5 h-72" />
                </div>
            <div className="text-xl font-light text-zinc-800 pb-3">The graph above shows the <span className="italic">proportion of research papers</span> using each Activation function, and it can be seen that <span className="font-bold">ReLU</span> is getting a decline in popularity, while <span className="font-bold">GELU</span> is seeing its rise (4).</div>
            <div className="font-medium text-3xl my-2 mb-4 text-zinc-950">Sources</div>
            <ol className="list-decimal list-outside space-y-4 text-justify mx-8">
  <li className="text-xl font-light text-zinc-800">
    <i>Hill, Kyle.</i> “Food Coloring, Fluid Dynamics, and an Awesome Lab Demo.” Science-Based Life, Science-Based Life, 17 Oct. 2012, 
    <a 
      href="https://sciencebasedlife.wordpress.com/2012/10/17/food-coloring-fluid-dynamics-and-an-awesome-lab-demo/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="underline text-black"
    >
       sciencebasedlife.wordpress.com/2012/10/17/food-coloring-fluid-dynamics-and-an-awesome-lab-demo/
    </a>. Accessed 15 Mar. 2024.
  </li>
  <li className="text-xl font-light text-zinc-800">
    <i>Lam, Adrian.</i> “MRIs Are Cool AF — Adrian Lam — Medium.” Medium, Medium, 16 Feb. 2019, 
    <a 
      href="https://medium.com/@ayplam/mris-are-cool-af-175969cda3ce" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="underline text-black"
    >
       medium.com/@ayplam/mris-are-cool-af-175969cda3ce
    </a>. Accessed 15 Mar. 2024.
  </li>
  <li className="text-xl font-light text-zinc-800">
    <i>Hendrycks, Dan, and Kevin Gimpel.</i> “Gaussian Error Linear Units (GELUs).” ArXiv.org, 2016, 
    <a 
      href="https://arxiv.org/abs/1606.08415v5" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="underline text-black"
    >
       arxiv.org/abs/1606.08415v5
    </a>. Accessed 15 Mar. 2024.
  </li>
  <li className="text-xl font-light text-zinc-800">
    <i>Klambauer, Günter, et al.</i> “Self-Normalizing Neural Networks.” ArXiv.org, 2017, 
    <a 
      href="https://arxiv.org/abs/1706.02515v5" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="underline text-black"
    >
       arxiv.org/abs/1706.02515v5
    </a>. Accessed 15 Mar. 2024.
  </li>
</ol>

        </div>
    </div>
    </div>
  )
}

export default Article4