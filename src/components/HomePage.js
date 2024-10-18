// src/components/HomePage.js
import React from 'react';
import './HomePage.css';

const HomePage = () => {
 /* const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
 */
  return (
    <div className="home-container">

      <div className="banner banner-top">
      </div>

      <div className="logo-container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/San_Pablo_City_Laguna_seal.svg/1200px-San_Pablo_City_Laguna_seal.svg.png" alt="Company Logo" className="logo" />
      </div>

      <div className="banner banner-bottom">
        <div className="banner-bottom content">
        <h1>SAN PABLO CITY MEGA CAPITOL</h1>
        <button className="action-button"> <a href="/kiosk">TAP TO BEGIN</a></button>
        <p>Client's Service Assistance Kiosk <br />Powered by MIS San Pablo 2024</p>
        <img className="MISseal"src={require ('./maps/MIS.jpg')}/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
