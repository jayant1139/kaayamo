// import logo from './logo.svg';
import './App.css';
import { Route, Routes,Navigate } from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Inspiration from './Components/Inspiration';
import Programs from './Components/Programs';
import Coursecatalog from './Components/Coursecatalog';
import Footer from './Components/Footer';
// import Header from './Components/Header';
import Header_top from './Components/Header_top';
import Header_wb from './Components/Header_wb';
import Signup from './Components/Forms/Signup';

const App=(history)=> {
//   console.log(history)
// const getColor=(curr)=>{}


  return (
    <>
     <Header_top/>
     <Routes>
       <Route path="/"/>
     </Routes>
     <Header_wb/>
    {/* <Home/> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />}  />
      <Route path="/Inspiration" element={<Inspiration />} />
      <Route path="/Programs" element={<Programs />} />
      <Route path="/Coursecatalog" element={<Coursecatalog />} />
      <Route path="*" element={<Home />} />
    </Routes>
  {/* <Home/> */}
    
    {/* <Signup/> */}
    <Footer/>
    
    </>
  );
}

export default App;
