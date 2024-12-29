import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Impact from './components/Impact';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Impact />
      <Newsletter />
    </div>
  );
}

export default App;