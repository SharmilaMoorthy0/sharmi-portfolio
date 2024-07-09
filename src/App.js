import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Skill from './components/Skill';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
    
        <Routes>
          <Route path={'/'} element={<Home/>}/> 
          <Route path={'/About'} element={<About/>}/> 
          <Route path={'/skills'} element={<Skill/>}/> 
          <Route path={'/Projects'} element={<Projects/>}/> 
          <Route path={'/Contact'} element={<Contact/>}/> 
        </Routes>
     
    </BrowserRouter>
    
        
    
        
      
  )
    
    
  
}

export default App;
