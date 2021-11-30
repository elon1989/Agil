import './App.css';
import Heroes from './components/Heroes';
import Nav from './components/Nav';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, {Fragment} from 'react';

function App() {
  return (
    
    <div className="App">
      <Router>

        <Fragment>
        <Nav />
          <Routes>
            <Route path="/" element={<Heroes />} />
            <Route path="/heroes" element={<Heroes />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
