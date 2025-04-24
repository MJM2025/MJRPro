import React from 'react';
import Navbar from './components/Navbar';
import FetchData from './components/FetchData';

function App() {
  return (
    <div className="min-h-screen bg-mjrpro-light">
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-mjrpro-dark">Welcome to MJRPro</h1>
        <FetchData />
      </div>
    </div>
  );
}

export default App;
