
import React, { useState } from 'react';
import woman2 from './image/woman2.avif';
import Content from '../components/Content';
import About from './About';
import Contact from '../components/Contact';
import Growth from '../components/Growth';



const Home = () => {
  const [showContact, setShowContact] = useState(false);

  const handleContactClick = () => {
    setShowContact(true);
  };

  const handleClose = () => {
    setShowContact(false);
  };

  return (
    <>
      <div className="home-container">
        <div className="row mx-5 justify-content-between align-items-center ps-4">
          <div className="col-12 col-md-8 h-100 ">
            <div className="heading pb-5">
              <h3 className="pb-3">AWARD WINNING</h3>
              <h2 className="display-2 fw-semibold">DIGITAL MARKETING</h2>
              <h2 className="display-2 fw-semibold">AGENCY</h2>
            </div>
            <p className="text text-lg-start pe-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ratione nulla voluptas itaque veritatis pre ab incidunt impedit harum, praesentium nihil aperiam? Tenetur minima nulla nam ipsum a tempore quis dolore.
            </p>
            <button className="btn btn-danger mt-4 px-4 py-2" onClick={handleContactClick}>Contact Us</button>
          </div>
          <div className="col-12 col-md-4 h-100 text-center">
            <img src={woman2} alt="Logo" className="img-fluid" />
          </div>
        </div>
      </div>

      {showContact && <Contact onClose={handleClose} />}
   
       <Content/>
       <About/> 
       <Growth/>  

     
    </>
  );
}

export default Home;
