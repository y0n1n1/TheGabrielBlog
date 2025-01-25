import Latex from "react-latex-next";
import 'katex/dist/katex.min.css';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { githubGist } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Check, Copy } from "lucide-react";
import { useState } from "react";


const Article2 = () => {

    const codeString = `def f(n):
    primes = []
    for num in range(2, n + 1):
        is_prime = True
        for i in range(2, num): 
            if num % i == 0:
                is_prime = False
                break
        if is_prime or num == 2:
            primes.append(num)
    p = len(primes)
    q = n - p
    return p, q`
    const [copied1, setCopied1] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText(codeString).then(() => {
            setCopied1(true);
            setTimeout(() => setCopied1(false), 2000); // Revert to Copy icon after 2 seconds      
        });
      };
    const codeString2 = `print(f(50)) # returns (15, 35), meaning 15 are prime and 35 are not`
    const [copied2, setCopied2] = useState(false);
    const handleCopy2 = () => {
        navigator.clipboard.writeText(codeString2).then(() => {
            setCopied2(true);
            setTimeout(() => setCopied2(false), 2000); // Revert to Copy icon after 2 seconds  
        });
      };
      const codeString3 = `import time
def time_test(n):
    start = time.time()
    print(f(n))
    end = time.time()
    print(f"Time taken: {end - start}")
`
    const [copied3, setCopied3] = useState(false);
      const handleCopy3 = () => {
          navigator.clipboard.writeText(codeString3).then(() => {
            setCopied3(true);
            setTimeout(() => setCopied3(false), 2000); // Revert to Copy icon after 2 seconds  
          });
        };
        const codeString4 = `time_test(1) # Time taken: 2.7179718017578125e-05
time_test(10) # Time taken: 1.3828277587890625e-05
time_test(100) # Time taken: 5.507469177246094e-05
time_test(1000) # Time taken: 0.002808094024658203
time_test(10000) # Time taken: 0.22690796852111816
time_test(20000) # Time taken: 0.865760326385498
time_test(30000) # Time taken: 1.8458709716796875
time_test(50000) # Time taken: 4.95271110534668
time_test(80000) # Time taken: 12.876786470413208
  `
    const [copied4, setCopied4] = useState(false);
        const handleCopy4 = () => {
            navigator.clipboard.writeText(codeString4).then(() => {
                setCopied4(true);
                setTimeout(() => setCopied4(false), 2000); // Revert to Copy icon after 2 seconds  
            });
          };
  return (
    <div className="items-center justify-center flex flex-row">
        <div className="w-5/6 sm:w-4/5 md:w-3/5 my-12 mt-2">
        <a href="/articles" className="font-light text-lg text-blue-500 hover:text-blue-400">{`<`} Articles</a>
        <div className="font-light text-xl text-zinc-600">12/02/2024</div>
        <div className="font-medium text-6xl my-2 mb-4 text-zinc-950">The Big O: What is Computational Complexity?        </div>
        <div className="text-justify">
        <div className="text-xl font-light text-zinc-800 pb-3 italic"><Latex>Computational complexity is a fundamental area of Computer Science, but to understand why, we must first understand how computers operate.</Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3">All computers are built under the idea that they will be used to <span className="italic">perform operations</span>, which in computer science we call <span className="font-bold">computations</span> — They are the basis of any computer. You can read this article right now because your phone or computer can run sophisticated computations that allow it to connect to the internet.</div>
        <div className="text-xl font-light text-zinc-800 pb-3">However, all of the computations being done by your device and the server in which this article is hosted are done automatically, without either one of us having to tell the computer which computations to do. This ability is the basis of an algorithm. An <span className="font-bold">algorithm</span> is a sequence of computations which can be used to return certain <span className="font-bold">outputs</span> from certain <span className="font-bold">inputs</span>. Algorithms are at the essence of all computer science as <span className="italic">they are what we can create to solve a class of specific problems</span>. For example, if we want to determine the number of prime and non-prime numbers up to a positive integer <Latex>$n$</Latex>, we can use an algorithm that will compute the result.

</div>
<div className="font-medium text-3xl my-2 mb-4 text-zinc-950">An Example</div>
        <div className="text-xl font-light text-zinc-800 pb-3"><Latex>Let's create this algorithm together! The first thing we must do is define what our inputs and outputs for the algorithm will be.</Latex></div>
        <ul className="list-disc list-outside space-y-4 text-justify mx-8">
  <li className="text-xl font-light text-zinc-800">
    <Latex>
      {`Since we wish to know information about all the integers leading up to a positive integer $n$, we can define our input as $n$, for some positive integer value: $n \\in \\mathbb{N}^+$`}
    </Latex>
  </li>
  <li className="text-xl font-light text-zinc-800">
    <Latex>
      Next, to define our outputs, we must think of all of the possible values for the number of prime ($p$) and non-prime numbers ($q$). Since the smallest value $n$ can be 1, and 1 is not commonly defined as a prime number, we can say that the smallest value for $p$ will be 0, and the smallest value for $q$ will be 1. Therefore the outputs will be two integers $p$, $q$ where $p ≥ 0$, $q ≥ 1$.
    </Latex>
  </li>
</ul>
        <div className="text-xl font-light text-zinc-800 pb-3"><Latex>We can write this algorithm in just about any programming language. However, for this article, we will use Python. Then, the algorithm $f$, which determines the number of prime ($p$) and non-prime ($q$) numbers up to a positive integer $n$ will be the following:

</Latex></div>

<div className="flex flex-col"><div className="text-base border p-4 pt-0 mx-8 my-1 mb-4 rounded-3xl font-light text-zinc-800 pb-3 flex flex-row justify-between items-start align-top">

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

        <div className="text-xl font-light text-zinc-800 pb-3"><Latex>This function does exactly what we want. Here’s an example:</Latex></div>
        <div className="flex flex-col"><div className="text-base border p-4 pt-0 mx-8 my-1 mb-4 rounded-3xl font-light text-zinc-800 pb-3 flex flex-row justify-between items-start align-top">

<div className="pt-4">
  <SyntaxHighlighter language="python"  style={githubGist}>
  {codeString2}
</SyntaxHighlighter>
</div><div className="flex items-center justify-end align-middle pt-5 mt-0.5 mr-2">
  <button
    onClick={handleCopy2}
    className="flex items-center space-x-1 font-light align-middle text-base text-zinc-500 hover:text-zinc-400"
  >
    {copied2 ? (
            <Check className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
    <span>Copy</span>
  </button>
</div></div>

</div>
        <div className="text-xl font-light text-zinc-800 pb-3"><Latex>Where computational complexity comes in, is when we increase n. I will write a simple time counter on this function to see how much time it will take to run for different values of n using a simple function:</Latex></div>
        <div className="flex flex-col"><div className="text-base border p-4 pt-0 mx-8 my-1 mb-4 rounded-3xl font-light text-zinc-800 pb-3 flex flex-row justify-between items-start align-top">

<div className="pt-4">
  <SyntaxHighlighter language="python"  style={githubGist}>
  {codeString3}
</SyntaxHighlighter>
</div><div className="flex items-center justify-end align-middle pt-5 mt-0.5 mr-2">
  <button
    onClick={handleCopy3}
    className="flex items-center space-x-1 font-light align-middle text-base text-zinc-500 hover:text-zinc-400"
  >
    {copied3 ? (
            <Check className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
    <span>Copy</span>
  </button>
</div></div>

</div>
        <div className="text-xl font-light text-zinc-800 pb-3"><Latex>If we run this function we will get:</Latex></div>
        <div className="flex flex-col"><div className="text-base border p-4 pt-0 mx-8 my-1 mb-4 rounded-3xl font-light text-zinc-800 pb-3 flex flex-row justify-between items-start align-top">

<div className="pt-4">
  <SyntaxHighlighter language="python"  style={githubGist}>
  {codeString4}
</SyntaxHighlighter>
</div><div className="flex items-center justify-end align-middle pt-5 mt-0.5 mr-2">
  <button
    onClick={handleCopy4}
    className="flex items-center space-x-1 font-light align-middle text-base text-zinc-500 hover:text-zinc-400"
  >
    {copied4 ? (
            <Check className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
    <span>Copy</span>
  </button>
</div></div>

</div>
        <div className="text-xl font-light text-zinc-800 pb-3"><Latex>By increasing $n$, the time taken for the function to run increases too. To see at what rate it increases, we can take a sample of values and plot them on a graph:</Latex></div>
        <img src="/A2-1.png" className="my-5" />
        <div className="text-xl font-light text-zinc-800 pb-3"><Latex>I ran this code on my computer for values from 10,000 to 150,000 as shown above. From this, we can see that as values of n increase, the time taken increases at a non-linear rate, maybe quadratic or even exponential.

</Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3"><Latex>This is an example of what computational complexity is—as the size of the input $n$, the time taken for the function to run increases. However, it is not that simple.</Latex></div>
        
<div className="font-medium text-3xl my-2 mb-4 text-zinc-950">Big O Notation</div>
        <div className="text-xl font-light text-zinc-800 pb-3">Instead of describing how the time taken to run the function will increase as <Latex>$n$</Latex> increases, we describe <span className="font-bold ">how the number of operations done by the function increases as the input size increases.</span> For this specific function, it can be simplified to <Latex>$O(n^2)$</Latex>. </div>
        <div className="text-xl font-light text-zinc-800 pb-3">Here, the capital O — sometimes referred to as <span className="font-bold">“Big O”</span>, is used to tell that what is inside the brackets expresses how the number of operations done by the function will increase with an increase in the input size.
</div>
        <div className="text-xl font-light text-zinc-800 pb-3"><Latex>As you may have noticed, our function $f$ seems to increase fairly rapidly. Given the fact that for an input of $n = 150,000$ it took the function 49 seconds. However, from the big O notation, I can extrapolate that if we doubled the size of the input to $n = 300,000$, it could take roughly 196 seconds for it to run. It may not seem like 196 seconds is too big of a time, but functions like this that involve evaluating prime numbers are used with inputs of way larger magnitudes, such as in RSA encryption, where prime numbers would have around 300 digits (2).</Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3"><Latex>If our original function had an input of $n = 1,000,000,000$ (a trillion), which has a mere 10 digits (when compared to 300-digit long primes), we can use the same extrapolation method to estimate that it would take 54 hours and 26 minutes, and 59 seconds for it to run (3). Now can you see why Big O matters?</Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3"><Latex>The image below gives you an idea of commonly used big O expressions, and how big they grow with time:</Latex></div>
        <img src="/A2-2.png" className="my-5" />
        <div className="text-xl font-light text-zinc-800 pb-3"><Latex>Some of these functions may seem arbitrary, but they are very insightful to understand the complexity of algorithms (4):

</Latex></div>
<ul className="list-disc list-outside space-y-4 text-justify mx-8">
  <li className="text-xl font-light text-zinc-800">
    <Latex>
    $O(1)$: this is a function that will take the same amount of operations independently of the input size (E.g. first item of a list of size $n$).
    </Latex>
  </li>
  <li className="text-xl font-light text-zinc-800">
    <Latex>
        $O(log n)$: this is a function that will grow its number of operations at a slower rate than the input size grows (E.g. Binary Search).
      </Latex>
  </li>
  <li className="text-xl font-light text-zinc-800">
    <Latex>
    $O(n)$: this is a function that will grow its number of operations at the same rate as the input size (E.g. Unsorted List Search).

         </Latex>
  </li>
  <li className="text-xl font-light text-zinc-800">
    <Latex>
    $O(n log n)$: this function will have to perform operations of $log n$ complexity for each input (E.g. Quicksort for most cases).

         </Latex>
  </li>
  <li className="text-xl font-light text-zinc-800">
    <Latex>
    $O(n^2)$: this function will have to perform operations of $n$ complexity for each input (E.g. the function we used earlier).
         </Latex>
  </li>
  <li className="text-xl font-light text-zinc-800">
    <Latex>
    $O(n^3)$, $O(n^4)$, $...$ : these all are similar to $O(n^2)$, they have to perform operations of $n$ complexity for each input, except these operations are of $n^2$ complexity for $O(n^3)$, of $n^3$ complexity for $O(n^4)$, and so on.
         </Latex>
  </li>
  <li className="text-xl font-light text-zinc-800">
    <Latex>
    $O(2^n)$: complexity is multiplied with each additional input (E.g. Recursive algorithms, Traveling salesman).
         </Latex>
  </li>
  <li className="text-xl font-light text-zinc-800">
    <Latex>
    $O(n!)$: complexity is multiplied with each additional input, and the rate of growth of the complexity increases with every input
         </Latex>
  </li>
</ul>
<div className="font-medium text-3xl my-2 mb-4 text-zinc-950">The Bigger Picture</div>
        <div className="text-xl font-light text-zinc-800 pb-3"><Latex>The end goal of studying computational complexity is to improve the way we write code; we must ask ourselves how we can reduce the complexity of the algorithms in our code to minimize the time taken to perform tasks.</Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3"><Latex>A great example of how computational complexity has been extremely optimized is your maps app. To give you an example, I opened Google Maps and selected a car route from Lisbon to Luxembourg, and it found the fastest path from place to place in 3.21 seconds:</Latex></div>
        <img src="/A2-3.png" className="my-5" />
        
        <div className="text-xl font-light text-zinc-800 pb-3"><Latex>How much time would you take to find this route? You’d have to consider a significant percentage of the highways in 4 different countries, all of their curves and speed limits, and all of the local traffic variations in the past, and still be certain that there couldn’t be a better option.

</Latex></div>
<div className="font-medium text-3xl my-2 mb-4 text-zinc-950">P vs NP — at the essence of problem-solving</div>
        <div className="text-xl font-light text-zinc-800 pb-3">One of the most famous unsolved problems in computer science is <span className="font-bold"> P vs NP</span>. This problem stems from the complexity of certain classes of problems.</div>
        <div className="text-xl font-light text-zinc-800 pb-3">The <span className="font-bold">P</span> class of problems is essentially every problem that can be solved in “polynomial time”. Here what this means is that the Big O notation for an algorithm that solves the problem is a polynomial, such as <Latex>$O(n^2)$</Latex> for example. Up to algorithms in polynomial time, they are considered “easy” as they are relatively fast for computers to solve. Now, of course, a problem having a solution in polynomial time by no means makes it solved, but it is generally viable to work with the majority of polynomial time algorithms with today’s computers (5).</div>
        <div className="text-xl font-light text-zinc-800 pb-3">The <span className="font-bold">NP</span> class of problems is composed of problems where their solutions can be verified in polynomial time. However, NP problems are nondeterministic, which means that no particular rule is followed to find solutions, and therefore guessing is required. An example of an NP problem is creating a school calendar for all classes, students, and teachers such that all class requirements are met by students and teachers, and no student or teacher is required to attend 2 classes at once (5).</div>
        <div className="text-xl font-light text-zinc-800 pb-3">The P vs NP problem asks us a very fundamental question in problem-solving: <span className="font-bold">can all <span className="italic">easy-to-check</span> solutions <span className="italic">be found easily?</span></span> The problem is still unsolved and is considered one of the <span className="italic">most important open problems in Computer Science</span>. As a way to encourage thinkers around the world to try and solve the problem, the Clay Mathematics Institute has set an award of 1 million dollars for whoever solves it (6).</div>

<div className="font-medium text-3xl my-2 mb-4 text-zinc-950">Sources</div>
<ol className="list-decimal list-outside space-y-4 text-justify mx-8">
  <li className="text-xl font-light text-zinc-800">
    <i>Huang, Shen.</i> “What Is Big O Notation Explained: Space and Time Complexity.” FreeCodeCamp.org, freeCodeCamp.org, 16 Jan. 2020, 
    <a 
      href="https://www.freecodecamp.org/news/big-o-notation-why-it-matters-and-why-it-doesnt-1674cfa8a23c/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="underline text-black"
    >
      www.freecodecamp.org/news/big-o-notation-why-it-matters-and-why-it-doesnt-1674cfa8a23c/
    </a>. Accessed 11 Feb. 2024.
  </li>
  <li className="text-xl font-light text-zinc-800">
    <i>“How to Generate Large Prime Numbers for RSA Algorithm.”</i> GeeksforGeeks, GeeksforGeeks, 26 June 2020, 
    <a 
      href="https://www.geeksforgeeks.org/how-to-generate-large-prime-numbers-for-rsa-algorithm/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="underline text-black"
    >
      www.geeksforgeeks.org/how-to-generate-large-prime-numbers-for-rsa-algorithm/
    </a>. Accessed 11 Feb. 2024.
  </li>
  <li className="text-xl font-light text-zinc-800">
    <i>“Seconds to HH:MM:SS Time Calculator.”</i> Inch Calculator, Inch Calculator, 11 Dec. 2023, 
    <a 
      href="https://www.inchcalculator.com/seconds-to-time-calculator/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="underline text-black"
    >
      www.inchcalculator.com/seconds-to-time-calculator/
    </a>. Accessed 11 Feb. 2024.
  </li>
  <li className="text-xl font-light text-zinc-800">
    <i>DataDaft.</i> “Algorithms Explained: Computational Complexity.” YouTube, 12 Mar. 2021, 
    <a 
      href="https://www.youtube.com/watch?v=47GRtdHOKMg&ab_channel=DataDaft" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="underline text-black"
    >
      www.youtube.com/watch?v=47GRtdHOKMg&ab_channel=DataDaft
    </a>. Accessed 11 Feb. 2024.
  </li>
  <li className="text-xl font-light text-zinc-800">
    <i>“P versus NP Problem | Complexity Theory & Algorithmic Solutions.”</i> Encyclopædia Britannica, 2024, 
    <a 
      href="https://www.britannica.com/science/P-versus-NP-problem" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="underline text-black"
    >
      www.britannica.com/science/P-versus-NP-problem
    </a>. Accessed 12 Feb. 2024.
  </li>
  <li className="text-xl font-light text-zinc-800">
    <i>“The Millennium Prize Problems.”</i> Clay Mathematics Institute, 27 May 2022, 
    <a 
      href="https://www.claymath.org/millennium-problems/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="underline text-black"
    >
      www.claymath.org/millennium-problems/
    </a>. Accessed 12 Feb. 2024.
  </li>
</ol>



        </div>
    </div>
    </div>
  )
}

export default Article2