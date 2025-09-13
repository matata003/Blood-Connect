import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const SectionOne = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,  // run every time you scroll into view
      mirror: true, // animate out when scrolling back up
    });
  }, []);

  return (
    <div className="row justify-content-center p-3 ">
      {/* card 1 */}
      <div className="col-md-4 mb-4" data-aos="fade-up">
        <div className="card shadow text-center">
          <img
            src="images/Donate1.png"
            alt="Donate Blood"
            className="card-img-top mx-auto d-block p-3 m-3"
            style={{ width: "30%", height: "auto", marginTop: "20px" }}
          />

          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Donate Blood</h5>
            <p className="card-text">
              Your donation can save lives. Be a hero today.
            </p>
            <div className="mt-auto">
              <Link to="/donate" className="btn btn-outline-danger w-100">
                   Donate
                </Link>
            </div>
          </div>
        </div>
      </div>

      {/* card 2 */}
      <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
        <div className="card shadow text-center">
          <img
            src="images/eligibility.png"
            alt="eligibility"
            className="card-img-top mx-auto d-block p-3 m-3"
            style={{ width: "30%", height: "auto", marginTop: "20px" }}
          />

          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Eligibility to donate</h5>
            <p className="card-text">
              Find out about the eligibility to donate today
            </p>
            <div className="mt-auto">
             <Link to="/eligibility" className="btn btn-outline-danger w-100">
                  Eligibity to donate
                </Link>
            </div>
          </div>
        </div>
      </div>

      {/* card 3 */}
      <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="400">
        <div className="card shadow text-center">
          <img
            src="images/volunteer.png"
            alt="volunteer"
            className="card-img-top mx-auto d-block p-3 m-3"
            style={{ width: "25%", height: "50%", marginTop: "20px" }}
          />

          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Become a volunteer</h5>
            <p className="card-text">
              Join the movement and become a part of the community.
            </p>
            <div className="mt-auto">
              <Link to="/about" className="btn btn-outline-danger w-100">
                  Become a volunteer
                </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Modals (unchanged) */}
      {/* modal1, modal2, modal3 code stays as is */}
    </div>
  );
};

export default SectionOne;
