import {faSlack} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import myimage from '../assets/me.jpg'
import './Home.css'
import resume from '../assets/resume.pdf'

const Name = () =>{
    return(
      <div className="text-box col-md-6">
        <h3> <FontAwesomeIcon icon={faSlack} /> Welcome to my portfolio</h3>
        <h1 className="name">Hello,I'm Poonsolaikarthick</h1>
        <h2>i am a <span className="stack">Web Developer</span></h2>
        <p>I am a Full-Stack Developer with experience
in building responsive, user-friendly web
applications. I work with both front-end and
back-end technologies to create complete,
scalable solutions. I enjoy turning ideas into real,
working products..</p>
        <button className="btn "><a href={resume} target="_blank">Check Reaume</a></button>
      </div>
    )
}
const Image = () =>{
    return(
      <div className="img-box col-md-6">
        <img src={myimage} alt="poonsolai" className=" img-thumbnail"/>
      </div>
    )
}

export const Home = () => {
  return (
    // <div className="container">
    <div className="row mt-5 pt-5 g-5 mx-4" id="Home">
        <Name />
        <Image />
    </div>
    // </div>
    
  )
}
