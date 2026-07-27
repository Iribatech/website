import { useScrollReveal } from './hooks/useScrollReveal'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'

function App() {
  useScrollReveal()

  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}

export default App
