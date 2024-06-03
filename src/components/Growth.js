
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Growth.css';
import heart from './image/heart.png';
import clock2 from './image/clock2.png';
import complete from './image/complete.png';
import trophy from './image/trophy.png';
import daal from './image/daal.png';
import he from './image/he.png';
import se from './image/se.png';
import jeem from './image/jeem.png';
import te from './image/te.png';
import khe from './image/khe.png';
import './footer.css';

const Growth = () => {
  return (
    <div className="mainagrowth pt-5">
      <div className='text text-center'>
        <h3 className="pb-3">EXPERTS GROWTHS</h3>
        <h2 className="display-2 fw-semibold pb-5">OUR COMPANY GROWTH</h2>
      </div>

      <div className="row mb-5">
        <div className="col-lg-3 col-md-6 mb-3">
          <div className="smallcardss">
            <div className="third px-4 pb-4">
              <img src={heart} alt="Satisfied Customers" />
              <h1 className='textcards mx-4'>199+</h1>
              <h4 className='text text-center'>Satisfied Customers</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-3">
          <div className="smallcardss">
            <div className="third px-4 pb-4">
              <img src={clock2} alt="Days of Operation" />
              <h1 className='textcards mx-4'>1591+</h1>
              <h4 className='text text-center'>Days Of Operation</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-3">
          <div className="smallcardss">
            <div className="third px-4 pb-4">
              <img src={complete} alt="Completed Projects" />
              <h1 className='textcards mx-4'>283+</h1>
              <h4 className='text text-center'>Completed Projects</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-3">
          <div className="smallcardss">
            <div className="third px-4 pb-4">
              <img src={trophy} alt="Awards Won" />
              <h1 className='textcards mx-4'>75+</h1>
              <h4 className='text text-center'>Awards Won</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="feedback">
        <div className='text text-center'>
          <h3 className="pb-3">CLIENT'S FEEDBACK</h3>
          <h2 className="display-2 fw-semibold pb-5">PEOPLE'S SAYS ABOUT US!</h2>
          <p className='text text-center '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, exercitationem Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eum inventore exercitationem dolore eveniet quisquam enim quam rem itaque officia numquam, assumenda molestias illum blanditiis ex. similique? Quis architecto officia sunt soluta laboriosam blanditiis id magni sint, consectetur sit voluptates inventore nisi sapiente molestias cum asperiores.</p>
        </div>
      </div>
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
     
    </div>
  );
}

export default Growth;

