import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import PureCounter from "@srexi/purecounterjs";
import CustomNavbar from "./CustomNavbar";
import { Link } from "react-router-dom";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    new PureCounter();
  }, []);

  return (
    <div className="">
      <CustomNavbar/>
    <section
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#f9ebebff",
        padding: "60px 5%",
      }}
    >
      {/* Left Side - Words */}
      <div
        style={{
          flex: 1,
          paddingRight: "40px",
        }}
        data-aos="fade-right"
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            color: "#d9534f", // lighter blood red
            marginBottom: "20px",
          }}
        >
          Donate Blood, Save Lives ,Share Hope
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.8",
            color: "#444",
            marginBottom: "30px",
          }}
        >
          Every drop counts. Be part of the movement that saves millions of
          lives. Join BloodConnect today and give the gift of life.
        </p>

       

        {/* Counters */}
        <div
          style={{
            display: "flex",
            gap: "40px",
            marginTop: "40px",
          }}
        >
          <div>
            <h2
              data-purecounter-start="0"
              data-purecounter-end="3000"
              data-purecounter-duration="2"
              className="purecounter"
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                color: "#d9534f",
              }}
            ></h2>
            <p style={{ color: "#555", fontSize: "0.95rem" }}>Donors Joined</p>
          </div>
          <div>
            <h2
              data-purecounter-start="0"
              data-purecounter-end="500"
              data-purecounter-duration="2"
              className="purecounter"
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                color: "#d9534f",
              }}
            ></h2>
            <p style={{ color: "#555", fontSize: "0.95rem" }}>
              Successful Drives
            </p>
          </div>
          <div>
            <h2
              data-purecounter-start="0"
              data-purecounter-end="5000"
              data-purecounter-duration="2"
              className="purecounter"
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                color: "#d9534f",
              }}
            ></h2>
            <p style={{ color: "#555", fontSize: "0.95rem" }}>
              Lives Impacted
            </p>
          </div>
        </div>

         {/* Button */}
       {/* Donate Button */}


<div
  style={{
    display: "inline-block",
    backgroundColor: "#e74c3c",
    color: "#fff",
    padding: "12px 30px",
    borderRadius: "30px",
    fontSize: "1rem",
    fontWeight: "600",
    textDecoration: "none",
    transition: "0.3s",
    marginRight: "15px", // space between buttons
    textAlign: "center",
  }}
  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#c0392b")}
  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#e74c3c")}
>
  <Link
    to="/donate"
    style={{
      color: "#fff",
      textDecoration: "none",
      display: "block",
    }}
  >
    Donate
  </Link>
</div>


{/* About Button */}

<div
  style={{
    display: "inline-block",
    backgroundColor: "#e74c3c",
    color: "#fff",
    padding: "12px 30px",
    borderRadius: "30px",
    fontSize: "1rem",
    fontWeight: "600",
    textDecoration: "none",
    transition: "0.3s",
    marginRight: "15px", // space between buttons
    textAlign: "center",
  }}
  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#c0392b")}
  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#e74c3c")}
>
  <Link
    to="/about"
    style={{
      color: "#fff",
      textDecoration: "none",
      display: "block",
    }}
  >
    About
  </Link>
</div>

      </div>

      

      {/* Right Side - Image */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        data-aos="fade-left"
      >
        <img
          src="images/donate1.jpg" // Use your previous blood donation image
          alt="Donate Blood"
          style={{
            width: "100%",
            maxWidth: "350px",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            transform: "scale(1)",
            transition: "0.5s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>
    </section>
    </div>
  );
};

export default Hero;
