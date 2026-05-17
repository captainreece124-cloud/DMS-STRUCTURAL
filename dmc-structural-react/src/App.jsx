import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BeforeAfterSlider from './components/BeforeAfterSlider'
import Services from './components/Services'
import About from './components/About'
import Team from './components/Team'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <div className="hero-bg">
          <Hero />
          <BeforeAfterSlider />
        </div>
        <Services />
        <About />
        <Team />
        <Process />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
