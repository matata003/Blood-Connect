import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CustomNavbar from "./CustomNavbar";

const Donate = () => {
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // ✅ Load PayPal SDK dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=Af440ZsgFZGrCaX8o3vnewyetgTCDJddn9EEV40jmwItHD4-2Fkpk9uomM4Zm0snoGGIcXsavRPWMS9h&currency=USD";
    script.async = true;
    script.onload = () => {
      if (window.paypal) {
        window.paypal
          .Buttons({
            style: {
              layout: "vertical",
              color: "gold",
              shape: "rect",
              label: "donate",
            },
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: amount && amount !== "" ? amount : "10.00",
                    },
                  },
                ],
              });
            },
            onApprove: async (data, actions) => {
              const order = await actions.order.capture();
              console.log("PayPal Donation Successful:", order);
              alert("Thank you for your donation!");
            },
            onError: (err) => {
              console.error("PayPal error:", err);
            },
          })
          .render("#paypal-donate-btn");
      }
    };
    document.body.appendChild(script);

    return () => {
      // cleanup to avoid multiple renders
      const container = document.getElementById("paypal-donate-btn");
      if (container) container.innerHTML = "";
    };
  }, [amount]);

  // ✅ Mpesa submit
  const Submit = async (e) => {
    e.preventDefault();
    try {
      setLoading("Please wait as we submit your data...");
      setError("");
      setSuccess("");

      const data = new FormData();
      data.append("amount", amount);
      data.append("phone", phone);

      const response = await axios.post(
        "https://tracyn.pythonanywhere.com/api/mpesa_payment",
        data
      );
      setSuccess(response.data.message);
      setLoading("");
    } catch (error) {
      setLoading("");
      setError(error.message);
    }
  };

  return (
    <div>
      <CustomNavbar />
      <div className="container my-5">
        <div className="row g-4">
          {/* M-Pesa donation */}
          <div className="col-md-4">
            <div className="card shadow h-100 p-3">
              <h5 className="card-title text-center mb-3">Donate via M-Pesa</h5>
              <img
                src="images/mpesa.png"
                alt="M-Pesa"
                className="card-img-top mx-auto d-block mb-3"
                style={{ width: "40%", height: "auto" }}
              />
              <form onSubmit={Submit}>
                <input
                  type="number"
                  placeholder="Enter Amount to donate"
                  className="form-control mb-3"
                  required
                  onChange={(e) => setAmount(e.target.value)}
                />
                <input
                  type="tel"
                  placeholder="Enter Mpesa number 2547xxxxxxxx"
                  className="form-control mb-3"
                  required
                  onChange={(e) => setPhone(e.target.value)}
                />
                <button className="btn btn-success w-100 mb-2">
                  {loading ? "Processing..." : "Donate Money"}
                </button>
                <p className="text-success small">{success}</p>
                <p className="text-danger small">{error}</p>
              </form>
            </div>
          </div>

          {/* PayPal donation */}
          <div className="col-md-4">
            <div className="card shadow h-100 text-center p-3">
              <h5 className="card-title mb-3">Donate with PayPal</h5>
              <img
                src="images/paypal.png"
                alt="PayPal"
                className="card-img-top mx-auto d-block mb-3"
                style={{ width: "40%", height: "auto" }}
              />
              <div id="paypal-donate-btn" className="mt-3"></div>
            </div>
          </div>

            {/* Blood donation */}
          <div className="col-md-4">
            <div className="card shadow h-100 text-center p-3">
              <h5 className="card-title mb-3">Donate Blood</h5>
              <img
                src="images/Donate1.png"
                alt="Donate Blood"
                className="card-img-top mx-auto d-block mb-3"
                style={{ width: "40%", height: "auto" }}
              />
              <p className="card-text">
               Became a donor and donate blood to save lives. 
              </p>
              <div className="mt-auto">
                <Link to="/signup" className="btn btn-outline-danger w-100">
                  Become a Donor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
