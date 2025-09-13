import React from "react";

const EligibilityPage = () => (
  <div style={{ backgroundColor: "#f9ebe8ff", minHeight: "100vh", padding: "50px 0" }}>
    <div className="container">
      <div className="card shadow-lg border-0 rounded-4 p-5">
        {/* Title */}
        <h2 className="text-center mb-4 text-danger fw-bold">
          Blood Donation Eligibility
        </h2>
        

        {/* Basic Requirements */}
        <div className="mb-5">
          <h4 className="text-danger border-bottom ">Basic Requirements</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item ">
              <i className="bi bi-person-check text-success me-2"></i>
              Age: 17+ (16 with parental consent)
            </li>
            <li className="list-group-item py-3">
              <i className="bi bi-clipboard-check text-success me-2"></i>
              Weight: At least 110 lbs (≈ 50 kg)
            </li>
            <li className="list-group-item py-3">
              <i className="bi bi-heart-pulse text-success me-2"></i>
              Good overall health & infection free
            </li>
            <li className="list-group-item py-3">
              <i className="bi bi-id-card text-success me-2"></i>
              Bring a valid photo ID
            </li>
            <li className="list-group-item py-3">
              <i className="bi bi-cup-hot text-success me-2"></i>
              Eat within 2 hours & stay hydrated before donating
            </li>
          </ul>
        </div>

        {/* Donation Frequency */}
        <div className="mb-5">
          <h4 className="text-danger border-bottom pb-2">Donation Frequency</h4>
          <div className=" border-start border-4 border-danger mt-3">
            <i className="bi bi-clock-history me-2 text-danger"></i>
            Whole blood can be donated every <strong>8 weeks (56 days)</strong>.
          </div>
        </div>

        {/* Additional Checks */}
        <div className="mb-5">
          <h4 className="text-danger border-bottom pb-2">Additional Checks</h4>
          <ul className="list-group list-group-flush mt-3">
            <li className="list-group-item py-3">
              <i className="bi bi-thermometer-half text-success me-2"></i>
              Vital signs: temperature, blood pressure, hemoglobin
            </li>
            <li className="list-group-item py-3">
              <i className="bi bi-globe2 text-success me-2"></i>
              Review of travel history, medications, tattoos
            </li>
          </ul>
        </div>

        {/* Disclaimer */}
        <p className="text-muted small text-center">
          These are general guidelines and may vary by location.  
          Final eligibility is determined at the donation site after a brief screening.
        </p>

        {/* CTA */}
        <div className="text-center mt-4">
          <a href="/signup" className="btn btn-danger btn-lg px-5 rounded-pill shadow">
            Register to Donate
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default EligibilityPage;
