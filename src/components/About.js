
import React, { useState } from 'react';
import './About.css';
import woman3 from './image/woman3.avif';
import perform from './image/perform.png';
import target2 from './image/target2.png';
import security from './image/security.png';
import strategy from './image/strategy2.png';
import friu2 from './image/frui2.avif';
import beauty from './image/beauty.avif';
import beauty2 from './image/beauty2.avif';


const About = () => {
  const [currentImage, setCurrentImage] = useState(woman3);

  const handleImageChange = (image) => {
    setCurrentImage(image);
  };

  return (
    <div className="mainabout pt-5">
      <div className='text text-center'>
        <h3 className="pb-3">WHY CHOOSE US</h3>
        <h2 className="display-2 fw-semibold pb-5">WHY WE ARE BEST</h2>
      </div>

      <div className="row mb-5">
        <div className="col-lg-3 col-md-6 mb-3">
          <div className="smallcards">
            <div className="third px-4 py-4">
              <img src={target2} alt="" />
              <h6>Genderless Kei-Japans Hot</h6>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi odit delectus facere illo consequatur vel dolorem ipsa corrupti est tenetur corporis explicabo, non optio provident sunt adipisci velit fuga. Consequuntur.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-3">
          <div className="smallcards">
            <div className="third px-4 py-4">
              <img src={perform} alt="" />
              <h6>Genderless Kei-Japans Hot</h6>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi odit delectus facere illo consequatur vel dolorem ipsa corrupti est tenetur corporis explicabo, non optio provident sunt adipisci velit fuga. Consequuntur.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-3">
          <div className="smallcards">
            <div className="third px-4 py-4">
              <img src={security} alt="" />
              <h6>Genderless Kei-Japans Hot</h6>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi odit delectus facere illo consequatur vel dolorem ipsa corrupti est tenetur corporis explicabo, non optio provident sunt adipisci velit fuga. Consequuntur.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-3">
          <div className="smallcards">
            <div className="third px-4 py-4">
              <img src={strategy} alt="" />
              <h6>Genderless Kei-Japans Hot</h6>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi odit delectus facere illo consequatur vel dolorem ipsa corrupti est tenetur corporis explicabo, non optio provident sunt adipisci velit fuga. Consequuntur.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className='text text-center'>
        <h3 className="pb-3">OUR PROJECT</h3>
        <h2 className="display-2 fw-semibold">WHY WE ARE BEST</h2>
      </div>
      <div className="container pt-3">
        <div className="image-card overflow-hidden">
          <img src={currentImage} alt="" />
        </div>
        <div className="textcard">
          <div className="card fi px-4 py-4" onClick={() => handleImageChange(beauty)}>
            <h6>Genderless Kei-Japans Hot</h6>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi odit delectus facere illo consequatur vel dolorem ipsa corrupti est tenetur corporis explicabo, non optio provident sunt adipisci velit fuga. Consequuntur.</p>
          </div>
          <div className="card sec px-4 py-4" onClick={() => handleImageChange(friu2)}>
            <h6>Genderless Kei-Japans Hot</h6>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi odit delectus facere illo consequatur vel dolorem ipsa corrupti est tenetur corporis explicabo, non optio provident sunt adipisci velit fuga. Consequuntur.</p>
          </div>
          <div className="card third px-4 py-4" onClick={() => handleImageChange(beauty2)}>
            <h6>Genderless Kei-Japans Hot</h6>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi odit delectus facere illo consequatur vel dolorem ipsa corrupti est tenetur corporis explicabo, non optio provident sunt adipisci velit fuga. Consequuntur.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
