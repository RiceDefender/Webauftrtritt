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

      <div class="tenor-gif-embed" data-postid="21458880" data-share-method="host" data-aspect-ratio="1.33333" data-width="100%"><a href="https://tenor.com/view/nice-gif-21458880">Nice GIF</a>from <a href="https://tenor.com/search/nice-gifs">Nice GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
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
