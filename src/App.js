import './App.css';
import { ImageChanger } from './imageChanger.js'
import React from 'react';
import Navbar from './components/navbar.jsx';
import ReactDOM from 'react-dom';
import Swipecarousel from './components/swipecarousel';
import Youtubeembed from './components/youtubeembed';


function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Swipecarousel/>
      {/*<ImageChanger/>*/}

      <Youtubeembed/>
      <h1>Scrollbar</h1>
      <h1>Scrollbar</h1>
      <h1>Scrollbar</h1>
      <h1>Scrollbar</h1>
      <h1>Scrollbar</h1>
      <h1>Scrollbar</h1>
      <h1>Scrollbar</h1>
      <h1>Scrollbar</h1>
      <h1>Scrollbar</h1>
      <h1>Scrollbar</h1>
      <h1>Scrollbar</h1>
      <h1>Scrollbar</h1>
      <h1>Scrollbar</h1>
      <h1>Scrollbar</h1>
      <h1>Scrollbar</h1>
      <h1>Scrollbar</h1>

      
    </div>

  );
}

/* Useless code
function PictureLoader(props) {
  return React.createElement("div", null,React.createElement(ImageChanger, null))
}*/

export default App;
