import React from 'react'
// import {useRef} from 'react'
// import emailjs from 'emailjs-com'
import './Contact.css'

function Contact() {
  // const form = useRef();

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm("service_id", "template_id", form.current(using useRef to fetch form data), "Account_id") ((you can get these from email js site account));

  //   e.target.reset();
  // } (using email js to send the form data to your mail account linked with email js. For more detail go to email js site)

  return (
    <div className='contact-container' id='contact'>
      <div className='contact-main'>
        <div className='contact-heading'>
          <h5>Get In Touch</h5>
          <h2>CONTACT ME</h2>
          <h5>My Contact Details are</h5>
        </div>

        <div className='contact-block'>
          <div className='left-contact-block'>
            {/* <h3>Talk to me</h3> */}

            <div className='email contact-cart'>
              <i className='bx bxs-envelope bx-md'></i>
              <h4>Email</h4>
              <h5>vivek99shri@gmail.com</h5>
              <a href='mailto:vivek99shri@gmail.com' target='_blank' rel='noreferrer'>
                Message
              </a>
            </div>

            {/* <div className='mob-no contact-cart'>
              <i class='bx bxl-whatsapp bx-md'></i>
              <h4>Whatsapp</h4>
              <h5>+917-000-890-1</h5>
              <button className='contact-btn-left btn'>
                <a href='https://api.whatsapp.com/send?phone=91(write ur number here without any country code)' target='_blank'>Message</a>
              </button>
            </div> */}

          </div>

          {/* <div className='right-contact-block'>
            <h3>Message me your query</h3>
            <form ref={form} onSubmit={handleSubmit}>
              <input name='name' className='txt' type='text' placeholder='Full Name' required />
              <input name='email' type='id' placeholder='Mail' required />
              <textarea name='message' placeholder='Message' rows="7" maxlength="280" required></textarea>
              <button type='submit' className='contact-btn btn'>submit</button>
            </form>
          </div>   (use email js as a third party to send message to your mail)*/}

        </div>

      </div>

    </div>
  )
}

export default Contact