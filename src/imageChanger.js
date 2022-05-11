import React from 'react';

const images = [{
  src: 'https://i.redd.it/ob848yddnzo81.jpg',
  alt: 'Z23'
}, {
  src: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1',
  alt: 'IA Vocaloid2'
}, {
  src: 'https://cdn.discordapp.com/attachments/468719321087082516/958324017759158272/illust_86471087_20220330_001255.png',
  alt: 'IA 3'
}, {
  src: 'https://i.redd.it/pzpaxcn620b61.jpg',
  alt: 'GANYU'
}];

const getNextIndex = (maxIndex, currentIndex) => {
  var value = currentIndex;

  if (currentIndex >= maxIndex) {
    return 0;
  }

  return currentIndex + 1;
};

export class ImageChanger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageIndex: 0
    };
    setInterval(() => {
      this.setState((state, props) => {
        return {
          imageIndex: getNextIndex(images.length - 1, this.state.imageIndex)
        };
      });
    }, 2000);
  }
  /*
  
  componentDidMount() {
      this.intervalId = setInterval(() => {
          this.setState((state, props) => {
                  return {
                      imageIndex: getNextIndex(this.props.images.length - 1, this - state.imageIndex)
                  }
              });
          }, this.props.interval);
      }
  
  componentWillUnmount() {
      clearInterval(this.intervalId);
  }
  
  */


  render() {
    //return(
    //    <h2>{this.state.myText}</h2>
    //);
    const currentImage = images[this.state.imageIndex]; //const currentImage = this.props.images[this.state.imageIndex];

    return /*#__PURE__*/React.createElement("figure", null, /*#__PURE__*/React.createElement("img", {
      src: currentImage.src,
      alt: currentImage.alt,
      width: "25%"
    }), /*#__PURE__*/React.createElement("figcaption", null, currentImage.alt));
  }

}