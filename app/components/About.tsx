import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <main>
        <title>Khazra Shaikh Portfolio</title>
   
    <section>
         <div className="container ">
        <div className="about-section">
    
          <h1 style={{marginBottom:"20px", fontSize:"4rem"}}>
            About Me
          </h1>
          

          <p className="para ">
          Assalamualaikum!
          I am Khazra Ayub.
          Alhamdulillah Telecom Engineer graduate from Mehran University of Engineering and Technology. 
          Want to enhance my knowledge and skills. My goal is to seeking and leverage knowledge in my field.
          Looking to utilize my technology and leadership skills in an esteemed organization. 
          Well versed with research-oriented marketing abilities and product analysis.
          I’m a dedicated front-end developer with expertise
          in HTML, CSS, JavaScript, TypeScript, and Tailwind CSS.
          I enjoy transforming ideas into interactive, responsive, and 
          visually engaging digital experiences. With a keen eye for detail and a strong foundation
          in modern web technologies, I build projects that are both functional and user-friendly.
          </p>
        </div>
        <div className=" img-section">
        <Image
            id="about-img"
            src="/images/download.png"
            width={500}
            height={500}
            alt={"picture"}
          ></Image>
        </div>
        </div>
    </section>
    </main>
  )
}
