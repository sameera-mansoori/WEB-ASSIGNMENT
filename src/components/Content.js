import React, { useState } from 'react';
import './Content.css';
import './Card.css';
import CustomCard from './Card'; 
import beauty2 from './image/beauty2.avif';
import beauty from './image/beauty.avif';
import cloth1 from './image/cloth1.avif';
import frui2 from './image/frui2.avif';
import card3 from './image/card3.avif';
import card4 from './image/card4.avif';
import card5 from './image/card5.avif';
import card7 from './image/card7.avif';

const Content = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
  <>
      <div className="box">
        <div className="containercontent">
          <div className="first">
            <div className="heading pb-5 justify-content-start">
              <h3 className="pb-3">WHAT WE DO</h3>
              <h2 className="display-2 fw-semibold">SERVICES PROVIDED</h2>
              <h2 className="display-2 fw-semibold">FOR YOU</h2>
            </div>
          </div>
          <div className="second">
            <p className="text text-lg-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ratione nulla voluptas itaque veritatis ab incidunt impedit harum, praesentium nihil aperiam? Tenetur minima nulla nam ipsum a tempore quis dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aliquid sint nostrum iure saepe, beatae itaque non, a earum tenetur eveniet qui ipsa accusantium impedit nam optio, harum possimus natus!
            </p>
          </div>
        </div>
        <div id="cardCarousel" className="carousel slide ps-5" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-3">
                  <div
                    className="card card-custom"
                    onMouseEnter={() => setHoveredCard(1)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {hoveredCard === 1 ? (
                      <CustomCard title="Beauty" description="Description of the beauty card" />
                    ) : (
                      <img src={beauty2} className="card-img-top" alt="Card 1" />
                    )}
                  </div>
                </div>
                <div className="col-md-3">
                  <div
                    className="card card-custom"
                    onMouseEnter={() => setHoveredCard(2)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {hoveredCard === 2 ? (
                      <CustomCard title="Beauty" description="Description of the beauty card" />
                    ) : (
                      <img src={beauty} className="card-img-top" alt="Card 2" />
                    )}
                  </div>
                </div>
                <div className="col-md-3">
                  <div
                    className="card card-custom"
                    onMouseEnter={() => setHoveredCard(3)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {hoveredCard === 3 ? (
                      <CustomCard title="Cloth" description="Description of the cloth card" />
                    ) : (
                      <img src={cloth1} className="card-img-top" alt="Card 3" />
                    )}
                  </div>
                </div>
                <div className="col-md-3">
                  <div
                    className="card card-custom"
                    onMouseEnter={() => setHoveredCard(4)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {hoveredCard === 4 ? (
                      <CustomCard title="Fruit" description="Description of the fruit card" />
                    ) : (
                      <img src={frui2} className="card-img-top" alt="Card 4" />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-3">
                  <div
                    className="card card-custom"
                    onMouseEnter={() => setHoveredCard(5)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {hoveredCard === 5 ? (
                      <CustomCard title="Card 3" description="Description of card 3" />
                    ) : (
                      <img src={card3} className="card-img-top" alt="Card 5" />
                    )}
                  </div>
                </div>
                <div className="col-md-3">
                  <div
                    className="card card-custom"
                    onMouseEnter={() => setHoveredCard(6)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {hoveredCard === 6 ? (
                      <CustomCard title="Card 4" description="Description of card 4" />
                    ) : (
                      <img src={card4} className="card-img-top" alt="Card 6" />
                    )}
                  </div>
                </div>
                <div className="col-md-3">
                  <div
                    className="card card-custom"
                    onMouseEnter={() => setHoveredCard(7)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {hoveredCard === 7 ? (
                      <CustomCard title="Card 5" description="Description of card 5" />
                    ) : (
                      <img src={card5} className="card-img-top" alt="Card 7" />
                    )}
                  </div>
                </div>
                <div className="col-md-3">
                  <div
                    className="card card-custom"
                    onMouseEnter={() => setHoveredCard(8)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {hoveredCard === 8 ? (
                      <CustomCard title="Card 7" description="Description of card 7" />
                    ) : (
                      <img src={card7} className="card-img-top" alt="Card 8" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#cardCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#cardCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#cardCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#cardCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;



