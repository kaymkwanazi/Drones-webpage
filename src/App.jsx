import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Articles from './Articles.jsx';
import { Homepage } from './homepage.jsx';
import Footer from './footer.jsx';
import About from './about.jsx';


function App() {
  return (
    <>
    <Homepage />
    <Articles />
    <About />
    <Footer />
</>
   
  );
}

export default App
