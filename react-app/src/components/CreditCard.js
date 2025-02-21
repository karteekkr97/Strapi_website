import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function PersonalLoan() {
  const [personal, setPersonal] = useState([]);
  const [selectedBank, setSelectedBank] = useState(null);
  const navigate = useNavigate();

  const handleButtonClick = (bank) => {
    setSelectedBank(bank);
    navigate('/form', { state: { bank } });
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const data = await fetch(`${baseUrl}/banks?populate=%2A`);
    const json = await data.json();
    console.log(json);
    setPersonal(json.data || []);
  };
  const baseImgUrl = process.env.REACT_APP_IMG_BASE_URL;
  return (
    <div className="personal">
      <div className="banner-middle">
        <div className="text">
          <h1 className="txt-medium cc-head">Credit Cards</h1>
          <p className="pd-bt-10">
            Get credit cards in India that are best matched to your credit profile
          </p>
        </div>
      </div>
      {personal.map((item, index) => (
        <div key={index} className="personal-list">
          <div className="list">
            <div className="image">
              <img
                src={`${baseImgUrl}${item.attributes.logo.data.attributes.url}`}
                alt={item.attributes.logo.data.attributes.alternativeText || "Bank logo"}
              />
            </div>
            <div className="content">
              <h4>{item?.attributes?.Bank_name}</h4>
            </div>
            <div className="content">
              <h4>Reward Type</h4>
              <p>{item?.attributes?.Reward_type}</p>
            </div>
            <div className="content">
              <h4>Joining Fee</h4>
              <p>{item?.attributes?.Joining_fee}</p>
            </div>
            <div className="content">
              <h4>Annual Fee</h4>
              <p>{item?.attributes?.Annual_fee}</p>
            </div>
            <div className="content">
              <button className="available" onClick={() => handleButtonClick(item)}>
                Check Availability
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
