import React from 'react'
import './footer.css'
// import {FaFacebookF} from 'react-icons/fa'
// import {FaTwitter} from 'react-icons/fa'
// import {FaLinkedinIn} from 'react-icons/fa'
// import {FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        {/* <div className='call'>
            <h5>Call</h5>
            <p>7974549323</p>
        </div> */}
        <div className='write'>
            <h5>Write - </h5>
            <p>antra_c@ch.iitr.ac.in</p>
        </div>
        {/* <div className='follow'>
            <h5>Follow</h5>
            <div className='social'>
                  <a href=""><FaFacebookF /></a>
                  <a href=""><FaTwitter /></a>
                  <a href=""><FaLinkedinIn /></a>
                  <a href=""><FaInstagram /></a>
                </div>
        </div> */}
    </div>
  )
}

export default Footer