import abc from '../assets/images/abc.png';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="footer-section">
            <div className="containers">
                <div className="rows top">
                    <div className="col-xl-4 col-lg-4 col-sm-12 col-12">
                        <div className="mb-4 mb-lg-0">
                            <Link to="/"><img src={abc} alt="Abc Bank" /></Link>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                        <form className="rows g-0 align-items-center" action="newsletter.php" method="post">
                            <div className="col-md-4 col-12 mb-3 mb-md-0">
                                <h3 className="text-white mb-0">Signup Our Newsletter</h3>
                            </div>
                            <div className="col-md-8 col-12">
                                <div className="input-group">
                                    <input type="email" className="form-control border-0 shadow-none" id="newsletter" placeholder="Write email address" required aria-describedby="basic-addon2" />
                                    <a href="#" className="btn btn-primary" id="basic-addon2">Go!</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <hr className="my-6 opacity-25" />
                <div className="py-6">
                    <div className="rows">
                        <div className="col-md-8">
                            <p className="text-muted">© Copyright 2021 Borrows Loan Company. All Rights Reserved</p>
                        </div>
                        <div className="col-md-4 text-lg-end">
                            <div className="dropup me-1 mt-2 mt-lg-0 d-inline">
                                <a className="dropdown-toggle text-muted" href="#" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Privacy &amp; Policy
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
