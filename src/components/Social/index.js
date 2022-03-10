import React from 'react'
import githubicon from "../../assets/githubicon.jpg";
import linkedinicon from "../../assets/linkedinicon.jpg";
//import { Link } from "react-router-dom";

function Social() {

  return (
    <section className="my-5" >
      <h1 id="social">Find me on GitHub and Linkedin </h1>
      <ul>
          <li><a href="https://github.com/Fishdestroyer" img src={githubicon}>GitHub</a></li>
          <li><a href="https://www.linkedin.com">Linkedin</a></li>
      </ul>
      <img src={githubicon}  className="githubicon"   style={{ width: "25%" }} alt="github" />
      <img src={linkedinicon}  className="linkedinicon"   style={{ width: "25%" }} alt="linkedin" />
      
      
      
      
    </section>
  )
}

export default Social