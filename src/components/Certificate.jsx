import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Certificate.css'
import {  faMagento } from '@fortawesome/free-brands-svg-icons'
import frontendCetificate from '../assets/Frontend certi.pdf'
import jscertificate from '../assets/js certificate.pdf'

export const Certificate = () => {

    let cert = [
        {
            name:"Frontend Development",
            plat:"Simplilearn online course",
            date:"Sep 2025",
            Certificate:frontendCetificate
        },
        {
            name:"Javascript",
            plat:"Simplilearn online course",
            date:"Oct 2025",
            Certificate:jscertificate
        }
    ]
  return (
    <div className='m-5 '>
        <h1 className=' text-center mb-5'>Certifications & Achievements</h1>
        <div className="archive">
            {
                cert.map((cert,index)=>(
                   <a href={cert.Certificate} key={index} target='_blank' > <div  className='px-5 pt-3 rounded-2'>
                        <FontAwesomeIcon icon={faMagento} style={{width:"50px",height:"50px",padding:"0px 0px 10px 0px"}} ></FontAwesomeIcon>
                        <h3>{cert.name}</h3>
                        <h6>{cert.plat}</h6>
                        <p>{cert.date}</p>
                    </div>
                    </a>
                ))
            }
        </div>
    </div>
  )
}
