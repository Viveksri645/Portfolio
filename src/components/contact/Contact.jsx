import React from 'react'
import './Contact.css'
const Contact = () => {
 
  return (
    <div className="contact" id="Contact">
      <h1 style={{ textAlign: "center", fontWeight: "bold", fontSize: "40px" }}><span style={{ fontWeight: "bold", fontSize: "40px", color: "blue" }}>Cont</span>act</h1>
      <div className="contact-inner">

        <div className="c-left">
          <div className="awesome">
            <span>Get in touch</span>
            <span>Contact me</span>
          </div>
          <div className="blur t-blur1" style={{ background: "var(--purple" }}></div>
          <div className="blur t-blur2" style={{ background: "#ABF1FF94" }}></div>
        </div>

        <div className="c-right">
          <form>
            <input type="text" name="user name" className="user" placeholder="Name"></input>
            <input type="email" name="user_mail" className="user" placeholder="Email"></input>
            <textarea name="message" className="user" placeholder='Type Query here' ></textarea>
            <input type="submit" value="send" className="button" ></input>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact