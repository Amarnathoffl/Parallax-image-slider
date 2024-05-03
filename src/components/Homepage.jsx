import React, { useEffect } from 'react';
import banner from '../images/banner.jpg'
import cloud from '../images/cloud.png'

function Homepage() {
    useEffect(() => {
        const parallaxBackground = document.querySelector('.banner');
    
        const handleScroll = () => {
          const scrolled = window.scrollY;
          parallaxBackground.style.transform = 'translate3d(0, ' + scrolled * 0.5 + 'px, 0)';
        };
    
        document.addEventListener('scroll', handleScroll);
    
        return () => {
          document.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (

    <>
    <div className='fullhome' style={{height:'95vh'}}>
        <div style={{position:'relative',marginTop:'-116px'}}>
            <img className='banner' style={{width:'100%',height:'90vh',zIndex:'2',position:'absolute'}} src={banner} alt="" />
            <img src={cloud} style={{width:'100%',zIndex:'4',position:'absolute',height:'150px',marginTop:'510px'}} alt="" />
        </div>
        <div className="bannercont text-center d-flex justify-content-center align-item-center flex-column text-align-center" style={{position:'absolute',zIndex:'5',width:'100%',height:'90vh'}}>
            <h1 className="text-light">FIND THE PERFECT PLACE TO GO</h1>
            <p className="text-light">Reserve personalized recommendations for activities,hotels,and more</p>
            <div className="search">
              <form action="">
                <input id='searchbox' type="text" placeholder='WHAT WOULD YOU LIKE TO DO?' style={{width:'50%',height:'40px',borderRadius:'20px'}}/>
                <button className="bg-primary sbt">Search</button>
              </form>
            </div>
                
            
        </div>
    </div>
    </>
  )
}

export default Homepage