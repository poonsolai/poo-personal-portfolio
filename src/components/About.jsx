import {   faXbox } from '@fortawesome/free-brands-svg-icons'
import {   faBrain, faCompass, faIcons, faLaptopCode, faLayerGroup, faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import './About.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


function Aboutme1(){
    return (
        <div className='col-md-4 ' >
            <div className='about-box' style={{borderLeft:"5px solid blue"}}>
                <FontAwesomeIcon icon={faUserGraduate} style={{width:"30px",height:"30px"}}></FontAwesomeIcon>
                <h1>2027</h1>
                <p>Graduate</p>
            </div>
            <div className='about-box' style={{borderLeft:"5px solid red"}}>
                <FontAwesomeIcon icon={faLaptopCode} style={{width:"30px",height:"30px"}}></FontAwesomeIcon>
                <h1>10+</h1>
                <p>Projects</p>
            </div>
            <div className='about-box' style={{borderLeft:"5px solid pink"}}>
                <FontAwesomeIcon icon={faLayerGroup} style={{width:"30px",height:"30px"}}></FontAwesomeIcon>
                <h1>6</h1>
                <p>Tech Stack</p>
            </div>
            <div className='about-box-final'>
                <h4> <FontAwesomeIcon icon={faIcons}></FontAwesomeIcon> Interests</h4>
                <ul>
                    <li>Web Development</li>
                    <li>Mobile Apps</li>
                    <li>UI/UX Design</li>
                    <li>Continuous Learning</li>
                    <li>AI & ML</li>
                </ul>
            </div>
        </div>
    )
}
function Aboutme2(){
    return (
        <div className='col-md-8  ' >
            <div className='about-box-final pb-1' style={{borderLeft:"5px solid blue"}}>
                <FontAwesomeIcon icon={faXbox} style={{width:"30px",height:"30px"}}></FontAwesomeIcon>
                <h3>Introduction</h3>
                <p>I am a recent B.Tech Information Technology graduate with a strong interest in building modern, user-friendly web applications. My journey in technology started during college, where I discovered my passion for transforming ideas into functional and visually appealing digital solutions through code.</p>
            </div>
            <div className='about-box-final pb-1' style={{borderLeft:"5px solid red"}}>
                <FontAwesomeIcon icon={faUserGraduate} style={{width:"30px",height:"30px"}}></FontAwesomeIcon>
                <h3>Education</h3>
                <ul>
                    <li>Bachelor of Technology - Information Technology (B.Tech IT),</li>
                    <li>Shreenivasa Engineering College,</li>
                    <li>Graduated: 2027 | CGPA: 8.5 / 10</li>
                    <br />
                    <li>Higher Secondary School </li>
                    <li>completed (2021 - 2023)</li>
                </ul>
            </div>
            <div className='about-box-final pb-1' style={{borderLeft:"5px solid pink"}}>
                <FontAwesomeIcon icon={faCompass} style={{width:"30px",height:"30px"}}></FontAwesomeIcon>
                <h3>What I'm Looking For</h3>
                <p>I am actively seeking opportunities as a Junior Frontend Developer / Web Developer, where I can apply my technical skills, learn from experienced professionals, and grow in a collaborative environment. I am particularly interested in roles that involve React, modern JavaScript, responsive design, and Ul-focused development.</p>
            </div>
            <div className='about-box-final pb-1'>
                <h4> <FontAwesomeIcon icon={faBrain}></FontAwesomeIcon> My Approach</h4>
                <ul>
                    <li>Fast learner with strong problem-solving abilities</li>
                    <li>Detail-oriented and focused on writing clean, maintainable code</li>
                    <li>Passionate about building responsive and user-friendly interfaces</li>
                    <li>Team-oriented and eager to collaborate on real-world projects</li>
                    <li>AI & MLContinuously learning and staying updated with modern web technologies</li>
                </ul>
            </div>
        </div>

    )
}


function About() {
  return (
    <div id='About' className='m-5'>
        <h1 className=' text-center'>About Me</h1>
        <p className=' text-center'>Fresh graduate passionate about technology and eager to start my professional journey as a Web Developer.</p>
        <div className="container-fulid">
            <div className="row">
                <Aboutme1 />
                <Aboutme2 />
            </div>
        </div>
    </div>
  )
}

export default About