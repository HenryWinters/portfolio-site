import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
        <div className='contact-section'>
            <a href=''><FontAwesomeIcon className='contact-icon' icon={faGithub} /></a> 
            <a href=''><FontAwesomeIcon className='contact-icon' icon={faLinkedin} /></a> 
            <a href=''><FontAwesomeIcon className='contact-icon' icon={faEnvelope} /></a> 
        </div>
    )
}

export default Contact 