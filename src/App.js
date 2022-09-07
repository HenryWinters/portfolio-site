import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Carousel, { CarouselItem, BartTracker } from './components/Projects'

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
            <BartTracker /> 
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
