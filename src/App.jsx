import About from './components/About'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import SocialLinks from './components/SocialLinks'
import UpArrow from './components/UpArrow'

function App() {
  return (
    <div className='snap-y snap-always snap-mandatory overflow-x-hidden'>
      <NavBar />
      <Home />
      <SocialLinks />
      <UpArrow />
      <About />
      <Projects />
    </div>
  )
}

export default App
