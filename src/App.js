import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Carousel, { CarouselItem } from './components/Carousel'
import Project from './components/Project'

import bartTrackerImg from './assets/BART-Tracker.png' 



function App() {
  return (
    <div className="App">
      <header>
        <Navbar /> 
      </header>
      <body> 
        <Home /> 
        <About /> 
        <Carousel> 
          <CarouselItem>
            <Project 
              projectTitle='San Francisco BART Train Tracker API'
              projectDescription='App built to track upcoming BART train departures at each station throughout the Bay Area. User can select a BART station to view upcoming departures and train information. Built with Javascript and uses BART&apos;s API to pull train information and departures in real-time.'
              projectLanguages={['HTML', 'CSS', 'JavaScript', 'REST API']}
              projectImg={bartTrackerImg}
              githubLink='https://github.com/HenryWinters/BART'
              websiteLink=''
            />
          </CarouselItem>
          <CarouselItem>Project 2</CarouselItem>
          <CarouselItem>Project 3</CarouselItem>
        </Carousel> 
        <Contact />
      </body>
    </div>
  );
}

export default App;
