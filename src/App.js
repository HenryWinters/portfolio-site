import './App.css';
import Navbar from './components/Navbar'
import Body from './components/Body'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <header>
        <Navbar /> 
      </header>
      <body> 
        <Body /> 
        <Contact />
      </body>
    </div>
  );
}

export default App;
