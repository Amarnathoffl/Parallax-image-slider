import React from 'react'
import Lastimg from '../images/last.png'
function Last() {
  return (
    <>
    <div id='contactlink' className="fullbodylast d-flex justify-content-center align-items-center flex-column">
        <hr />
        <div className='tbody'>
            <h3>THE VALUE FOR EXPERIENCE</h3>
            <p>Relax...You're with us! We make it simple</p>
            <button className='btn btn-primary'>START PLANNING</button>
        </div>
        <img src={Lastimg} alt="" />
    </div>
    </>
  )
}

export default Last