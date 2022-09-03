import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Projects from './components/Projects'

function App() {
  return (
    <div className="App">
      <header>
        <Navbar /> 
      </header>
      <body> 
        <Home /> 
        <About /> 
        <Projects /> 
        <Contact />
      </body>
    </div>
  );
}

export default App;
