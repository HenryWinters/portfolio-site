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
                        <i className="devicon-html5-plain colored"></i>
                        <p>HTML5</p> 
                    </div> 
                    <div className='skill'> 
                        <i className="devicon-css3-plain colored"></i>
                        <p>CSS3</p> 
                    </div> 
                    <div className='skill'>
                        <i className="devicon-javascript-plain colored"></i>
                        <p>JavaScript</p> 
                    </div> 
                    <div className='skill'>
                        <i className="devicon-react-original colored"></i>
                        <p>React</p> 
                    </div> 
                    <div className='skill'>
                        <i className="devicon-nodejs-plain colored"></i>
                        <p>Node.js</p>
                    </div> 
                    <div className='skill'> 
                        <i className="devicon-express-original colored"></i>
                        <p>Express.js</p>
                    </div> 
                    <div className='skill'>
                        <i className="devicon-mongodb-plain colored"></i>
                        <p>MongoDB</p>
                    </div> 
                    <div className='skill'>
                        <img id='jest-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
                        <p>Jest</p>
                    </div>
                    <div className='skill'>
                        <i className="devicon-git-plain colored"></i>
                        <p>Git</p> 
                    </div> 
                    <div className='skill'>
                        <i className="devicon-github-original colored"></i>
                        <p>Github</p>
                    </div>
                </div> 
            </div> 
        </div> 
    )
}

export default About 