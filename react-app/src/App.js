import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomeLoan from './components/HomeLoan';
import CreditCard from './components/CreditCard';
import PersonalLoan from './components/PersonalLoan';
import EducationLoan from './components/EducationLoan';
import GoldLoan from './components/GoldLoan';
import BusinessLoan from './components/BusinessLoan';
import Form from './components/Form';
import LoanCalculator from './components/LoanCalculator';
import EligibilityCalculator from './components/EligibilityCalculator';
import Blog from './components/Blog';
import FamilyInsurance from './components/FamilyInsurance';
import LifeInsurance from './components/LifeInsurance';
import HealthInsurance from './components/HealthInsurance';

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  
  return (
    <>
      <Header />
      {isHome ? <Body /> : null}
      <Routes>
        <Route path="/homeloan" element={<HomeLoan />} />
        <Route path="/creditcard" element={<CreditCard />} />
        <Route path="/personalloan" element={<PersonalLoan />} />
        <Route path="/educationloan" element={<EducationLoan />} />
        <Route path="/businessloan" element={<BusinessLoan />} />
        <Route path="/goldloan" element={<GoldLoan />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/form" element={<Form />} />
        <Route path="/loancalculator" element={<LoanCalculator />} />
        <Route path="/EligibilityCalculator" element={<EligibilityCalculator />} />
        <Route path="/familyinsurance" element={<FamilyInsurance />} />
        <Route path="/lifeinsurance" element={<LifeInsurance />} />
        <Route path="/healthinsurance" element={<HealthInsurance />} />
      </Routes>
      <Footer />
    </>
  );
};

function App() {
  return (
    <div className='App'>
    <Router>
      <Layout />
    </Router>
    </div>
  );
}

export default App;
