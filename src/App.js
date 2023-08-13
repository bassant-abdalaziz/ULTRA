//import components
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'


//Router 
import { BrowserRouter ,Routes, Route } from'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route path='/contact' Component={Contact}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
