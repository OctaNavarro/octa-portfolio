import About from './components/About'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import SocialLinks from './components/SocialLinks'

function App() {
  return (
    <div className='snap-y snap-always snap-mandatory overflow-hidden'>
      <NavBar />
      <Home />
      <SocialLinks />
      <About />
      <Projects />
    </div>
  )
}

export default App
