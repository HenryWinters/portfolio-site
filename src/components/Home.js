import henryTransparentBackground from '../assets/henry-transparent-background.png'

const Home = () => {
    return (
        <div className='body'> 
            <div className='body-text'>
                <h1>Hi, I'm Henry Winters</h1> 
                <h2>Full Stack Developer</h2>
                <a href=''>See my work</a> 
            </div> 
            <div> 
                <img id='henry-img' src={henryTransparentBackground} /> 
            </div> 
        </div> 
    )
}

export default Home