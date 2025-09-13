import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "./Hero";
import SectionOne from "./SectionOne";
import Patners from "./Patners";
import Footer from "./Footer";

const GetDrive = () => {
  const [drive, setDrive] = useState([]);
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const img_url = "https://tracyn.pythonanywhere.com/static/images/";

  useEffect(() => {
    const getBloodDrive = async () => {
      try {
        setLoading("Please wait...");
        setError("");
        const response = await axios.get(
          "https://tracyn.pythonanywhere.com/api/get_drive"
        );
        setDrive(response.data);
        setLoading("");
      } catch (error) {
        setLoading("");
        setError(error.message);
      }
    };
    getBloodDrive();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString || dateString === "0000-00-00") return "To be announced";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div>
      <Hero />
      <SectionOne />

      <div className="container my-3">
        <h3 className="mb-1  text-center fw-bold ">
          Available Blood Drives
        </h3>
        <b className="text-warning">{loading}</b>
        <b className="text-danger">{error}</b>

        <div className="row">
          {drive.map((drives, index) => (
            <div
              className="col-md-4 mb-4 p-2"
              key={drives.drive_id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div
                className="card h-100 shadow-lg border-0 rounded-4 overflow-hidden drive-card"
                style={{ transition: "0.3s ease" }}
              >
                {/* Ribbon / Status */}
                <div
                  className="position-absolute top-0 start-0 px-3 py-1 text-white fw-bold"
                  style={{
                    background:
                      drives.status === "Ongoing"
                        ? "green"
                        : drives.status === "Completed"
                        ? "gray"
                        : "orange",
                    borderBottomRightRadius: "12px",
                  }}
                >
                  {drives.status ? drives.status : "Upcoming"}
                </div>

                {/* Drive Image */}
                {drives.drive_photo && (
                  <img
                    src={img_url + drives.drive_photo}
                    alt={drives.drive_name}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                )}

                {/* Card Body */}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{drives.drive_name}</h5>
                  <p className="text-muted small flex-grow-1">
                    {drives.drive_desc}
                  </p>

                  {/* Location */}
                  <p className="mb-1">
                    <i className="bi bi-geo-alt-fill text-danger me-2"></i>
                    <strong>{drives.location}</strong>
                  </p>

                  {/* Date */}
                  <p className="mb-3">
                    <i className="bi bi-calendar-event-fill text-primary me-2"></i>
                    {formatDate(drives.drive_date)}
                  </p>

                  {/* CTA Button */}
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Patners />
      <Footer />
    </div>
  );
};

export default GetDrive;
