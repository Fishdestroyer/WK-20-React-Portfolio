import React from 'react'
import coverImage from "../../assets/react 2.1.jpg";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">The mysterious and elusive- Jeff Whitner</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
       
      </div>
    </section>
  )
}

export default About