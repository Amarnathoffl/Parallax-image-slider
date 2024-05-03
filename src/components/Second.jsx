import React from 'react'
import rider from '../images/secbx1.png'
import work from '../images/secbx2.png'
import travel from '../images/secbx3.png'

function Second() {
  return (
    <>
    <div id='worklink' style={{zIndex:'10',backgroundColor:'white',position:'relative',marginTop:'-35px'}}>
        <p className="text-secondary" style={{textAlign:'center',letterSpacing:'5px'}}>3 STEPS TO THE PERFECT TRIP</p>
        <h3 style={{textAlign:'center',letterSpacing:'2px'}}>FIND TRAVEL PERFECTION,WITH THE <br /> WISDOM OF EXPERTS</h3>
        <p className="text-secondary" style={{textAlign:'center'}}>
        Naturally head of the class when it comes to luxury travel planning, because we do more homework than anyone else, with a few little sweeteners thrown in! Travel to the four corners of the world, without going around in circles.
        </p>
        <div className='d-flex justify-content-around align-items-center flex-wrap secboxes'>
            <div className="step-item">
                <img src={rider} alt="" />
            <h5>Tell us what you want to do</h5>
            <p>Fill out a 2-minute questionnaire about how you like to travel</p>
          </div>
          <div className="step-item">
          <img src={work} alt="" />

            <h5>Share Your Travel Preference & Dates</h5>
            <p>It all happens online, We recommend everything to your vision</p>
          </div>
          <div className="step-item">
          <img src={travel} alt="" />
            <h5>LETS PLAN YOUR TRIP</h5>
            <p>
              We'll give you tailored recommendations <br />
              Once you're happy with your final plan, We handle everything for you
            </p>
          </div>
        </div>
       <div className='secbtdiv'> <button className="btn btn-primary text-light secbt">LETS PLAN YOUR TRIP</button></div>
    </div>
    </>
  )
}

export default Second