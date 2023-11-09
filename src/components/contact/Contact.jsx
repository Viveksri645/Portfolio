import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='contact-container'>
      <div className='contact-main'>
        <h1>Contact Me</h1>
        <p>My Contact Details</p>
        <div className='contact-block'>
          <div className='left-contact-block'>
            <h3>Talk to me</h3>
            <div className='email contact-cart'>
              <i class='bx bxs-envelope bx-md'></i>
              <p>Email</p>
              <p>vivek@gmail.com</p>
            </div>
            <div className='mob-no contact-cart'>
              <i class='bx bxl-whatsapp bx-md'></i>
              <p>Whatsapp</p>
              <p>+917-000-890-1</p>
            </div>
            <div className='telegram-no contact-cart'>
            <i class='bx bxl-telegram bx-md'></i>
              <p>Telegram</p>
              <p>+917-000-890-1</p>
            </div>
          </div>
          <div className='right-contact-block'>
            <h3>Message me your query</h3>
            <input className='txt'  type='text' placeholder='Name'/>
            <input type='id' placeholder='Mail'/>
            <textarea placeholder='Message'></textarea>
            <button type='submit' className='contact-btn btn'>submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact