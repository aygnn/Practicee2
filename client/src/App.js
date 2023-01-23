
import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './Footer/Footer';
import Navbarr from './Navbar/Navbarr';

function App() {
  return (
    <div className="App">
    <Navbarr/>
    <Outlet/>
    <Footer/>
    </div>
  );
}

export default App;
