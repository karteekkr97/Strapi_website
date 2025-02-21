import ImageSlider from "./ImageSlider";
import loan1 from '../assets/images/loan1.svg';
import car from '../assets/images/car.svg';
import credit from '../assets/images/credit.svg';
import mortgage from '../assets/images/mortgage.svg';
import ContentSlider from "./ContentSlider";


const Body =()=>{
    return (
        
        <div id="services" className="services-section">
             <div className="hero-content">
             <ImageSlider />
      </div>
      <div className="container">
					<div className="row">
						<div className="col-xl-3 col-lg-3 col-md-6 col-6">
							<div className="d-flex align-items-center justify-content-center py-4">
								<div><img src={mortgage} alt="Borrow - Loan Company Website Template" className="icon-svg-1x" /></div>
								<div className="ms-4 lh-1">
									<h2 className="mb-0 fw-bold">3.74%</h2>
									<p className="mb-0">Home Loans</p>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6 col-6 border-start-lg">
							<div className="d-flex align-items-center justify-content-center py-4">
								<div><img src={loan1} alt="Borrow - Loan Company Website Template" className="icon-svg-1x" /></div>
								<div className="ms-4 lh-1">
									<h2 className="mb-0 fw-bold">8.96%</h2>
									<p className="mb-0">Personal Loans</p>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6 col-6 border-start-lg">
							<div className="d-flex align-items-center justify-content-center py-4">
								<div><img src={car} alt="Borrow - Loan Company Website Template" className="icon-svg-1x" /></div>
								<div className="ms-4 lh-1">
									<h2 className="mb-0 fw-bold">6.70%</h2>
									<p className="mb-0">Car Loans</p>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6 col-6 border-start-lg">
							<div className="d-flex align-items-center justify-content-center py-4">
								<div><img src={credit} alt="Borrow - Loan Company Website Template" className="icon-svg-1x" /></div>
								<div className="ms-4 lh-1">
									<h2 className="mb-0 fw-bold">9.00%</h2>
									<p className="mb-0">Credit card</p>
								</div>
							</div>
						</div>
					</div>
				</div>
                <div className="Offering-content">
                    <div>
								<h1 className="mb-3">Find Loan Products We Offers</h1>
								<p className="lead px-md-8">
									We will match you with a loan program that meet your financial need. In short term liquidity, by striving to make funds available to them
									<span><strong>within 24 hours of application.</strong></span>
								</p>
							</div>
                            </div>
                            <div className="loans-category">
                            <ContentSlider />
                            </div>
                            <div className="Offering-content">
                    <div>
								<h1 className="mb-3">Fast & Easy Application Process.</h1>
								<p className="lead px-md-8">
								Experience a fast and easy application process for securing your loan with minimal hassle
								</p>
							</div>
                            </div>
                            <div className="loan-description">
                                <div className="content">
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
							<div className="card text-center mb-6 mt-4">
								<div className="icon-shape icon-lg bg-white border border-primary border-2 rounded-circle mx-auto mt-n4 text-primary">
									<span className="fs-3 fw-bold">1</span>
								</div>
								<div className="card-body p-6">
									<h3 className="mb-2">Choose Loan Amount</h3>
									<p className="mb-0">Select the loan amount that best fits your financial needs and goals.</p>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
							<div className="card text-center mb-6 mt-4">
								<div className="icon-shape icon-lg bg-white border border-primary border-2 rounded-circle mx-auto mt-n4 text-primary">
									<span className="fs-3 fw-bold">2</span>
								</div>
								<div className="card-body p-6">
									<h3 className="mb-2">Approved Your Loan</h3>
									<p className="mb-0">Your loan has been approved, bringing you one step closer to fulfilling your goals</p>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
							<div className="card text-center mb-6 mt-4">
								<div className="icon-shape icon-lg bg-white border border-primary border-2 rounded-circle mx-auto mt-n4 text-primary">
									<span className="fs-3 fw-bold">3</span>
								</div>

								<div className="card-body p-6">
									<h3 className="mb-2">Get Your Cash</h3>
									<p className="mb-0">Receive your cash quickly and start using it for your financial needs.</p>
								</div>
							</div>
						</div>
					</div>
                    </div>
                    <div className="Offering-content">
                    <div>
								<h1 className="mb-3">Why People Choose Us</h1>
								<p className="lead px-md-8">
                                People choose us for our fast, hassle-free loan approvals and flexible repayment options. We prioritize customer satisfaction with transparent and reliable services.
								</p>
							</div>
                            </div>
                    <div className="loan-description why-people">
                                <div className="content">
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
							<div className="card text-center mb-6 mt-4">
								<div className="card-body p-6">
                                <div class="mb-4">
										<svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" fill="currentColor" class="bi bi-people text-primary" viewBox="0 0 16 16">
											<path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
										</svg>
									</div>
									<h3 className="mb-2">Dedicated Specialists</h3>
									<p className="mb-0">Our dedicated specialists offer personalized support and expert guidance to ensure your loan process is smooth and tailored to your needs.</p>
                                    <a href="#!" class="btn btn-outline-primary btn-sm">Meet the team</a>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
							<div className="card text-center mb-6 mt-4">
								<div className="card-body p-6">
                                <div class="mb-4">
										<svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" fill="currentColor" class="bi bi-trophy text-primary" viewBox="0 0 16 16">
											<path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"></path>
										</svg>
									</div>
									<h3 className="mb-2">Success Stories Rating</h3>
									<p className="mb-0">Read our success stories and see how clients have benefited from our services. Our high ratings reflect the positive experiences and satisfaction of our customers</p>
                                    <a href="#!" class="btn btn-outline-primary btn-sm">View Client Review</a>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
							<div className="card text-center mb-6 mt-4">

								<div className="card-body p-6">
                                <div class="mb-4">
										<svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" fill="currentColor" class="bi bi-calculator text-primary" viewBox="0 0 16 16">
											<path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"></path>
											<path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z"></path>
										</svg>
									</div>
									<h3 className="mb-2">No front Appraisal Fees!</h3>
									<p className="mb-0">Experience a hassle-free loan process with no front appraisal fees. We keep things transparent and straightforward with no hidden costs.</p>
                                    <a href="#!" class="btn btn-outline-primary btn-sm">Why choose us</a>
								</div>
							</div>
						</div>
					</div>
                    </div>
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <h3>Personal Loans</h3>
            <p>Quick approval and low interest rates for personal loans.</p>
          </div>
          <div className="service-card">
            <h3>Business Loans</h3>
            <p>Flexible financing options for your business needs.</p>
          </div>
          <div className="service-card">
            <h3>Home Loans</h3>
            <p>Competitive rates and terms for home buyers.</p>
          </div>
        </div>
      

      <div id="testimonials" className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"The loan process was so easy and fast. Highly recommend!"</p>
            <span>- John Doe</span>
          </div>
          <div className="testimonial-card">
            <p>"Excellent customer service and very reasonable rates."</p>
            <span>- Jane Smith</span>
          </div>
        </div>
      </div>
      </div>
    )
}

export default Body;