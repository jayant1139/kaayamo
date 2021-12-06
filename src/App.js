// import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';
import Combinecards from './Components/Combinecards';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Header_top from './Components/Header_top';
import Header_wb from './Components/Header_wb';
import Home from './Components/Home';
import Kaaycommunity from './Components/Kaaycommunity';

function App() {
  return (
    <>
    <Header_top/>
    <Header_wb/>
    <Home/>
    <Combinecards/>
    {/* <Kaaycommunity/> */}
    <Footer/>
    {/* <Card bg="#71AED7"/> */}
    </>
  );
}

export default App;
