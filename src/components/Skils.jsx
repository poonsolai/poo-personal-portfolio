import {faDartLang,faSquareSteam } from '@fortawesome/free-brands-svg-icons'
import './Skils.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { useState } from 'react'


export const Skils = () => {

    //state management variables
    const [front,setFront] = useState(true);
    const [back,setBack] = useState(false);
    const [design,setDesign] = useState(false);
    const [tools,setTools] = useState(false);
    const [others,setOthers] = useState(false);

    function Front(){
        setFront(true);
        setBack(false);
        setDesign(false);
        setTools(false);
        setOthers(false);
    }
    function Back(){
        setFront(false);
        setBack(true);
        setDesign(false);
        setTools(false);
        setOthers(false);
    }
    function Design(){
        setFront(false);
        setBack(false);
        setDesign(true);
        setTools(false);
        setOthers(false);
    }
    function Tools(){
        setFront(false);
        setBack(false);
        setDesign(false);
        setTools(true);
        setOthers(false);
    }
    function Other(){
        setFront(false);
        setBack(false);
        setDesign(false);
        setTools(false);
        setOthers(true);
    }


  return (
    <div id='Skils'>
        <h1 className=' text-center'>Skills & Technologies</h1>
        <p className=' text-center'>Technologies I've learned and practiced through coursework, online tutorials, and personal projects</p>
        <div className="text-center container mt-5" >
            <button className="btn px-3 ms-1" onClick={Front} style={{backgroundColor:front?"orange":"",color:front?"white":""}}><FontAwesomeIcon icon={faDartLang} ></FontAwesomeIcon>Frontend</button>
            <button className="btn px-3 ms-1" onClick={Back} style={{backgroundColor:back?"orange":"",color:back?"white":""}}><FontAwesomeIcon icon={faDartLang} ></FontAwesomeIcon>Backend</button>
            <button className="btn px-3 ms-1" onClick={Design} style={{backgroundColor:design?"orange":"",color:design?"white":""}}><FontAwesomeIcon icon={faDartLang} ></FontAwesomeIcon>Design</button>
            <button className="btn px-3 ms-1" onClick={Tools} style={{backgroundColor:tools?"orange":"",color:tools?"white":""}}><FontAwesomeIcon icon={faDartLang}  ></FontAwesomeIcon>Tools</button>
            <button className="btn px-3 ms-1" onClick={Other} style={{backgroundColor:others?"orange":"",color:others?"white":""}}><FontAwesomeIcon icon={faDartLang} ></FontAwesomeIcon>Others</button>
        </div>
        {/* Frontend */}

        {
            front && 
            <div className="skilbox  container-fulid mx-5" >
            <div className="head">
                <div className="icon">
                    <FontAwesomeIcon icon={faSquareSteam} style={{width:"50px",height:"50px"}}></FontAwesomeIcon>
                </div>
                <div id="box">
                    <h3>Frontend Development</h3>
                    <p>Skill proficiency levels</p>
                </div>
            </div>
            <div>
                <div className='mt-2'>
                    <div className="box">
                        <h5 className="Tname">HTML/CSS</h5> <h4 className="percentage">90%</h4>
                    </div>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" style={{width:"90%"}}></div>
                    </div>   
                </div>
                <div className='mt-2'>
                    <div className="box">
                        <h5 className="Tname">JAVASCRIPT</h5> <h4 className="percentage">85%</h4>
                    </div>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" style={{width:"85%"}}></div>
                    </div>   
                </div>
                <div className='mt-2'>
                    <div className="box">
                        <h5 className="Tname">BOOTSTRAP</h5> <h4 className="percentage">90%</h4>
                    </div>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" style={{width:"90%"}}></div>
                    </div>   
                </div>
                <div className='mt-2'>
                    <div className="box">
                        <h5 className="Tname">RESPONSIVE DESIGN</h5> <h4 className="percentage">95%</h4>
                    </div>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" style={{width:"95%"}}></div>
                    </div>   
                </div>
                <div className='mt-2'>
                    <div className="box">
                        <h4 className="Tname">REACT</h4> <h4 className="percentage">80%</h4>
                    </div>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" style={{width:"80%"}}></div>
                    </div>   
                </div>
            </div>
            </div>
        }

        {/* Backend  */}
        
        {
            back && 
            <div className="skilbox  container-fulid mx-5" >
            <div className="head">
                <div className="icon">
                    <FontAwesomeIcon icon={faSquareSteam} style={{width:"50px",height:"50px"}}></FontAwesomeIcon>
                </div>
                <div id="box">
                    <h3>Backend Development</h3>
                    <p>Skill proficiency levels</p>
                </div>
            </div>
            <div>
                <div className='mt-2'>
                    <div className="box">
                        <h5 className="Tname">NODE.JS</h5> <h4 className="percentage">20%</h4>
                    </div>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary" style={{width:"20%"}}></div>
                    </div>   
                </div>
                <div className='mt-2'>
                    <div className="box">
                        <h5 className="Tname">EXPRESS.JS</h5> <h4 className="percentage">0%</h4>
                    </div>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary" style={{width:"0%"}}></div>
                    </div>   
                </div>
                <div className='mt-2'>
                    <div className="box">
                        <h4 className="Tname">PYTHON</h4> <h4 className="percentage">10%</h4>
                    </div>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary" style={{width:"10%"}}></div>
                    </div>   
                </div>
                <div className='mt-2'>
                    <div className="box">
                        <h5 className="Tname">MONGO DB</h5> <h4 className="percentage">90%</h4>
                    </div>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary" style={{width:"90%"}}></div>
                    </div>   
                </div>
                <div className='mt-2'>
                    <div className="box">
                        <h5 className="Tname">MYSQL</h5> <h4 className="percentage">0%</h4>
                    </div>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary" style={{width:"0%"}}></div>
                    </div>   
                </div>
                <div className='mt-2'>
                    <div className="box">
                        <h4 className="Tname">REST API</h4> <h4 className="percentage">0%</h4>
                    </div>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary" style={{width:"0%"}}></div>
                    </div>   
                </div>
            </div>
            </div>

        }

        {/* Design */}

        {
            design && 
             <div className="skilbox  container-fulid mx-5" >
            <div className="head">
                <div className="icon">
                    <FontAwesomeIcon icon={faSquareSteam} style={{width:"50px",height:"50px"}}></FontAwesomeIcon>
                </div>
                <div id="box">
                    <h3>Design Development</h3>
                    <p>Skill proficiency levels</p>
                </div>
            </div>
            <div>
                <div className='mt-2'>
                    <div className="box">
                        <h5 className="Tname">FIGMA</h5> <h4 className="percentage">5%</h4>
                    </div>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{width:"5%"}}></div>
                    </div>   
                </div>
                <div className='mt-2'>
                    <div className="box">
                        <h5 className="Tname">UI/UX</h5> <h4 className="percentage">0%</h4>
                    </div>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{width:"0%"}}></div>
                    </div>   
                </div>
                <div className='mt-2'>
                    <div className="box">
                        <h5 className="Tname">PROTYOING</h5> <h4 className="percentage">0%</h4>
                    </div>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{width:"0%"}}></div>
                    </div>   
                </div>
                <div className='mt-2'>
                    <div className="box">
                        <h5 className="Tname">WIREFRAMING</h5> <h4 className="percentage">0%</h4>
                    </div>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{width:"0%"}}></div>
                    </div>   
                </div>
                <div className='mt-2'>
                    <div className="box">
                        <h4 className="Tname">COLOR THEORY</h4> <h4 className="percentage">50%</h4>
                    </div>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{width:"50%"}}></div>
                    </div>   
                </div>
            </div>
            </div>

        }

        {/* Tools */}

        {
            tools && 
            <div className="skilbox  container-fulid mx-5" >
            <div className="head">
                <div className="icon">
                    <FontAwesomeIcon icon={faSquareSteam} style={{width:"50px",height:"50px"}}></FontAwesomeIcon>
                </div>
                <div id="box">
                    <h3>Tools Development</h3>
                    <p>Skill proficiency levels</p>
                </div>
            </div>
            <div>
                <div className='mt-2'>
                    <div className="box">
                        <h5 className="Tname">GIT/GITHUB</h5> <h4 className="percentage">80%</h4>
                    </div>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" style={{width:"80%"}}></div>
                    </div>   
                </div>
                <div className='mt-2'>
                    <div className="box">
                        <h5 className="Tname">VSCODE</h5> <h4 className="percentage">95%</h4>
                    </div>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" style={{width:"95%"}}></div>
                    </div>   
                </div>
                <div className='mt-2'>
                    <div className="box">
                        <h5 className="Tname">NPM</h5> <h4 className="percentage">60%</h4>
                    </div>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" style={{width:"60%"}}></div>
                    </div>   
                </div>
                <div className='mt-2'>
                    <div className="box">
                        <h5 className="Tname">CHROME DEVTOOLS</h5> <h4 className="percentage">80%</h4>
                    </div>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" style={{width:"80%"}}></div>
                    </div>   
                </div>
                <div className='mt-2'>
                    <div className="box">
                        <h4 className="Tname">POSTMAN</h4> <h4 className="percentage">10%</h4>
                    </div>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" style={{width:"10%"}}></div>
                    </div>   
                </div>
            </div>
            </div>

        }

        {/* Others */}

        {
            others && 
            <div className="skilbox  container-fulid mx-5" >
            <div className="head">
                <div className="icon">
                    <FontAwesomeIcon icon={faSquareSteam} style={{width:"50px",height:"50px"}}></FontAwesomeIcon>
                </div>
                <div id="box">
                    <h3>Other Skils</h3>
                    <p>Skill proficiency levels</p>
                </div>
            </div>
            <div>
                <div className='mt-2'>
                    <div className="box">
                        <h5 className="Tname">GOOD COMMUNUCATION</h5> <h4 className="percentage">50%</h4>
                    </div>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated " style={{width:"50%",backgroundColor:"tomato"}}> Tamil English Korea</div>
                    </div>   
                </div>
                <div className='mt-2'>
                    <div className="box">
                        <h5 className="Tname">DATA ENTRY</h5> <h4 className="percentage">85%</h4>
                    </div>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated " style={{width:"85%",backgroundColor:"tomato"}}></div>
                    </div>   
                </div>
                <div className='mt-2'>
                    <div className="box">
                        <h5 className="Tname">MS WORD</h5> <h4 className="percentage">75%</h4>
                    </div>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated " style={{width:"75%",backgroundColor:"tomato"}}></div>
                    </div>   
                </div>
                <div className='mt-2'>
                    <div className="box">
                        <h5 className="Tname">MS EXCEL</h5> <h4 className="percentage">75%</h4>
                    </div>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated " style={{width:"75%",backgroundColor:"tomato"}}></div>
                    </div>   
                </div>
            </div>
            </div>

        }

    </div>
  )
}
