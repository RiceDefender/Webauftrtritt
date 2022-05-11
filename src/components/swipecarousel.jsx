

import './swipecarousel.css';
// import Swiper styles
  // core version + navigation, pagination modules:
  import { React, useState, useEffect } from "react";
  import {  Lazy, Thumbs, FreeMode, Parallax, Autoplay, Navigation, Pagination } from 'swiper';
  import { Swiper,  SwiperSlide } from "swiper/react";
  
  // import Swiper and modules styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import "swiper/css/free-mode";
  import "swiper/css/thumbs";
  import "swiper/css/lazy";
  import './../App.css';



  
  //value 274

  const imglinks2 = [
    "https://cdn.discordapp.com/attachments/468719321087082516/958324017759158272/illust_86471087_20220330_001255.png",
    "https://cdn.discordapp.com/attachments/468719321087082516/958660921859911751/Screenshot_20220329-234257_Chrome.jpg",
    "https://cdn.discordapp.com/attachments/468719321087082516/959727920698490880/FFslXyaVEAI3SDw.jpg",
    "https://cdn.discordapp.com/attachments/468719321087082516/959727668327227432/helena_azur_lane_drawn_by_vayneeeee__sample-a7b519db084f698c65900c8b168ef36c.jpg",
    "https://c.tenor.com/i4oPEC59tYYAAAAC/helena-azur-lane.gif",
    "https://images3.alphacoders.com/109/thumb-1920-1091863.png",
    "https://cdn.discordapp.com/attachments/468719321087082516/960564310055190639/unknown.png",
    "https://pbs.twimg.com/media/FGuoTlkUcAAyE23?format=jpg&name=large",
    "https://pbs.twimg.com/media/FDaedXoVQAQh5KF?format=jpg&name=4096x4096",
    "https://cdn.discordapp.com/attachments/768906805765603329/971393011126763520/20210727_101124.jpg",
    "https://pbs.twimg.com/media/E5xoHU9VgAURf22?format=jpg&name=large"
    
  ];

  const imglinks = [
    "https://cdn.discordapp.com/attachments/468719321087082516/958324017759158272/illust_86471087_20220330_001255.png",
    "https://images3.alphacoders.com/109/thumb-1920-1091863.png",
    "https://images.alphacoders.com/109/thumb-1920-1093323.jpg",
    "https://images5.alphacoders.com/106/thumb-1920-1068697.jpg",
    "https://images5.alphacoders.com/111/thumb-1920-1111545.png",
    "https://images2.alphacoders.com/104/thumb-1920-1041382.png",
    "https://images4.alphacoders.com/111/thumb-1920-1113348.jpg",
    "https://images8.alphacoders.com/108/thumb-1920-1080360.png",
    "https://images2.alphacoders.com/101/thumb-1920-1014589.jpg",
    "https://images7.alphacoders.com/111/thumb-1920-1113102.jpg",
    "https://cdn.discordapp.com/attachments/768906805765603329/971393011126763520/20210727_101124.jpg",
    "https://images4.alphacoders.com/111/thumb-1920-1110460.png",
  ];
    //https://images3.alphacoders.com/109/thumb-1920-1091863.png
    //https://cdn.discordapp.com/attachments/768906805765603329/971393011126763520/20210727_101124.jpg
  const pagination = {
    clickable: true,
    //Create a new div element
  };
  /* Useless code
  const paginationDiv ={
    position: "absolute",
    bottom: "0",
    width: "100%",
    height: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    color: "white",
    fontSize: "1.5em",
    fontWeight: "bold",
    textAlign: "center",
    zIndex: "1"
  }; Useless code */

  
  


const Swipecarousel = () => {
   const [thumbsSwiper, setThumbsSwiper] = useState('');
   const [dimensions, setDimensions] = useState({ height: window.innerHeight, width: window.innerWidth });

  useEffect(() => {
    async function handleResize(){
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }
    window.addEventListener('resize', handleResize)
  });


  const amount = parseInt(dimensions.width/225);
  return (
<>
<div className="swipecarousel">
  <h1>A</h1>
<Swiper
        parallax={true} //Black sides so no visibility yet
        slidesPerView={"auto"} //NO CLUE WHAT IT DOES
        autoHeight={true}
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        lazy={false} //Lazy has gives phone lags when rotating
        pagination={pagination}
        navigation={true}
        modules={[Lazy, Thumbs, Parallax, Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className="swiper-image" src={imglinks[0]} alt="-"/></SwiperSlide>
        <SwiperSlide><img className="swiper-image" src={imglinks[2]} alt="-"/></SwiperSlide>
        <SwiperSlide><img className="swiper-image" src={imglinks[3]} alt="-"/></SwiperSlide>
        <SwiperSlide><img className="swiper-image" src={imglinks[5]} alt="-"/></SwiperSlide>
        <SwiperSlide><img className="swiper-image" src={imglinks[6]} alt="-"/></SwiperSlide>
        <SwiperSlide><img className="swiper-image" src={imglinks[7]} alt="-"/></SwiperSlide>
        <SwiperSlide><img className="swiper-image" src={imglinks[8]} alt="-"/></SwiperSlide>
        <SwiperSlide><img className="swiper-image" src={imglinks[9]} alt="-"/></SwiperSlide>
        <SwiperSlide><img className="swiper-image" src={imglinks[4]} alt="-"/></SwiperSlide>
        <SwiperSlide><img className="swiper-image" src={imglinks[1]} alt="-"/></SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={0}
        slidesPerView={amount}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide className="swiper-slide2"><img className="swiper-image2" src={imglinks[0]} alt="-"/></SwiperSlide>
        <SwiperSlide className="swiper-slide2"><img className="swiper-image2" src={imglinks[2]} alt="-"/></SwiperSlide>
        <SwiperSlide className="swiper-slide2"><img className="swiper-image2" src={imglinks[3]} alt="-"/></SwiperSlide>
        <SwiperSlide className="swiper-slide2"><img className="swiper-image2" src={imglinks[5]} alt="-"/></SwiperSlide>
        <SwiperSlide className="swiper-slide2"><img className="swiper-image2" src={imglinks[6]} alt="-"/></SwiperSlide>
        <SwiperSlide className="swiper-slide2"><img className="swiper-image2" src={imglinks[7]} alt="-"/></SwiperSlide>
        <SwiperSlide className="swiper-slide2"><img className="swiper-image2" src={imglinks[8]} alt="-"/></SwiperSlide>
        <SwiperSlide className="swiper-slide2"><img className="swiper-image2" src={imglinks[9]} alt="-"/></SwiperSlide>
        <SwiperSlide className="swiper-slide2"><img className="swiper-image2" src={imglinks[4]} alt="-"/></SwiperSlide>
        <SwiperSlide className="swiper-slide2"><img className="swiper-image2" src={imglinks[1]} alt="-"/></SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}

export default Swipecarousel