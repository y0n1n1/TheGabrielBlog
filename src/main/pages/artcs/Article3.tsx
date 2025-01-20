import Latex from "react-latex-next";
import 'katex/dist/katex.min.css';

const Article3 = () => {
  return (
    <div className="items-center justify-center flex flex-row">
        <div className="w-5/6 sm:w-4/5 md:w-3/5 my-12 mt-2">
        <a href="/articles" className="font-light text-lg text-blue-500">{`<`} Articles</a>
        <div className="font-light text-xl text-zinc-600">22/12/2020</div>
        <div className="font-medium text-6xl my-2 mb-4 text-zinc-950">Black holes, and what we know</div>
        <div className="text-justify">
        <div className="text-xl font-light text-zinc-800 pb-3"><Latex>In 1916, Karl Schwarzschild created the first solution to describe a black hole using general relativity. Earlier that year, Einstein had proved the influence of gravity on light’s motion. He described the gravitational field of a point’s spherical mass. Ever since, scientists including Chandrasekhar, Penrose and Hawking have studied black holes and arrived at conclusions that reveal the beginning, the laws, and the ending of our universe. Schwarzschild’s equation (known as Schwarzschild radius) is:</Latex></div>
        <div className="text-2xl text-center w-full font-light text-zinc-800 pb-3 "><Latex>{`$R=\\frac {2GM}{c^2}$`}</Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3"><Latex>The equation gives us the exact distance from the point to where the mass of the black hole would be able to contain any electromagnetic radiation (light). It also tells us the exact point in which a dying star will become a black hole. This equation is very insightful because it accurately predicts what the event horizon will be to any singularity (point in space where the theoretical mass is infinite, proved by Penrose and Hawking in 1960).</Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3"><Latex>The event horizon is a way for us to visualize the fourth dimension, time: 
It is the most common method to explore the effects of general relativity, more specifically curvature. 
</Latex></div>
<div className="w-full items-center align-middle flex flex-col">
<img src="/A3-1.png" className="my-5 h-72" /></div>
        
        <div className="text-xl font-light text-zinc-800 pb-3"><Latex>General relativity tells us that space can be curved by mass, proved through Einstein’s geodesics. If you go for a walk around the earth, once you get back on your starting point, in your perspective, you have walked in a straight line, but for an observer who is not being affected by earth’s gravitational field, you have simply made a lap around Earth. A perspective shift in general relativity changes one’s view of an event massively. One of the ways in which we can measure this change is by placing a triangle on the surface and then measuring the real angles of the triangle. Surprisingly, on our positively curved earth, the sum of the triangle’s angle is going to be more than 180.
Remember that picture of a black hole taken in 2019? If you don't, here:
</Latex></div>
<div className="w-full items-center align-middle flex flex-col">
<img src="/A3-2.png" className="my-5 h-72" /></div>
        <div className="text-xl font-light text-zinc-800 pb-3"><Latex>If black holes are able to attract all matter on their gravitational field, then how did they take the picture? For all the photons to be reaching earth almost perfectly around the black hole, they must have been influenced by it. What happened was that the event horizon in which the black hole is able to attract is the area with {`$ds^2<0$`}, where all mass is going to be absorbed by the black hole, while the exact point in which we can assign it to divide what is attracted vs what isn’t is when the {`$ds^2=0$`}. This means that any light passing at a point which is {`$ds^2>0$`} will escape. Now even though there is a point in which light can pass, this doesn’t justify the massive amount of photons being emitted from the black hole area. This crazy amount of light is the result (photon emission) of the collision between matter and antimatter being cancelled by each other. In simpler terms, the black hole’s event horizon accumulates mass which barely escapes from the black hole, a mix of matter and antimatter, that meet each other and produce this massive energy. This process is called Hawking radiation.
        </Latex></div>
        <div className="text-xl font-light text-zinc-800 pb-3"><Latex>Recent research made by Reinhard Genzel and Andrea Ghez (winners of the 2020 Nobel prize) shows that our galaxy has a massive black hole it’s centre. Black holes truly are, some of the craziest phenomena in our galaxy, and if you ever meet one, well... let’s hope you don't!
        </Latex></div>
            <div className="font-medium text-3xl my-2 mb-4 text-zinc-950">Sources</div>
            <div className="text-xl font-light text-zinc-800 pb-3"><Latex>Bassett, Bruce, and Ralph Edney. Introducing Relativity: a Graphic Guide. Icon Books, 2014.</Latex></div>
            <div className="text-xl font-light text-zinc-800 pb-3"><Latex>Hawkings, Steven. A Brief History of Time. Bantam Books, 1988. </Latex></div>
        </div>
    </div>
    </div>
  )
}

export default Article3