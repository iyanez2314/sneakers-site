import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
  <div className='footer-container'>
    <div className='map-container'>
     <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3469.386504439582!2d-98.61662944944845!3d29.592448646649533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c67e741026815%3A0xda6709fb506a8834!2sFoot%20Locker!5e0!3m2!1sen!2sus!4v1669386656423!5m2!1sen!2sus"
      width="325"
      height="325"
      style={{border:0}}
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"/>
      <div className='store-hours-container'>
          <h4>Store Hours</h4>
          <p>Mon: 9-5</p>
          <p>Tue: 9-5</p>
          <p>Wed: 9-5</p>
          <p>Thur: 9-5</p>
          <p>Fri: 9-5</p>
          <p>Sat: 9-5</p>
          <p>Sun: 9-5</p>
      </div>
    </div>
    {/* <div className='store-hours-container'>
      <h4>Store Hours</h4>
      <p>Mon: 9-5</p>
      <p>Tue: 9-5</p>
      <p>Wed: 9-5</p>
      <p>Thur: 9-5</p>
      <p>Fri: 9-5</p>
      <p>Sat: 9-5</p>
      <p>Sun: 9-5</p>
    </div> */}
  </div>
  )
}

export default Footer;