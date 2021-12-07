import './App.css';
import Heroes from './components/Heroes';
import Nav from './components/Nav';
import About from './components/About';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, {Fragment} from 'react';
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import { getGame } from './components/GameSlice'


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGame());
  }, [dispatch]);

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
