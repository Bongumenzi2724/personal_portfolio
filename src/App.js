import React from 'react';
import { Header,Skills,About,Work,Testimonial,Footer, } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About/>
    <Skills/>
    <Work/>
    <Testimonial/>
    <Footer/>
  </div>
);
export default App;
