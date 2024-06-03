import React from 'react';
import daal from './image/daal.png';
import he from './image/he.png';
import se from './image/se.png';
import jeem from './image/jeem.png';
import te from './image/te.png';
import khe from './image/khe.png';
import './footer.css';



const Footer = () => {
  return (
    <div className="end">
      <div className="containerend">
        <div className="row justify-content-center">
          <div className="col-6 col-md-2">
            <img className="footer-image" src={daal} alt="" />
          </div>
          <div className="col-6 col-md-2">
            <img className="footer-image" src={he} alt="" />
          </div>
          <div className="col-6 col-md-2">
            <img className="footer-image" src={se} alt="" />
          </div>
          <div className="col-6 col-md-2">
            <img className="footer-image" src={jeem} alt="" />
          </div>
          <div className="col-6 col-md-2">
            <img className="footer-image" src={te} alt="" />
          </div>
          <div className="col-6 col-md-2">
            <img className="footer-image" src={khe} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
