import henryTransparentBackground from '../assets/henry-transparent-background.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navlogo'>
                <a href=''><img id='henry-navbar-img' src={henryTransparentBackground} /></a>
                <h1><a href=''>Henry Winters</a></h1>
            </div> 
            <ul className='navlist'>
                <li><a href=''>Home</a></li>
                <li><a href=''>About</a></li> 
                <li><a href=''>Portfolio</a></li>
                <li><a href=''>Contact</a></li>  
            </ul> 
            <div className='nav-contact-icons'> 
                <a href='https://github.com/HenryWinters' target='_blank'><FontAwesomeIcon className='nav-contact-icon' icon={faGithub} /></a> 
                <a href='https://www.linkedin.com/in/henry-winters-40b71b109/' target='_blank'><FontAwesomeIcon className='nav-contact-icon' icon={faLinkedin} /></a> 
            </div> 
        </div> 
    )
}

export default Navbar