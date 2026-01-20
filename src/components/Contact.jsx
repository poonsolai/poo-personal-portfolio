import './Contact.css'
import {  faHillAvalanche, faLocationDot, faMailBulk, faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedinIn, faSquareUpwork, faWizardsOfTheCoast} from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Contactme = () => {
  return (
    <div className='col-md-4'>
            <div className='mail-box'>
                <FontAwesomeIcon icon={faMailBulk} className='icon'></FontAwesomeIcon>
                <div>
                    <h5>E-Mail</h5>
                    <p>poonsolai05@gmail.com</p>
                </div>
            </div>
            <div className='mail-box'>
                <FontAwesomeIcon icon={faPhoneAlt} className='icon'></FontAwesomeIcon>
                <div>
                    <h5>Phone</h5>
                    <p>+91 9043415306</p>
                </div>
            </div>
        
            <div className='mail-box '>
                <FontAwesomeIcon icon={faLocationDot} className='icon'></FontAwesomeIcon>
                <div>
                    <h5>Location</h5>
                    <p>Mittanoolahalli ,Dharmapuri (dt) ,TamilNadu</p>
                </div>
            </div>
        
            <div className='mail-box mt-5'>
                <FontAwesomeIcon icon={faGithub} className='icon'></FontAwesomeIcon>
                <div>
                    <h5>GitHub</h5>
                    <a href="" style={{textDecoration:"none",color:"white"}}>@poonsolai</a>
                </div>
            </div>
        
            <div className='mail-box'>
                <FontAwesomeIcon icon={faLinkedinIn} className='icon'></FontAwesomeIcon>
                <div>
                    <h5>LinkedIn</h5>
                    <a href="" style={{textDecoration:"none",color:"white"}}>@poonsolai</a>
                </div>
            </div>
        
            <div className='work-box'>
                <FontAwesomeIcon icon={faWizardsOfTheCoast} className='icon'></FontAwesomeIcon>
                <div>
                    <h3 className=' text-center'>Available for Work</h3>
                    <p className=' text-center'>Open to full-time positions and internship opportunities</p>
                </div>
            </div>
        
    </div>
  )
}

const Contactform = () => {
  return (
    <div className='col-md-8'>
      
    </div>
  )
}


function Contact() {
  return (
    <div id='Contacts' className='m-5'>
        <div className="container-fulid ">
            <div className="row">
                <Contactme />
                <Contactform />
            </div>
        </div>
    </div>
  )
}

export default Contact