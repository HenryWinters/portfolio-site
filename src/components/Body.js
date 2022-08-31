import henryTransparentBackground from '../assets/henry-transparent-background.png'

const Body = () => {
    return (
        <div className='body'> 
            <div className='body-text'>
                <h1>Hi, I'm Henry Winters</h1> 
                <h2>Full Stack Developer</h2>
            </div> 
            <div> 
                <img id='henry-img' src={henryTransparentBackground} /> 
            </div> 
        </div> 
    )
}

export default Body