import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faSquareJs, faReact, faNode, faSquareGit, faGithub} from '@fortawesome/free-brands-svg-icons'

const About = () => {
    return (
        <div className='about-section'> 
            <div className='about-me-section'>
                <h1>About me</h1>
                <p>Full-stack developer based in the Bay Area. Passionate about building...etc.</p>
            </div> 
            <div className='skills-section'> 
                <h1>Skills</h1> 
                <div className='skills'>
                    <div className='skill'>
                        <FontAwesomeIcon className='contact-icon' icon={faHtml5} />
                        <p>HTML5</p> 
                    </div> 
                    <div className='skill'> 
                        <FontAwesomeIcon className='contact-icon' icon={faCss3Alt} />
                        <p>CSS3</p> 
                    </div> 
                    <div className='skill'>
                        <FontAwesomeIcon className='contact-icon' icon={faSquareJs} />
                        <p>JavaScript</p> 
                    </div> 
                    <div className='skill'>
                        <FontAwesomeIcon className='contact-icon' icon={faReact} />
                        <p>React</p> 
                    </div> 
                    <div className='skill'>
                        <FontAwesomeIcon className='contact-icon' icon={faNode} />
                        <p>Node.js</p>
                    </div> 
                    <div className='skill'> 
                        <p>Express.js</p>
                    </div> 
                    <div className='skill'> 
                        <p>MongoDB</p>
                    </div> 
                    <div className='skill'>
                        <p>Jest</p>
                    </div>
                    <div className='skill'>
                        <FontAwesomeIcon className='contact-icon' icon={faSquareGit} />
                        <p>Git</p> 
                    </div> 
                    <div className='skill'>
                        <FontAwesomeIcon className='contact-icon' icon={faGithub} />
                        <p>Github</p>
                    </div> 
                </div> 
            </div> 
        </div> 
    )
}

export default About 