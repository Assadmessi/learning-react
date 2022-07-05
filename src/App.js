import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/footer';
import Home from './Views/Home';
import About from './Views/About';


function App() {
  

  return (
    <div>   
      <Router>
        <Header/>

        <div className="p-3 ">
        <Routes>
          <Route path='/' element={<Home/>}>
          </Route>
          <Route path='/about' element={<About/>}>
          </Route>
        </Routes>
        </div>
        
        <Footer/>
      </Router>

      
    </div>
  );
}

export default App;
