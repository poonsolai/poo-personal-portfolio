import './Navbar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faSadCry, fsbox} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faSlack} from '@fortawesome/free-brands-svg-icons'
export const Navbar = () => {
  return (
    
    <div >
        <nav className="navbar navbar-expand-sm fixed-top" id='nav'>
            <div className="container-fluid">
                <a className="navbar-brand" style={{color:"orange"}}>Portfolio</a>
                <button className="navbar-toggler btntoggle"  data-bs-toggle="collapse" data-bs-target="#collapsibleNavId">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link " href="#Home" ><FontAwesomeIcon icon={faSlack}  style={{color:"#38BDF8" , fontSize:"15px"}}></FontAwesomeIcon> Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Projects"><FontAwesomeIcon icon={faSlack} style={{color:"#38BDF8", fontSize:"15px"}}></FontAwesomeIcon> Projects</a>
                        </li>
                         <li className="nav-item">
                            <a className="nav-link " href="#Skils" ><FontAwesomeIcon icon={faSlack} style={{color:"#38BDF8", fontSize:"15px"}}></FontAwesomeIcon> Skils</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#About"><FontAwesomeIcon icon={faSlack} style={{color:"#38BDF8", fontSize:"15px"}}></FontAwesomeIcon> About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Contacts"><FontAwesomeIcon icon={faSlack} style={{color:"#38BDF8", fontSize:"15px"}}></FontAwesomeIcon> Contacts</a>
                        </li>
                       
                    </ul>
                    
                </div>
            </div>
        </nav>
        
    </div>

    
  )
}
