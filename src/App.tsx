import { Routes, Route } from 'react-router-dom';
import MainLayout from './main/MainLayout';
import Articles from './main/pages/Articles';
import './globals.css';
import Home from './main/pages/Home';
import ArticleIdea from './main/pages/artcs/ArticleIdea';
import Article1 from './main/pages/artcs/Article1';
import Article2 from './main/pages/artcs/Article2';
import Article3 from './main/pages/artcs/Article3';
import GabsCalc1 from './main/pages/artcs/calc/GabsCalc1';
import GabsCalc2 from './main/pages/artcs/calc/GabsCalc2';
import GabsCalc3 from './main/pages/artcs/calc/GabsCalc3';
import GabsCalc4 from './main/pages/artcs/calc/GabsCalc4';
import TensorForBeg from './main/pages/artcs/relativity/TensorForBeg';
import TensorCalc from './main/pages/artcs/relativity/TensorCalc';
import Article4 from './main/pages/artcs/Article4';
import Notebooks from './main/pages/Notebooks';
import AboutMe from './main/pages/AboutMe';
import Contact from './main/pages/Contact';
import Projects from './main/pages/Projects';
import { Analytics } from "@vercel/analytics/react"

function App() {
  
  return (
    <main className=''>
      <Analytics/>
            <Routes>
                <Route element={<MainLayout/>}>
                    <Route path="/articles" element={<Articles/>} />
                    <Route path="/about-me" element={<AboutMe/>} />
                    <Route path="/notebooks" element={<Notebooks/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/projects" element={<Projects/>} />

                    <Route path="/home" element={<Home/>} />
                    <Route path="/" element={<Home/>} />
                    <Route path="/articles" element={<Articles/>} />
                    <Route path="/articles/article-idea" element={<ArticleIdea/>} />
                    <Route path="/articles/can-we-ever-really-know" element={<Article1/>} />
                    <Route path="/articles/the-big-o-what-is-computational-complexity" element={<Article2/>} />
                    <Route path="/articles/black-holes-and-what-we-know" element={<Article3/>} />
                    <Route path="/articles/relu-and-variants-how-to-implement-and-applications" element={<Article4/>} />
                    <Route path="/calc/1" element={<GabsCalc1/>} />
                    <Route path="/calc/2" element={<GabsCalc2/>} />
                    <Route path="/calc/3" element={<GabsCalc3/>} />
                    <Route path="/calc/4" element={<GabsCalc4/>} />
                    <Route path="/relativity/intro-to-tensors" element={<TensorForBeg/>} />
                    <Route path="/relativity/tensor-calculus" element={<TensorCalc/>} />
                </Route>
            </Routes>
    </main>
  )
}

export default App
