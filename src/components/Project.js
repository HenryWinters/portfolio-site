const Project = ({ projectTitle, projectDescription, projectLanguages, projectImg, githubLink, websiteLink }) => {
    return (
        <div className='project-container'> 
            <div className='project'> 
                <h1>{projectTitle}</h1> 
                <div className='projectDescription'>
                    <p>{projectDescription}</p>
                </div> 
                <ul className='projectLanguages'>
                    {projectLanguages.map(lang => <li>{lang}</li>)}
                </ul> 
                <img src={projectImg} /> 
                <div className='projectLinks'>
                    <a href={githubLink} target='_blank'>Github</a> 
                    <a href={websiteLink} target='_blank'>Website</a> 
                </div> 
            </div> 
        </div> 
    )
}

export default Project 