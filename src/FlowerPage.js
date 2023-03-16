import React from "react";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'
import './styles.css';
import './footer.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import { Container } from 'react-bootstrap'
import {faCoffee} from '@fortawesome/free-solid-svg-icons'

import landscape1 from './img2/DSCF0950 Snowdrop lampscape.jpg';
import landscape2 from './img2/Convent - Sr Blake DSC07810.jpg';
import landscape3 from './img2/Yellow Blouse Woman GOPR0791 Divers added copyEd2.jpg';
import landscape4 from './img2/BirdsDSC02360.jpg';
import landscape5 from './img2/BirdsDSC02361.jpg';


import SwanMainBest from './img2/Fox+Dandy+Fern 2006_0627Foxgloves06060008 orgfromraw copy copy.jpg';
import SwanMain from './img2/Vera Daises Convent DSC07810 r300 perspective cropped Signed FC A1.jpg';
import SwanMain2 from './img2/Fox+Dandy+Fern 2006_0627Foxgloves06060011ed111x9in usm 111-1.jpg';


import SwanSub1 from './img2/Fox+Dandy+Fern 2006_0627Foxgloves06060012 levels usm 111-1.jpg';
import SwanSub2 from './img2/FoxFernPosterOrged1.jpg';
import SwanSub4 from './img2/DSC06554.jpg';
import SwanSub5 from './img2/DSC06585.jpg';
import SwanSub6 from './img2/20160925_104056.JPG';
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
      src: SwanSub1,
      thumbnail: SwanSub1,
      thumbnailWidth: 320,
      thumbnailHeight: 312,
      // tags: [{ value: "Swan", title: "Swan" }, { value: "Swan", title: "Swan" }],
      caption: "(Peter McGuinness - Petermcguinnessphotography.com)"
    },

    {
      src: SwanSub2,
      thumbnail: SwanSub2,
      thumbnailWidth: 220,
      thumbnailHeight: 312,
      caption: "(Peter McGuinness - Petermcguinnessphotography.com)"
    },


    {
      src: SwanSub4,
      thumbnail: SwanSub4,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "(Peter McGuinness - Petermcguinnessphotography.com)"
    },
    {
      src: SwanSub5,
      thumbnail: SwanSub5,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "(Peter McGuinness - Petermcguinnessphotography.com)"
    },

    {
      src: SwanSub6,
      thumbnail: SwanSub6,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "(Peter McGuinness - Petermcguinnessphotography.com)"
    }

  ]



class FlowerPage extends React.Component {



  render() {
    return (

      <div className="mainDiv">

        <Navbar />


        <div class="container">
          <h1 className="h1-container">Landscapes</h1>
          <faCoffee iconn={faCoffee}></faCoffee>
          <hr
        style={{
          background: 'brown',
          color: 'brown',
          borderColor: 'brown',
          width: '50%',
          margin: 'auto'
        }}
      />
          <p>
          </p>


          <div className="container-medium-zoom">
            <Zoom  overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
                <img  alt="landscape" src={landscape1}/>
            </Zoom>
          </div>

          <div className="container-medium-zoom">
            <Zoom className="container-medium-zoom" overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
                <img  alt="landscape" src={landscape2}/>
            </Zoom>
          </div>
          
          <div className="container-medium-zoom">
            <Zoom className="container-medium-zoom" overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
                <img  alt="landscape" src={landscape3}/>
            </Zoom>
          </div>

          <div className="container-medium-zoom">
            <Zoom className="container-medium-zoom" overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
                <img  alt="landscape" src={landscape4}/>
            </Zoom>
          </div>

          <h1 className="h1-container">Flowers</h1>
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


             
        </AwesomeSlider>
          <Gallery  images={IMAGES}></Gallery>
        </div>

        <Footer />

      </div>
    );



  }
};

export default FlowerPage;
