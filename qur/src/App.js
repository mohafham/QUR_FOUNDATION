import React from 'react';
import './App.css';
import NavigationButton from './components/NavigationButton';
import SplitSection from './components/SplitSection';
import Quote from './components/Quote';
import Cards from './components/Cards';
import Monologue from './components/Monologue';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavigationButton />
      <SplitSection />
      <Quote />
      <Cards />
      <Monologue />
      <About />
      <Footer />
    </div>
  );
}

export default App;
