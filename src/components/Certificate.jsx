import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Certificate.css'
import {  faMagento } from '@fortawesome/free-brands-svg-icons'
import frontendCetificate from '../assets/Frontend certi.pdf'

export const Certificate = () => {

    let cert = [
        {
            name:"Frontend Development",
            plat:"simplilearn online course",
            date:"sep 2025"
        }
    ]
  return (
    <div className='m-5 '>
        <h1 className=' text-center mb-5'>Certifications & Achievements</h1>
        <div className="archive">
            {
                cert.map((cert,index)=>(
                   <a href={frontendCetificate} key={index} target='_blank' > <div  className='px-5 pt-3 rounded-2'>
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
