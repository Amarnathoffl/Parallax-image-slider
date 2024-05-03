import React from 'react'

function Footer() {
  return (
    <>
    <div id='fout'>
        <div id='footer'>
          <div className="footin4">
            <h5>GET IN TOUCH</h5>
            <p style={{textAlign:"justify"}}>
                <b>Address: </b><br />
                Peredrift, <br />65 West 54th Street, <br />New York, NY 10019
            </p>
            <p style={{textAlign:"justify"}}>
                <b>Support Phone: </b><br />
                2120115558
            </p>
            <p style={{textAlign:"justify"}}>
                <b>Email:info@voyagevista.com </b>
            </p>
          </div>
          <div className="footin4">
            <h5 id='infohead'>ABOUT US</h5>
            <ul id='list'>
              <a href=''><li>How it Works</li></a>
              <a href=''><li>Start Planning</li></a>
              <a href=''><li>About Us</li></a>
              <a href=''><li>Trip Inspiration</li></a>
              <a href=''><li>Contact Us</li></a>
            </ul>
          </div>
          <div className="footin4">
            <h5 id='infohead'>FROM THE BLOG</h5>
            <ul id='list'>
              <a href=''><li>Traveling Guides</li></a>
              <a href=''><li>Planning Your Trip</li></a>
              <a href=''><li>Product Guides</li></a>
              <a href=''><li>Guest Posts</li></a>
              <a href=''><li>Destinations</li></a>
              <a href=''><li>Tours</li></a>
              <a href=''><li>Webinars</li></a>

            </ul>
          </div>
          <div className="footin4"><h5 className='chead'>Contact Info</h5>
          <a href=''><i class="fa-brands fa-whatsapp fa-xl i1"></i></a>
          <a href=''><i class="fa-brands fa-instagram fa-xl i1"></i></a>
          <a href=''><i class="fa-brands fa-facebook-f fa-xl i1"></i></a>
          <a href=''><i class="fa-regular fa-envelope fa-xl i1"></i></a>
          <a href=''><i class="fa-solid fa-location-dot fa-xl i1"></i></a>
          <br />
          <br />
          
          </div>
        </div>
   </div>
    </>
  )
}

export default Footer