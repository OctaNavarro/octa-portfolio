import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import SocialLinks from './components/SocialLinks'
import Stack from './components/Stack'
import UpArrow from './components/UpArrow'

function App() {
  return (
    <div className='overflow-hidden'>
      <NavBar />
      <Home />
      <SocialLinks />
      <UpArrow />
      <About />
      <Projects />
      <Stack />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
