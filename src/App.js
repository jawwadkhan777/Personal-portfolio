import './App.scss';
import {Routes, Route} from 'react-router-dom'
import Profile from './containers/Profile' 
import About from './containers/About' 
import Resume from './containers/Resume';
import Contact from './containers/Contact' 
import Navbar from './componenets/Navbar';


function App() {
  
  return (
    <div className="App">

      <Navbar/>

      <div className='App_main-page-content'>
      <Routes>
        <Route index path='/' element={<Profile/>}/>
        <Route path='/about' element={<About/>}/>
        {/* <Route path='/skills' element={<Skills/>}/> */}
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/contact' element={<Contact/>}/>
        {/* <Route to='*'/> */}
      </Routes>
      </div>
      
    </div>
  );
}

export default App;
