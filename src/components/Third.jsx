import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Hike from '../images/hike.jpg';
import awatch from "../images/watch1.jpg";
import surf from "../images/surf.jpg";
import whale from "../images/whale.jpg";
import cycle from "../images/cycle.jpg";
import kayaking from "../images/kayaking.jpg";
import paragliding from "../images/para.jpg";
import raft from '../images/raft.jpg'
function Third() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className='fullbody3 bg-light'>
      <div style={{ textAlign: 'center', marginTop: '150px', paddingTop: '100px' }}>
        <p className="text-secondary" style={{ letterSpacing: '5px', fontSize: '18px' }}>TRIP INSPIRATION</p>
        <h3 className="thmar text-align-center"style={{letterSpacing:'2px'}}>FIND THE PERFECT PLACE TO GO ACTIVITIES, <br />HOTELS, AND MORE</h3>
      </div>
      <div className="thmar buttondiv d-flex  align-items-center">
        <div className='completebutton'>
          <button className="bt1 btn btn-outline-primary ">ALL</button>
          <button className="bt1 btn btn-outline-primary ">ADVENTURE</button>
          <button className="bt1 btn btn-outline-primary ">HIGH ADRENALINE</button>
          <button className="bt1 btn btn-outline-primary ">WATER SPORTS</button>
          <button className="bt1 btn btn-outline-primary">HISTORY & CULTURE</button>
          <button className="bt1 btn btn-outline-primary">OTHER ACTIVITIES</button>
        </div>
      </div>

      <Slider {...settings}>
        <div id='t1' className="type">
          <img className='tchange' src={Hike} alt="" style={{ width: '280px', height: '398px', position: 'absolute' }} />
          <div className='cont'>
            <h4>HIKING</h4>
            <p>An Ultimate Luxury <br /> Ireland Journey</p>
          </div>
        </div>
        <div id='t2' className="type">
          <img className='tchange' src={awatch} alt="" style={{ width: '280px', height: '398px', position: 'absolute' }} />
          <div className='cont'>
            <h4>Animal Watching</h4>
            <p>A stunning off beaten Safari <br /> path to China</p>
          </div>
        </div>
        <div id='t3' className="type">
          <img className='tchange' src={surf} alt="" style={{ width: '280px', height: '398px', position: 'absolute' }} />
          <div className='cont'>
            <h4>Surfing</h4>
            <p>Journeying Through <br /> Nelson Mandela's Roots</p>
          </div>
        </div>
        <div id='t4' className="type">
          <img className='tchange' src={kayaking} alt="" style={{ width: '280px', height: '398px', position: 'absolute' }} />
          <div className='cont'>
            <h4>Kayaking</h4>
            <p className='text-align-center'>An Ultimate Luxury <br /> Ireland Journey</p>
          </div>
        </div>
        <div id='t5' className="type">
          <img className='tchange' src={whale} alt="" style={{ width: '280px', height: '398px', position: 'absolute' }} />
          <div className='cont'>
            <h4>WHALE WATCHING</h4>
            <p>Best of Namibia Safari & <br /> Nature journey</p>
          </div>
        </div>
        <div id='t6' className="type">
          <img className='tchange' src={cycle} alt="" style={{ width: '280px', height: '398px', position: 'absolute' }} />
          <div className='cont'>
            <h4>CYCLING</h4>
            <p>The Ultimate Croatian <br /> Epicurean Journey</p>
          </div>
        </div>
        <div id='t7' className="type">
          <img className='tchange' src={paragliding} alt="" style={{ width: '280px', height: '398px', position: 'absolute' }} />
          <div className='cont'>
            <h4>PARAGLIDING</h4>
            <p>The Best Adrenaline Sport in  <br /> Epicurean Journey</p>
          </div>
        </div>
        <div id='t8' className="type">
          <img className='tchange' src={raft} alt="" style={{ width: '280px', height: '398px', position: 'absolute' }} />
          <div className='cont'>
            <h4>RAFTING</h4>
            <p>Thrilling Karnataka Package : <br /> Dandeli, Gokarna</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Third;
