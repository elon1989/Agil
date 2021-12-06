import './App.css';
import Heroes from './components/Heroes';
import Nav from './components/Nav';
import About from './components/About';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, {Fragment} from 'react';


function App() {
  return (
    
    <div className="App">
      <Router>

        <Fragment>
        <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/heroes" element={<Heroes />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
