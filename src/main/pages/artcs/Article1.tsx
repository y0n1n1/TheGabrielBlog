import Latex from "react-latex-next";
import 'katex/dist/katex.min.css';

const Article1 = () => {
  return (
    <div className="items-center justify-center flex flex-row ">
        <div className="w-5/6 sm:w-4/5 md:w-2/3 lg:w-3/5 my-12 mt-2">
        <a href="/articles" className="font-light text-lg text-blue-500">{`<`} Articles</a>
        <div className="font-light text-xl text-zinc-600">16/06/2024</div>
        <div className="font-medium text-6xl my-2 mb-4 text-zinc-950">Can we ever really know?</div>
        <div className="text-justify">
        <div className="text-xl font-light text-zinc-800 pb-3 text-justify">An exploration of diagnostic testing through the lenses of probability and exploring the real-life scenario of COVID-19
        </div>
        <div className="font-medium text-3xl my-2 mb-4 text-zinc-950">Introduction</div>
        <div className="text-xl font-light text-zinc-800 pb-3 text-justify">My goal for this exploration will be to study how variables involved in diagnostic testing influence test results, and to gain an understanding of how to utilize mathematical methods to comprehend diagnostic test results by applying my findings to a real-life scenario. These key variables include disease prevalence, test accuracy, and the probabilities of True Positives, False Positives, True Negatives, and False Negatives.</div>
        <div className="text-xl font-light text-zinc-800 pb-3 text-justify">I first learned about Bayes’ Theorem when I saw a YouTube video by a channel that I subscribe to, Veritasium (created by Derek Muller, a scientist with a PhD in Physics Communication), where he explained the scenario of a hypothetical disease that afflicts only 0.1% of the population (Veritasium, 2017). I found the video interesting as what I first thought was that this very small prevalence might lead one to assume that a positive test result would strongly indicate the presence of the disease. However that was not the case, and the accuracy of the test plays a crucial role in interpreting its results.</div>
        <div className="text-xl font-light text-zinc-800 pb-3 text-justify">In the video he explained the case of a diagnostic test with a reported accuracy of 99%, meaning for every test it does, there is only a 1% chance it's a false positive or false negative. Intuitively, one might expect that a positive test result would correspond to a high probability of actually having the disease. </div>
        <div className="text-xl font-light text-zinc-800 pb-3 ">Surprisingly, this is not the case. Even with such high accuracy, the interpretation of test results given the prevalence of 0.1% in the population and the accuracy of 99%, one positive test only produces a 9.02% likelihood of having the disease (rounded to two decimal places).
        </div>
        <div className="text-xl font-light text-zinc-800 pb-3 text-justify">One thing to note is that throughout this investigation, when I interpret a numerical result, I will be rounding it to two decimal places, as any more decimal places wouldn’t provide any better of an interpretation of a result, and any less could start to limit the interpretation of a result.</div>
        <img src="/A1-1.png" className="my-5" />
        <div className="text-xl font-light text-zinc-800 pb-3 ">When I saw that there is only a 9.02% likelihood of the result being a True Positive in the Veritasium video, I was very surprised. I couldn’t understand how a very accurate test could provide a very inaccurate result. To better understand this phenomenon, I created a tree diagram of this scenario, which gave me the same results (Figure 1). </div>
        <div className="text-xl font-light text-zinc-800 pb-3 text-justify">In the field of medical diagnostics, the accuracy of tests and the prevalence of diseases are very important factors. In this scenario, a disease is relatively rare in the population, affecting only a small fraction of individuals. Meanwhile, diagnostic tests, while generally reliable, are not infallible and can produce both false positives and false negatives.
        </div>
        <div className="text-xl font-light text-zinc-800 pb-3 text-justify">Bayes' theorem provides a framework for studying cases like this. By incorporating prior knowledge about the prevalence of the disease and the accuracy of the test, Bayes' theorem enables us to calculate the probability of having the disease given a positive test result. This allows for a more informed interpretation of test outcomes, and can further inform possible disease carriers before they have to make important decisions like starting treatment or taking medicine.</div>
        <div className="text-xl font-light text-zinc-800 pb-3 text-justify">It is important to note that in my investigation, we are assuming that the diseases under consideration are entirely random occurrences within the theoretical population. This assumption implies that individuals are equally susceptible to the disease, regardless of genetic predispositions or other factors. We will also assume that diagnostic tests utilize display random error, with false positives and false negatives occurring unpredictably, and not based on any systematic errors.</div>
        
        <div className="font-medium text-3xl my-2 mb-4 text-zinc-950">Probabilities</div>
        <div className="text-xl font-light text-zinc-800 pb-3 text-justify"><Latex>	In the context of this exploration, A will mean the event of having a specific disease, and B will mean the event of testing positive. Both of these have their respective probabilities $P(A)$ and $P(B)$. These probabilities are fluctuating variables, as for example the probability of having a disease fluctuates according to how many people actually have the disease.</Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>Online, two versions of Bayes’ theorem surface. The first is as follows (Hayes, Adam., 2023): </Latex></div>
        <div className="text-2xl text-center w-full font-light text-zinc-800 pb-3 "><Latex>{`$P(A|B)=\\frac{P(B|A)P(A)}{P(B)}$`}</Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>And the other is:</Latex></div>
        <div className="text-2xl text-center w-full font-light text-zinc-800 pb-3 "><Latex>{`$P(A|B)=\\frac{P(B|A)P(A)}{P(A)P(B|A)+P(A')P(B|A')}$`}</Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>I noticed that for me to actually do anything using this theorem, I would have to be certain that these two formulas are different forms of writing the same theorem. So I tried to prove that they are equivalent. The only difference is the denominator. In the second formula $P(B)$ is not used, and instead other variables. So I first tried to see if I could write $P(B)$ in terms of these other variables:
        </Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>-  $P(B)$ given $A$ has happened is $P(B|A)$ (definition)
        </Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>-  $P(A\cup A’)=1$ (complement rule)
        </Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- Therefore $P(B)$ is the same as $P(B)$ given that $A$ has or hasn’t happened        </Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- $P(B) = P(A)P(B|A)+P(A’)P(B|A’) $</Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>This shows that both versions of the theorem are equivalent. Following this, I decided to attempt to prove bayes’ theorem. This is important as it will solidify my understanding of why bayes’ theorem works. I started trying to prove it with no results, I kept looking at the basic probability laws that I could remember. Then I decided to try something different. I wrote down the 3 variables used in Bayes theorem: $P(A|B)$, $P(B|A)$, and $P(A)$. Naturally, I included $P(B)$ as well as that is found in the other version of the theorem. Then I tried to write equations that would combine all of these variables, and very quickly I reached the proof of the theorem:</Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- The probability of two events $A$ and $B$ happening, $P(A \cap B)$, is the probability of $A$, $P(A)$, times the probability of $B$ given that $A$ has occurred, $P(B|A)$. This is trivial as since $A$ must happen in $P(A∩B)$, so naturally $P(B|A)$ becomes the other probability required for $P(A\cap B)$ to happen. 
        </Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- Due to symmetry, we can write: $P(A\cap B) = P(A)P(B|A)$ and $P(B\cap A) = P(B)P(A|B)$. 
        </Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- Since the intersection operation is commutative, $P(A\cap B) = P(B\cap A)$
        </Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- $P(A)P(B|A) = P(B)P(A|B)$</Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- {`$P(A|B)=\\frac{P(B|A)P(A)}{P(B)}$`}</Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>The next thought that arose in my investigation was to think again of how all of this applied to my original problem, to see if I could understand it now. 
        </Latex></div>
        <img src="/A1-2.png" className="my-5" />
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>I noticed that the probability of having a 0.1% prevalence disease after testing positive in a test with 99% accuracy was indeed sensibly only 9%. Because if we consider the two possibilities: either you have the disease or you don't, then you belong in one of these two groups. Lets take for example a representative sample of 10,000 people. In it, the 10 people (0.1%) who have the disease would most likely be tested correctly as positive, but 100 of the 9,990 people who do not have the disease would be tested as false positives. This therefore only provides you a 9.02% chance of having the disease (see figure 2). I found this by simply dividing 10 by 110. This calculation is only an approximation, as only an infinite sample size would give the exact probability.
        </Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>After having finally understood bayes’ theorem, I thought to myself, if I really do test positive for a disease like this, what should I do to verify if I have the disease? Since this scenario only provides me a 9% certainty of having the disease, how can I increase this certainty?
        </Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>The most straightforward answer would be to take another test. To try this hypothesis, I decided to study the conditional probability of some event $A$ given that two independent events $B1$ and $B2$ happened, where in $Bn$, $B$ means that a test resulted in a positive, and $n$ is the test, since two tests would be done. In it’s essence, my goal was now to find bayes’ theorem for two independent events.
        </Latex></div>
        <div className="font-medium text-3xl my-2 mb-4 text-zinc-950">Graphing Bayes’ Theorem</div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>Bayes theorem as we’ve seen it so far has been written as: 
        </Latex></div>
        <div className="text-2xl text-center w-full font-light text-zinc-800 pb-3 "><Latex>{`$P(A|B)=\\frac{P(B|A)P(A)}{P(A)P(B|A)+P(A')P(B|A')}$`}</Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>	However when using this form I noticed that it was not very practical for a series of reasons. First, it involves four individual variables ($P(B|A)$, $P(A)$, $P(B|A’)$, $P(A’)$), but I noticed that $P(B|A’)$ and $P(A’)$ can be written in terms of the other two variables. Because of this, I modified Bayes’ Theorem so that it is written solely in terms of $P(B|A)$ and $P(A)$:
        </Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>$P(A)P(B|A) + P(A')P(B|A')$</Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 ">$=P(A)P(B|A) + (1 − P(A))(1 − P(B|A))= 2P(A)P(B|A) + 1 −( P(A)+P(B|A))$<Latex>a</Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 ">$= 2P(A)P(B|A) + 1 − P(A)-P(B|A)$<Latex>a</Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>{`$P(A|B)=\\frac{P(B|A)P(A)}{2P(A)P(B|A) + 1 − P(A)-P(B|A)}$`}</Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>With this form of Bayes’ Theorem, I noticed that it seemed very similar to a standard two variable function, so I decided to analyse the theorem as if it were a function. For practicality, I decided to assign x and y coordinates:  $P(A)=x$, $P(B|A)=y$, and the function would just be called $P=P(A|B)$
        </Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>{`$P= \\frac{xy}{2xy+1-x-y}=\\frac{xy}{xy+(1-x)(1-y)}$`}</Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>However, I also noticed that I needed to be careful with how I analysed this function, as $x$, $y$, $P$ are all probability values, meaning they can only range from zero to one. First, I plotted this function onto a 3-dimensional graph plotter:
        </Latex></div>
        <img src="/A1-3.png" className="my-5" />
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>After plotting the function, I noticed a series of things:
        </Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- The function contains a diagonally increasing non-linear shape
        </Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- It intersects the $x$ and $y$ axis in all points from 0-1
        </Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- It intersects the two vertical lines going up from $z=0$ to $z=1$ at $(1,0)$ and $(0,1)$ in all points
        </Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- It also intersects two more lines going from {`$(1,0)>(1,1)$`} and {`$(0,1)>(1,1)$`} in all points
        </Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- At any point in the graph, the graph seems to be increasing, as in that any increase in $x$ or $y$ increases the value of $P$.
        </Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- The graph makes sense with my understanding of Bayes’ Theorem: the higher the disease’s prevalence, the more confident you are that a Positive Result is a True Positive. Also, the higher the test’s accuracy, the more confident you are that a Positive Result is a True Positive.
        </Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- I also noticed that this function is symmetric along the plane $x=y$, {`$0<z<1$`}. This is evident as the in the function, switching $x$ with $y$ makes no difference as they appear in the same way in the function.
        </Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>This is an interesting finding. Because the two variables have an equal role in the function, this tells us that both the prevalence of a disease has as much of a role in the likelihood of a positive result being a true positive as the actual accuracy of the test.
        </Latex></div>
        <div className="font-medium text-3xl my-2 mb-4 text-zinc-950">Finding Bayes’ Theorem for two independent events</div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>To find the probability of having the disease $A$ after performing two equal and independent tests $B1$ and $B2$, will be equivalent to determining the probability of having the disease given you did test $B$ twice, if we assume that it is independent from the previous test. We will denote the probability of having disease $A$ after two independent tests of equal accuracies as $P(A|(B_1\cap B_2))$. Then using bayes’ theorem:
        </Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- {`$P(A|(B_1\\cap B_2)) =\\frac {P(A)P((B_1 \\cap B_2)|A)}{P(B_1\\cap B_2)}$`}</Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- Then we can find each of these factors individually:</Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- {`$P((B_1\\cap B_2)|A)=P(B_1|A)P(B_2|A)$`} (the tests are independent)</Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- {`$P(B_1|A)P(B_2|A)=P(B_1|A)^2$`} (the tests have equal accuracies)
        </Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- {`$P(B_1\\cap B_2)=P(B_1)P(B_2)$`} (the tests are independent)</Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- {`$P(B_1)P(B_2)=P(B_1)^2$`} (the tests have equal probabilities)</Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- Therefore: {`$P(A|(B_1\\cap B_2)) =\\frac {P(A)P(B_1|A)^2}{P(B_1)^2}=P(A|B_1)\\frac {P(B_1|A)}{P(B_1)}$`}</Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>The moment I reached this point, I instantly recognized a pattern. Since we added one more test, the equation kept $P(A)$ the same, while squaring the two other components. So then I decided to create a conjecture for the formula for conditional probability for any number of independent events of equal probability:</Latex></div>
        <div className="text-2xl text-center w-full font-light text-zinc-800 pb-3 "><Latex>{`$P(A|B_1\\cap B_2\\cap ... \\cap B_n)=P(A|\\bigcap^{n}_{k=1} B_k)=\\frac {P(A)P(B_1|A)^n}{P(B_1)^n}$`}</Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>Here, I created my own notation for the intersection of n events, denoting it similarly to the sigma notation. In it, $n$ represents the number of events, and $k$ is the list of every integer from 1 to that number.</Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>	At the time when I arrived at this conjecture, I was not yet confident with my final formula, and so I tried a different method. I did this method for finding the probability of A given two independent tests quite randomly, not knowing what to expect:
        </Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- {`$P(C_1|B_2)=\\frac {P(A|B_1)P(B_2|C_1)}{P(B_2)}$`} here, I realized that to get the probability after a second test $B_2$, I could just use bayes’ formula, but with a new disease prevalence $C_1$, where $P(C1)=P(A|B_1)$.
        </Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- I quickly noticed that: $P(B_2|C_1)=P(B_2|A)=P(B_1|A)$ since both tests have equal accuracies</Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- And again that: $P(B_2)=P(B_1)$.</Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- Then, the equation becomes: {`$P(C_1|B_2)=\\frac {P(A|B_1)P(B_1|A)}{P(B_1)}$`}
        </Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- Here, the only difference from Bayes’ Theorem is that $P(A)$ is substituted by $P(A|B_1)$. Substituting it into the equation gives:</Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- {`$P(C_1|B_2)=\\frac { ( \\frac {P(A)P(B_1|A)}{P(B_1)}) P(B_1|A)}{P(B_1)} =\\frac {P(A)P(B_1|A)P(B_1|A)}{P(B_1)P(B_1)}=\\frac {P(A)P(B_1|A)^2}{P(B_1)^2}$`}</Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>Having arrived at the same answer through two methods and notations for the probability, I now felt confident that this equation was true. Following this, I decided to attempt proving my conjecture. Since my conjecture involves a set of equations that works for any positive integer $n$, I tried to follow a proof by induction method:
        </Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- Proof for n=1 refer to previous proof of Bayes' Theorem
        </Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- {`$P(A|B_1\\cap B_2)=\\frac {P(A)P(B_1|A)^2}{P(B_1)^2}$`}</Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- Proof for $n=k+1$:</Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- {`$P(A|\\bigcap^{k}_{j=1}B_j)=\\frac {P(A)P(B_1|A)^k}{P(B_1)^k}$`}</Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- {`$P([A|\\bigcap^{k}_{j=1}B_j]|B_{k+1})=\\frac {\\frac {P(A)P(B_1|A)^k}{P(B_1)^k}P(B_{k+1}|A)}{P(B_{k+1})}$`} and since all tests have equal probabilities and accuracies:
        </Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- {`$=\\frac {\\frac {P(A)P(B_1|A)^k}{P(B_1)^k}P(B_{1}|A)}{P(B_{1})}= \\frac {{P(A)P(B_1|A)^k}P(B_{1}|A)}{P(B_{1})P(B_1)^k}= \\frac {{P(A)P(B_1|A)^{k+1}}}{P(B_1)^{k+1}}$`}</Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- {`$P(A|\\bigcap^{n}_{k=1} B_k)=\\frac {P(A)P(B_1|A)^n}{P(B_1)^n}$`}</Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>And with this, I had completed the proof. But then, I noticed that the next step was to see this formula in action, and actually apply it.</Latex></div>
        <div className="font-medium text-3xl my-2 mb-4 text-zinc-950">Interpreting the sequence of repeated positive test results as a geometric sequence and as a geometric series</div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- </Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- </Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- </Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- </Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- </Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- </Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- </Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- </Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- </Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- </Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- </Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- </Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3 "><Latex>- </Latex></div>
            <div className="font-medium text-3xl my-2 mb-4 text-zinc-950">SubTitle</div>

        </div>
    </div>
    </div>
  )
}

export default Article1