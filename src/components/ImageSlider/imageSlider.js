import React from "react";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import './imageSlider.css';

const ImageSlider = () => {
    const urls=['https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/1/28/abaf8631-0d32-4b86-ad60-88aac23c46031611812328108-Desktop-Banner.jpg',
        'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/1/27/595caa08-b21c-4e16-8b82-6b1270131b3f1611761082364-Watches_Desk_Banner.jpg',
        'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/1/27/ef8aae50-9e8b-47bd-97bd-65d5b17504101611761082308-Suits---Blazers_dk.jpg',
        'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/1/27/709867f2-c01d-4256-b775-353231f9c9d21611761082292-Sangria_Desk_Banner.jpg'];
    const freeShip= 'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/9/18/76b2760c-e6b6-46b9-8156-0b3f1660a6f11600435378009-FS-DK.jpg';
  return (
    <div className="imageSlider">
        <img className='freeShipping' src={freeShip} alt="free-shipping" />
        <div  className="slider">
        <Slide autoplay={true} duration={5000} arrows={false} indicators={true} >
          {
              urls.map((e,index) =>{
                return <img key={index} style={{width: "100%"}} src={e} alt="banner" />;
              })
          }
        </Slide>
        </div>
    </div>
  );
};

export default ImageSlider;