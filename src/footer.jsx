import React from 'react'
import Picture6 from './assets/facebook.png'
import Picture7 from './assets/linkedin.png'
import Picture8 from './assets/pinterest.png'


function Footer() {
  return (
    <div>
        <footer>
            <div className='leftside'>
                <div className='socials'>
                    <a href='#' className='fa fa-facebook'><img className='facebook' src={Picture6}></img></a>
                    <a href='#' className='fa fa-linkedin'><img className='linkedin' src={Picture7}></img></a>
                    <a href='#' className='fa fa-pinterest'><img className='pinterest' src={Picture8}></img></a>
                </div> 
            
            </div>   
            <div className='rightside'>
                <div className='aboutlinks'>
                    <a href='#'>ABOUT US</a>
                    <a href='#'>ARTICLES</a>
                    <button className="subscribe-button" type='button'>SUBSCRIBE</button>
                </div>
               
            </div> 
            
        </footer>

    </div>
  )
}

export default Footer
