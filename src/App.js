import React from "react";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'
import './styles.css';
import './footer.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { NavLink } from "react-router-dom";

import { Container } from 'react-bootstrap'
import {faCoffee} from '@fortawesome/free-solid-svg-icons'

import landscape1 from './img/993 copyed1 copy r300 usm 111-3.jpg';
import landscape2 from './img/xxxedited Pan1 from iphoto coole 3x Rainbow Glow.jpg';
import landscape3 from './img/25-31 topazeded2 Topaz Restyle 3.jpg';
import landscape4 from './img/autumn.jpg';
import landscape5 from './img/CNV00017-00023ed2fxGlencar2.jpg';

import SwanMainBest from './img/DSCF3347topazed copy2x rough (1).jpg';
import SwanMain from './img/2006_1010SwansYoungDe0008 2.jpg';
import SwanMain2 from './img/2006_1010SwansYoungDe0031 30x20in r300usm.jpg';
import SwanMain3 from './img/2006_1010SwansYoungDe0063.JPG';

import SwanSub1 from './img/DSC00139MedjSony20x.jpg';
import SwanSub2 from './img/DSC00140MedjSony20x.jpg';
import SwanSub3 from './img/DSC00141MedjSony20x.jpg';
import SwanSub4 from './img/DSC01505 (1).JPG';
import SwanSub5 from './img/DSC01512.JPG';
import SwanSub6 from './img/DSC01897.jpg';
import SwanSub7 from './img/DSC01900 (1).jpg';
import SwanSub8 from './img/DSC01901.jpg';
import SwanSub9 from './img/DSC01903 (1).jpg';
import SwanSub10 from './img/DSC01904 (1).jpg';
import SwanSub11 from './img/DSC01904.jpg';
import SwanSub12 from './img/DSC01905 (1).jpg';
import SwanSub13 from './img/DSC01906 (1).jpg';



import Footer from './footer'
import Navbar from "./components/navbar";
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';

const IMAGES =
  [
     {
      src: SwanSub3,
      thumbnail: SwanSub3,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "Swan (Peter McGuinness - Petermcguinnessphotography.com)"
    },

    {
      src: SwanSub5,
      thumbnail: SwanSub5,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "Swan (Peter McGuinness - Petermcguinnessphotography.com)"
    },

    {
      src: SwanSub6,
      thumbnail: SwanSub6,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "Swan (Peter McGuinness - Petermcguinnessphotography.com)"
    }, 
      {
      src: SwanSub7,
      thumbnail: SwanSub7,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "Swan (Peter McGuinness - Petermcguinnessphotography.com)"
    },



    {
      src: SwanSub9,
      thumbnail: SwanSub9,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "Swan (Peter McGuinness - Petermcguinnessphotography.com)"
    },

    {
      src: SwanSub11,
      thumbnail: SwanSub11,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "Swan (Peter McGuinness - Petermcguinnessphotography.com)"
    },

    {
      src: SwanSub12,
      thumbnail: SwanSub12,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "Swan (Peter McGuinness - Petermcguinnessphotography.com)"
    },

    {
      src: SwanSub13,
      thumbnail: SwanSub13,
      thumbnailWidth: 320,
      thumbnailHeight: 412,
      caption: "Swan (Peter McGuinness - Petermcguinnessphotography.com)"
    },


  ]



class App extends React.Component {



  render() {
    return (

      <div className="mainDiv">

        <Navbar />


        <div class="container">
          <h1 className="h1-container">Landscapes</h1>
      <hr
        style={{
          background: 'brown',
          color: 'brown',
          borderColor: 'brown',
          width: '50%',
          margin: 'auto'
        }}
      />
      
          <faCoffee iconn={faCoffee}></faCoffee>

          <p>
          </p>




          <div className="container-medium-zoom">
            <Zoom  overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
                <img  alt="landscape" src={landscape3}/>
            </Zoom>
          </div>

          <div className="container-medium-zoom">
            <Zoom className="container-medium-zoom" overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
                <img  alt="landscape" src={landscape2}/>
            </Zoom>
          </div>
          <div className="container-medium-zoom">
            <Zoom className="container-medium-zoom" overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
                <img  alt="landscape" src={landscape5}/>
            </Zoom>
          </div>
          <div className="container-medium-zoom">
            <Zoom  overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
                <img  alt="landscape" src={landscape1}/>
            </Zoom>
          </div>

          <div className="container-medium-zoom">
            <Zoom className="container-medium-zoom" overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
                <img  alt="landscape" src={landscape4}/>
            </Zoom>
          </div>
          <h1 className="h1-container">Swans</h1>
          <hr
        style={{
          background: 'brown',
          color: 'brown',
          borderColor: 'brown',
          width: '50%',
          margin: 'auto'
          
        }}
      />
                <div className="linebreak-space">
                  </div>
      
          <AwesomeSlider organicArrows = {true}  >
          <div data-src={SwanMainBest}/>
          <div data-src={SwanMain}/>
          <div data-src={SwanMain2}/>
          <div data-src={SwanMain3}/>

             
        </AwesomeSlider>
          <Gallery  images={IMAGES}></Gallery>
        </div>

        <Footer />

      </div>
    );



  }
};

export default App;
