import React from 'react'
import coverImage from "../../assets/0.jpg";

function Social() {

  return (
    <section className="my-5" >
      <h1 id="social">Find me on GitHub</h1>
      <img src={coverImage} className="my-2" to="https://github.com/account" style={{ width: "25%" }} alt="cover" />
      <div className="my-2">
       
      </div>
    </section>
  )
}

export default Social