import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { About } from './About';
import { Contact } from './Contact';
import { Notice } from './Notice';
import { Link, Route,Routes } from 'react-router';
import { Home } from './Home';
import { Forms } from './Forms';
import Formiks from './Formiks';

function App() {
  return (
    <div>
      <h1>JAMSHEDPUR</h1>
      <p>Jamshedpur is the steel city.</p>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/notice">Notice</Link></li>
        <li><Link to="/forms">Form</Link></li>
        <li><Link to="/formiks">Formiks</Link></li>
      </ul>
      <Routes>
        <Route path=" " element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/notice" element={ <Notice/> } />
        <Route path="/forms" element={ <Forms/> } />
        <Route path="/formiks" element={ <Formiks/> } />
        <Route path="/*" element={ <Home/> } />
      </Routes>
      {/* <Header></Header>
      <Footer></Footer> */}
    </div>
    
  );
}

export default App;
