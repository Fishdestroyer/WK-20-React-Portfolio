import React from 'react'
import githubicon from "../../assets/githubicon.jpg";
import linkedinicon from "../../assets/linkedinicon.jpg";
import { Link } from "react-router-dom";

function Social() {

  return (
    <section className="my-5" >
      <h1 id="social">Find me on GitHub</h1>
      <img src={githubicon}  className="githubicon"  style={{ width: "25%" }} alt="github" />
      
      <div className="my-5">
          <h1 id="social">Find me on linkedin</h1>
          <img src={linkedinicon}  className="linkedinicon" Link="https://github.com/Fishdestroyer" style={{ width: "25%" }} alt="github" />
      </div>
    </section>
  )
}

export default Social