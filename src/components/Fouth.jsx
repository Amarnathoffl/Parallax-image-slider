import React from 'react'
import lap from '../images/fourth.png'
function Fouth() {
  return (
    <>
        <div id='startlink' className='d-flex justify-center-between align-items-center'>
            <img className='fimg' src={lap} alt="" />
            <div className="fcontent">
                <p style={{letterSpacing:'10px',textAlign:'center'}}>EASY TO USE UI FOR TRIP PLANING</p>
                <h2 style={{textAlign:'center',letterSpacing:'3px'}}> RIDICULOUSKY EASY TO USE</h2>
                <p style={{marginLeft:'150px',marginTop:'50px'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed vitae, excepturi vero, harum, officiis eligendi natus necessitatibus dolorem aperiam eius corrupti fuga. Vel accusamus dolores vitae ea tempore ratione quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eligendi ullam facilis, repudiandae maxime ab ipsam et error rerum voluptate veritatis corrupti suscipit tenetur modi expedita! Culpa, libero dolore? Fugit.</p>
                <button className="btn btn-primary " style={{marginLeft:'150px',marginTop:'50px'}}>LETS PLAN YOUR TRIP</button>
            </div>
        </div>
    </>
  )
}

export default Fouth