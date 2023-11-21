// App.js

import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage'; // Make sure to adjust the path based on your project structure

const App = () => {
  return (
    <div>
      {/* Include the Navbar component */}
      <Navbar />

      {/* Include the HomePage component */}
      <HomePage />

      {/* Your other components/content can go here */}
      <h1>Welcome to My React App</h1>
    </div>
  );
};

export default App;
