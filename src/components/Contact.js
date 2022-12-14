import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
        <div className='contact-section'>
            <a href='https://github.com/HenryWinters' target='_blank'><FontAwesomeIcon className='contact-icon' icon={faGithub} /></a> 
            <a href='https://www.linkedin.com/in/henry-winters-40b71b109/' target='_blank'><FontAwesomeIcon className='contact-icon' icon={faLinkedin} /></a> 
            <a href=''><FontAwesomeIcon className='contact-icon' icon={faEnvelope} /></a> 
        </div>
    )
}

export default Contact 