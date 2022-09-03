import bartTracker from '../assets/BART-Tracker.png' 

const Projects = () => {
    return (
        <div className='project-section'>
            <h1>Projects</h1> 
            <div className='bart-project'> 
                <h1>San Francisco BART Train Tracker</h1> 
                <img src={bartTracker} /> 
            </div> 
        </div> 
    )
}

export default Projects