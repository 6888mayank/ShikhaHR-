import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Services from './components/Services'
import Workflow from './components/Workflow'
import WhyChooseUs from './components/WhyChooseUs'
import Industries from './components/Industries'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white antialiased overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Workflow />
        <WhyChooseUs />
        <Industries />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
