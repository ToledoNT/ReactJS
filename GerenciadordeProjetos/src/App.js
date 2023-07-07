import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Company from './components/Company';
import Projects from './components/pages/Projects';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={
          <Container customClass="min-height">
            <Home /> 
          </Container>
        } />
        <Route exact path="/contact" element={
          <Container customClass="min-height"> 
            <Contact />
          </Container>
        } />
        <Route exact path="/newproject" element={
          <Container customClass="min-height"> 
            <NewProject />
          </Container>
        } />
        <Route exact path="/company" element={
          <Container customClass="min-height"> 
            <Company /> 
          </Container>
        } />
          <Route exact path="/Projects" element={
          <Container customClass="min-height"> 
            <Projects /> 
          </Container>
        } />


      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
