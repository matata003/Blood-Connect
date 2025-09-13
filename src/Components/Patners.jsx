import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Patners = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: false,
      mirror: true,  // animate out when scrolling back up
 // ensures animation runs every scroll (down or up)
    });
  }, []);

  return (
    <div className="service-row container" data-aos="fade-up">
      <h3 className="text-center mb-4">OUR PARTNERS</h3>

      <div className="row p-5">
        <div className="col-md-3 text-center" data-aos="zoom-in">
          <img
            src="images/Handsoul.jpg"
            alt=""
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "60%",
              objectFit: "cover",
            }}
          />
        </div>

        <div className="col-md-3 text-center" data-aos="zoom-in" data-aos-delay="200">
          <img
            src="images/Lifeguard.jpg"
            alt=""
            style={{
              width: "110px",
              height: "100px",
              borderRadius: "60%",
              objectFit: "cover",
            }}
          />
        </div>

        <div className="col-md-3 text-center" data-aos="zoom-in" data-aos-delay="400">
          <img
            src="images/stjohn.png"
            alt=""
            style={{
              width: "110px",
              height: "100px",
              borderRadius: "60%",
              objectFit: "cover",
            }}
          />
        </div>

        <div className="col-md-3 text-center" data-aos="zoom-in" data-aos-delay="600">
          <img
            src="images/society.jpeg"
            alt=""
            style={{
              width: "180px",
              height: "100px",
              borderRadius: "60%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Patners;
