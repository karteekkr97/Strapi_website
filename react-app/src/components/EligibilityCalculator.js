import React, { useState } from "react";

const EligibilityCalculator = () => {
  const [formData, setFormData] = useState({
    loanAmount: "",
    netIncome: "",
    existingCommitments: "",
    loanTenure: "",
    interestRate: "",
  });
  const [isEligible, setIsEligible] = useState(null);
  const [monthlyEMI, setMonthlyEMI] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
 //const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
  // Calculate EMI
  const calculateEMI = (P, R, N) => {
    return (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
  };

  // Check eligibility
  const checkEligibility = (e) => {
    e.preventDefault();

    const { loanAmount, netIncome, existingCommitments, loanTenure, interestRate } = formData;

    const P = parseFloat(loanAmount); // Loan Amount
    const income = parseFloat(netIncome); // Net income per month
    const commitments = parseFloat(existingCommitments); // Existing loan commitments
    const tenureMonths = parseFloat(loanTenure) * 12; // Convert loan tenure to months
    const annualInterestRate = parseFloat(interestRate) / 100;
    const r = annualInterestRate / 12; // Monthly interest rate

    const disposableIncome = income - commitments; // Disposable income
    const calculatedEMI = calculateEMI(P, r, tenureMonths); // Monthly EMI

    setMonthlyEMI(calculatedEMI.toFixed(2));

    // Check if EMI exceeds 50% of disposable income
    if (calculatedEMI <= disposableIncome * 0.5) {
      setIsEligible(true); // Eligible if EMI is less than or equal to 50% of disposable income
    } else {
      setIsEligible(false); // Not eligible
    }
  };

  return (
    <div className='loan-calc'>
    <div className="loan-eligibility">
      <h2>Loan Eligibility Checker</h2>
      <form onSubmit={checkEligibility} className="form eligicalc">
        <div className="fields">
        <div className="field">
          <label>Loan Amount (₹):</label>
          <input
            type="number"
            name="loanAmount"
            value={formData.loanAmount}
            onChange={handleChange}
            placeholder="Enter loan amount"
            required
          />
        </div>

        <div className="field">
          <label>Net Income per Month (₹):</label>
          <input
            type="number"
            name="netIncome"
            value={formData.netIncome}
            onChange={handleChange}
            placeholder="Enter your net monthly income"
            required
          />
        </div>

        <div className="field">
          <label>Existing Loan Commitments (₹):</label>
          <input
            type="number"
            name="existingCommitments"
            value={formData.existingCommitments}
            onChange={handleChange}
            placeholder="Enter existing loan commitments"
            required
          />
        </div>

        <div className="field">
          <label>Loan Tenure (Years):</label>
          <input
            type="number"
            name="loanTenure"
            value={formData.loanTenure}
            onChange={handleChange}
            placeholder="Enter loan tenure in years"
            required
          />
        </div>

        <div className="field">
          <label>Rate of Interest (%):</label>
          <input
            type="number"
            step="0.01"
            name="interestRate"
            value={formData.interestRate}
            onChange={handleChange}
            placeholder="Enter rate of interest"
            required
          />
        </div>

        <button type="submit">Check Eligibility</button>
        </div>
      </form>
    </div>
    <div className='emi'>  {monthlyEMI && (
      <div>
        <h3>Estimated Monthly EMI: ₹{monthlyEMI}</h3>
      </div>
    )}

    {isEligible !== null && (
      <div className="eligibility-result">
        {isEligible ? (
          <h3>Congratulations! You are eligible for the loan.</h3>
        ) : (
          <h3>Sorry, you are not eligible for the loan.</h3>
        )}
      </div>
    )}</div>
    </div>
  );
};

export default EligibilityCalculator;
