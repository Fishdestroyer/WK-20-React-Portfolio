import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {

  const  categories = [
    { name: 'Projects', description: 'Solo Projects' },
    { name: 'Group Projects', description: 'Group projects' }
  ];

  const handleClick = (item) => {
    console.log(item);
    return item;
  };

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="">Cowboys and Computers
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => handleClick("About")}>
              About me
            </a>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick('Contact')}>
              Contact
            </span>
          </li>
          {
            categories.map((category) => (
              <li className="mx-1" key={category.name} >
                <span onClick={() => { handleClick(category.name); }}>
                 {capitalizeFirstLetter(category.name)}
                </span>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
}

export default Nav;