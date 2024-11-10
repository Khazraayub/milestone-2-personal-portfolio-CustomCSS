import React from 'react'

export default function Contact() {
  return (
    <main>
    <title>Khazra Shaikh Portfolio</title>
    <section style={{width:"100%"}}>
    <form>
    <div id="contact" className="contact-container">
      <div className="headings-section">
        <h1 style={{fontSize:"40px",marginBottom:"10px"}}>Contact Me</h1>
        <p style={{fontWeight:'normal'}}>Feel free to ask anything</p>
      </div>
      <div  className="input-section" style={{width:"100%"}}>
        <div className="section">
          <div className="input1">
            <div style={{ position: "relative" }}>
              <label htmlFor="name" style={{lineHeight:"28px"}}>Name</label>
              <input type="text" id="name" name="name" className="sec-1"/>
            </div>
          </div>
          <div className="input2">
            <div style={{ position: "relative" }}>
              <label htmlFor="email" style={{lineHeight:"28px"}}>Email</label>
              <input type="email" id="email" name="email" className="sec-2"/>
            </div>
          </div>
          <div className="input3">
            <div style={{ position: "relative" }}>
              <label htmlFor="message" style={{lineHeight:"28px"}}>Message</label>
              <textarea rows={5} required  name="message" id="message" className="sec-3"/>
            </div>
          </div>
          <div className="btn">
            <button id="btn" type="submit">Submit</button>
          </div>
          
        </div>
      </div>
    </div>
    </form>
  </section>
  </main>
  )
}
