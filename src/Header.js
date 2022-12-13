import React from 'react';

import { Link } from "react-router-dom";

export default function Header() {

const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  // return (
  //   <header>
  //   <nav className="nav">
  //     <img src="./logo192.png" alt="my logo" className="img-logo" />
  //     <h3> My Sample Website </h3>
  //       <ul className = "nav-items">
  //       <li> Items </li>
  //       <li> About </li>
  //       <li> Contact </li>
  //       </ul>
  //   </nav>
  //   </header>

  // );

  return (
   <header>
      <nav className="nav">
        <img src="./logo192.png" alt="my logo" className="img-logo" />
        <h3> {data}</h3>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>

          <li>
            <Link to="/Login">Login</Link>
          </li>

        </ul>
      </nav>
     
     </header>
  );
}