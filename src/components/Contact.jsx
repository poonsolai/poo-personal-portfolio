import './Contact.css'
import { faLocationDot, faMailBulk, faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedinIn, faWhatsapp, faWizardsOfTheCoast} from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { use, useState } from 'react'

const Contactme = () => {
  return (
    <div className='col-md-4'>
           
                <a href="mailto:poonsolai05@gmail.com" className='mail-box'>
                    <FontAwesomeIcon icon={faMailBulk} className='icon'></FontAwesomeIcon>
                    <div>
                        <h5>E-Mail</h5>
                        <p>poonsolai05@gmail.com</p>
                    </div>
                </a>

                <a href="https://wa.me/919043415306" className='mail-box' target='_blank'>
                    <FontAwesomeIcon icon={faPhoneAlt} className='icon'></FontAwesomeIcon>
                    <div>
                        <h5>Phone</h5>
                        <p>+91 9043415306</p>   
                    </div>
                </a>
        
                <a href="https://www.google.com/maps/place//@12.0767112,78.201733,53m/data=!3m1!1e3!4m9!1m8!3m7!1s0x3bac1169b81204b1:0x994a544114fd5e41!2sNoolahalli,+Tamil+Nadu!3b1!8m2!3d12.0717919!4d78.1838273!16s%2Fg%2F12hpfns62?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D" className='mail-box ' target='_blank'>
                    <FontAwesomeIcon icon={faLocationDot} className='icon'></FontAwesomeIcon>
                    <div>
                        <h5>Location</h5>
                        <p className='para'>Mittanoolahalli ,Dharmapuri (dt) ,TamilNadu</p>
                    </div>
                </a>
          
                <a href="https://github.com/poonsolai" className='mail-box mt-5' target='_blank'>
                    <FontAwesomeIcon icon={faGithub} className='icon'></FontAwesomeIcon>
                    <div>
                        <h5>GitHub</h5>
                        <p>@poonsolai</p>
                    </div>
                </a>

                <a href="https://www.linkedin.com/in/poonsolai-karthick-58683117" className='mail-box'  target='_blank'>
                    <FontAwesomeIcon icon={faLinkedinIn} className='icon'></FontAwesomeIcon>
                    <div>
                        <h5>LinkedIn</h5>
                        <p >@poonsolai</p>
                    </div>
                </a>
           
                <div className="work-box">
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
    // show the message box ana variable 
    const [box,setBox] = useState(false);
    // form state variable .. store the value this variable 
    const [msg,setMsg] = useState({name:"",mail:"",subject:"",message:""});
    
    // form handle function
    function Formhandle(e){
        setMsg({...msg,[e.target.name]:e.target.value})
    }
    console.log(msg);
    
    // The input send in our whatsapp
    function Sendmsg(e){
        e.preventDefault();
        let message = `Hello poonsolai ,My name :${msg.name} ,`
        +`Mail id : ${msg.mail} ,
        Subject : ${msg.subject} ,
        Message : ${msg.message}`;
        window.open(`https://wa.me/919043415306?text=${encodeURIComponent(message)}`,'_blank');
        setMsg({name:"",mail:"",subject:"",message:""});
    }
    // The input is send mail
    function Sendmail(e){
        e.preventDefault();
        window.open(`mailto:poonsolai05@gmail.com?subject=${encodeURIComponent(msg.subject)}&body=${encodeURIComponent(msg.message)}`,'_blank');
        setMsg({name:"",mail:"",subject:"",message:""});
    }


  return (
    <div className='col-md-8 form-box mt-3 rounded-2' >
        <div className="btns">
           {
            box &&  <button onClick={()=>{setBox(false);setMsg({name:"",mail:"",subject:"",message:""});}}><FontAwesomeIcon icon={faWhatsapp} /> Whatsapp</button> 
           }
           {
            !box && <button onClick={()=>{setBox(true);setMsg({name:"",mail:"",subject:"",message:""});}}><FontAwesomeIcon icon={faMailBulk} /> Mail</button>
           }
        </div>
        {   !box && 
            <form>
                <h1>Send Me a Message</h1>
                <div className="name-box">
                    <label htmlFor="name">Your Name:</label>
                    <input type="text" id='name' placeholder='poonsolaikarthick ' name='name' onChange={Formhandle} value={msg.name}/>
                </div>
                <div className="mail1-box">
                    <label htmlFor="mail">Your Email:</label>
                    <input type="mail" id='mail' placeholder='poonsolai05gmailcom' name='mail' onChange={Formhandle} value={msg.mail}/>
                </div>
                <div className="sub-box">
                    <label htmlFor="sub">Subject:</label>
                    <input type="text" id='sub' placeholder='Job Opportunity / Collaboration' name='subject' onChange={Formhandle} value={msg.subject}/>
                </div>
                <div className="area">
                    <label htmlFor="area">Message</label>
                    <textarea name="message" id="area"  placeholder='Tell me about your project or opportunity ...' onChange={Formhandle}  rows={10} value={msg.message}>

                    </textarea>
                </div>
                <button  className='btn w-100 bg-info mt-2'onClick={Sendmsg}>Send Message</button>
        </form>
        }
         {
            box && 
            <form >
                <h1>Send Me a Mail</h1>
                <div className="sub-box">
                    <label htmlFor="sub">Subject :</label>
                    <input type="text" id='sub' placeholder='Job Opportunity / Collaboration' name='subject' onChange={Formhandle} value={msg.subject}/>
                </div>
                <div className="area">
                    <label htmlFor="area">Message :</label>
                    <textarea name="message" id="area"  placeholder='Tell me about your project or opportunity ...' onChange={Formhandle} rows={10} value={msg.message}>

                    </textarea>
                </div>
                <button  className='btn w-100 bg-info mt-2'onClick={Sendmail}>Send Message</button>
        </form>
         }
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