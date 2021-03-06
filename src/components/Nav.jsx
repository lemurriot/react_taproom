import React from 'react';
import bubbles from './../assets/bubbles1.gif';
import beermug from './../assets/beermug.png';
import { Link } from 'react-router-dom';

const navFlex = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  borderBottom: '1px solid black',
  padding: '1% 4%',
  backgroundImage: `url(${bubbles})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'bottom',
  textDecoration: 'none',
  position: 'fixed',
  top: '0',
  width: '100vw',
  height: '4vh',
};


function Nav() {
  return (
    <div style={navFlex}>
      <style jsx global>{`
          a {
            text-decoration: none;
            color: #da006f6b;
            text-shadow: .5px .5px black;
            font-family: 'Just Another Hand', sans-serif;
          }
          a:hover {
            color: purple;
          }
          .subnav {
            display: flex;
            align-items: flex-end;
          }
          .beermug {
            height: 50px;
          }`}</style>
      <h1><Link to='/'>React.Taps</Link></h1>
      <div className="subnav">
        <Link to='/edit'>Edit Beers</Link>
        <img className="beermug" src={beermug}/>
        <Link to='/addnew'>Add New Beers</Link>
      </div>
    </div>
  );
}

export default Nav;

//here <style jsx global> is necessary to access the <a> tag under the hood of the <Link> tag
