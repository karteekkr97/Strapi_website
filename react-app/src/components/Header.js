import React, { useState } from "react";
import { Link } from 'react-router-dom';
import DeutscheBank from '../assets/images/DeutscheBank.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [selectedBank, setSelectedBank] = useState(null);
  const handleButtonClick = (bank) => {
    setSelectedBank(bank);
    navigate('/form', { state: { bank } });
  };

  return (
    <div className="hero-section">
      <nav className="navbar">
      <Link to="/"><img src={DeutscheBank} alt="DeutscheBank" className="loan App-logo" /></Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li className="dropdown">
            <Link to="/">Loans</Link>
            <ul className="dropdown-content">
              <li><Link to="/personalloan">Personal Loan</Link></li>
              <li><Link to="/homeloan">Home Loan</Link></li>
              <li><Link to="/educationloan">Education Loan</Link></li>
              <li><Link to="/businessloan">Business Loan</Link></li>
              <li><Link to="/goldloan">Gold Loan</Link></li>
              <li><Link to="/loancalculator">Loan Calculator</Link></li>
              <li><Link to="/eligibilitycalculator">Eligibility Calculator</Link></li>
            </ul>
          </li>
          <li className="dropdown">
            <Link to="/">Insurance</Link>
            <ul className="dropdown-content">
              <li><Link to="/healthinsurance">Health Insurance</Link></li>
              <li><Link to="/familyinsurance">Family Insurance</Link></li>
              <li><Link to="/lifeinsurance">Life Insurance</Link></li>
              {/* <li><Link to="/">Car Insurance</Link></li> */}
            </ul>
          </li>
          {/* <li><Link to="/creditcard">Credit Cards</Link></li> */}
          <li><Link to="/blog">Blogs</Link></li>
          <button className="cta-button" onClick={() => handleButtonClick()}>Apply</button>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
