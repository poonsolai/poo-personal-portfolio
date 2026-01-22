import './Projects.css'
import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
// import img4 from '../assets/4.png'
import img5 from '../assets/5.png'
import img6 from '../assets/6.png'
import img7 from '../assets/7.png'
import img8 from '../assets/8.png'
import img9 from '../assets/9.png'
import img10 from '../assets/10.png'
import img11 from '../assets/11.png'
import img12 from '../assets/12.png'
import img13 from '../assets/13.png'
import img14 from '../assets/14.png'
import img15 from '../assets/15.png'
import img16 from '../assets/16.png'
import img17 from '../assets/17.png'
import img18 from '../assets/18.png'

import project from './projects.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCodepen,  faSquareGooglePlus } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

export const Imagebar = ()=>{
  return(
    <div id="carouselId" className="carousel slide p-5" data-bs-ride="carousel">
      <ol className="carousel-indicators">
        <li
          data-bs-target="#carouselId"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="First slide"
        ></li>
        <li
          data-bs-target="#carouselId"
          data-bs-slide-to="1"
          aria-label="Second slide"
        ></li>
        <li
          data-bs-target="#carouselId"
          data-bs-slide-to="2"
          aria-label="Third slide"
        ></li>
        <li
          data-bs-target="#carouselId"
          data-bs-slide-to="3"
          aria-label="Fourth slide"
        ></li>
        <li
          data-bs-target="#carouselId"
          data-bs-slide-to="4"
          aria-label="Fivth slide"
        ></li>
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <img
            src={img1}
            className="w-100 "
            alt="First slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <h3>Code Learn Signup UI</h3>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={img8}
            className="w-100 "
            alt="Second slide"
          />
          
        </div>
        <div className="carousel-item">
          <img
            src={img3}
            className="w-100 "
            alt="Third slide"
          />
         
        </div>
         <div className="carousel-item">
          <img
            src={img6}
            className="w-100 "
            alt="Fourth slide"
          />
         
        </div>
         <div className="carousel-item">
          <img
            src={img5}
            className="w-100 "
            alt="Fivth slide"
          />
         
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselId"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon " aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselId"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    
  )
}

function Cartimage(){
  
  let image = {
    img1:img1,
    img2:img2,
    img3:img3,
    // img4:img4,
    img5:img5,
    img6:img6,
    img7:img7,
    img8:img8,
    img9:img9,
    img10:img10,
    img11:img11,
    img12:img12,
    img13:img13,
    img14:img14,
    img15:img15,
    img16:img16,
    img17:img17,
    img18:img18
  }

  const [val,setVal] = useState(4);
  const [see,setSee] = useState(true);

  // handle or load the all project cart
  function handleResize(){
    setVal(project.length);
    setSee(false);
  }

  // handle to normal size of project cart
  function handlenormalsize(){
    setVal(4);
    setSee(true);
  }


  return(
    <div className="container-fulid m-5" id='container'>
      {
        see && <span className=' bg-gradient  px-4 py-2 rounded-1 ' onClick={handleResize}>View all</span>
      }
      {
        !see && <span className=' bg-gradient px-4 py-2 rounded-1' onClick={handlenormalsize}>Hide </span>
      }
      
        <div className='row gx-3 gy-4 mt-2'>
        
          {
            project.slice(0,val).map((pro)=>(
              <div className='col-xxl-3 col-md-4 col-sm-6 ' key={pro.id}>
              <div className="card " id='card'>
                <img className="card-img-top" src={image[pro.img]} alt="Title" />
                <div className="card-body">
                  <h4 className="card-title">{pro.title.length>20?(pro.title.slice(0,18)+'...'):pro.title}</h4>
                  <p className="card-text">{pro.description.length>70?pro.description.slice(0,90)+"...":pro.description}</p>
                  <ul className='taglist p-0'>
                    {
                      pro.tech.map((tag,index)=>(<li key={index}>{tag.toLocaleLowerCase()}</li>))
                    }
                  </ul>
                  <div className="btns">
                    <a className='btn btn1 px-4' href={pro.live} target='_blank'><FontAwesomeIcon icon={ faSquareGooglePlus}></FontAwesomeIcon> Live</a>
                    <a className='btn btn2 px-4' href={pro.code} target='_blank'><FontAwesomeIcon icon={ faCodepen}></FontAwesomeIcon> Code</a>
                  </div>
                </div>
              </div>
              </div>
            ))
          }
        
        </div>
    </div>
    
  )
}


export const Projects = () => {
  return (
    <div id='Projects'>
        <h1 className=' text-center'>Fatured Projects</h1>
        <p className=' text-center '>Academic and personal projects demonstrating my learning journey and practical skils.</p>
        <Imagebar/>
        <Cartimage />
    </div>
  )
}
