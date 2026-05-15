import Hero from '../components/Hero'
import WhatIDo from '../components/WhatIDo'
import About from '../components/About'
import Experience from '../components/Experience'
import SelectedWork from '../components/SelectedWork'
import Skills from '../components/Skills'
import BlogPreview from '../components/BlogPreview'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatIDo />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Experience />
      <div className="section-divider" />
      <SelectedWork />
      <Skills />
      <BlogPreview />
      <div className="section-divider" />
      <Contact />
    </main>
  )
}
