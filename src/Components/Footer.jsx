import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer text-light  ">
        <div className="container">
          <div className="row gy-4">

            {/* About / Contact */}
            <div className="col-md-3">
              <div className="d-flex align-items-center mb-3">
                <img
                  src="/images/Donate1.png"
                  alt="BloodConnect Logo"
                  width="50"
                  height="50"
                  className="rounded-circle border me-2"
                />
                <h5 className="text-uppercase fw-bold mb-0">BloodConnect</h5>
              </div>

              <p>
                Saving lives through blood donations. Join us in making a difference today.
              </p>

              <p className="mb-1">
                <i className="bi bi-telephone-fill me-2"></i> +254 700 123 456
              </p>
              <p>
                <i className="bi bi-envelope-fill me-2"></i> info@bloodconnect.org
              </p>

              <div className="mt-3">
                <a href="#" className="text-light me-3 fs-5"><i className="fab fa-facebook"></i></a>
                <a href="#" className="text-light me-3 fs-5"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-light fs-5"><i className="fab fa-instagram"></i></a>
              </div>
            </div>

            {/* Useful Links */}
            <div className="col-md-3">
              <h5 className="text-uppercase fw-bold mb-3">Useful Links</h5>
              <ul className="list-unstyled">
                <Link to ="/" className="text-light text-decoration-none">Home</Link> <br />
                <Link to ="about" className="text-light text-decoration-none">about</Link> <br />
                <Link to ="sinup" className="text-light text-decoration-none">signup</Link>
                <Link to ="donate" className="text-light text-decoration-none">Donate</Link>

               
              </ul>
            </div>

            {/* Services */}
            <div className="col-md-3">
              <h5 className="text-uppercase fw-bold mb-3">Our Services</h5>
              <ul className="list-unstyled">
                <li><a href="#donate" className="text-light text-decoration-none">Blood Donation</a></li>
                <li><a href="#drives" className="text-light text-decoration-none">Donation Drives</a></li>
                <li><a href="#volunteer" className="text-light text-decoration-none">Volunteer</a></li>
                <li><a href="#support" className="text-light text-decoration-none">Support</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="col-md-3">
              <h5 className="text-uppercase fw-bold mb-3">Newsletter</h5>
              <p>Subscribe to get updates on our upcoming donation drives.</p>
              <form>
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control rounded-start-pill"
                    placeholder="Enter email"
                    required
                  />
                  <button className="btn btn-danger rounded-end-pill" type="submit">
                    Subscribe
                  </button>
                </div>
                
              </form>
               
            </div>

          </div>

          
          <div className="text-center small">
            &copy; {new Date().getFullYear()} <strong>BloodConnect</strong>. All Rights Reserved.Developed bt Tracy Matata
          </div> 
        </div>
      </footer>
    </div>
  );
}

export default Footer;
