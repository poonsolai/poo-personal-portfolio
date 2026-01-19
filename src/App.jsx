import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { Projects } from './components/Projects'
import { Skils } from './components/Skils'
import './App.css'
import { Certificate } from './components/Certificate'
import About from './components/About'

export default function App() {
  return (
    <>
      <Navbar/><hr />
      <Home/><hr />
      <Projects/><hr />
      <Skils/> 
      <Certificate/><hr />
      <About/>
    </>
  )
}
