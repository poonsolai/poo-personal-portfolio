import './About.css'



function Aboutme1(){
    return (
        <div className='col-md-4 a1' >
            <div>
                <h1>2027</h1>
                <p>Graduate</p>
            </div>
            <div>
                <h1>10+</h1>
                <p>Projects</p>
            </div>
            <div>
                <h1>6</h1>
                <p>Tech Stack</p>
            </div>
            <div>
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
        <div className='col-md-8  a1' >

        </div>
    )
}


function About() {
  return (
    <div id='About' className='m-5'>
        <h1 className=' text-center'>About Me</h1>
        <p className=' text-center'>Fresh graduate passionate about technology and eager to start my professional journey</p>
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