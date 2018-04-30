import React, { Component } from 'react';
import MainNav from './components/NavBar';
import Landing from './components/Landing';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

class App extends Component {

  render() {
    return (
      <div className="h-100">
        <MainNav/>
        <Landing />
        <About />
        <Services />
        <Contact />
      </div>
    );
  }
}

export default App;
