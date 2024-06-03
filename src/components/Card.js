import React from 'react';
import './CustomCard.css';
import { Link } from 'react-router-dom';
import web3 from './image/web5.png'
import './CustomCard.css';
const CustomCard = ({ title, description }) => {
  return (
    <div className="containercustom">
      <div class="row">
      <div class="col-4">
        <div class="card" >
             <div class="card-body text text-center  ">
                <img src={web3} alt="" />
            <h5 class="card-title mt-3 ">WEB DEVELPOPMENT</h5>
            <p class="card-text "> blanditiis neque nulla reiciendis fuga sapiente sit, est dolorem at delectus? Quasi dignissimos mollitia eaque. Assumenda?</p>
            <Link to="https://www.fylehq.com/" class="btn px-5 py-2 mt-4 ">READ MORE</Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CustomCard;
