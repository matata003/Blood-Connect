import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Handle form signup
  const submit = async (e) => {
    e.preventDefault();
    try {
      setLoading("Please wait...");
      setError("");

      const data = new FormData();
      data.append("username", username);
      data.append("email", email);
      data.append("phone", phone);
      data.append("location", location);
      data.append("password", password);

      await axios.post("https://tracyn.pythonanywhere.com/api/donor_signup", data);

      setLoading("");
      setSuccess("Signup successful! Please sign in.");
      navigate("/signin");
    } catch (err) {
      setLoading("");
      setError("Signup failed. Try again.");
    }
  };

  // Handle Google signup/login
  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      console.log("Google user info:", decoded);

      // Optionally send data to backend
      // await axios.post("https://tracyn.pythonanywhere.com/api/google_auth", {
      //   email: decoded.email,
      //   name: decoded.name,
      // });

      // Save session in localStorage if needed
      localStorage.setItem("user", JSON.stringify(decoded));

      // Redirect to home page
      navigate("/");
    } catch (err) {
      console.error("Google login error:", err);
      setError("Google Sign-In failed.");
    }
  };

  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-6 card shadow p-4">
        {/* Header row: Sign up + button */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="text-danger mb-0">Sign Up</h2>
          <Link to="/orgsignup" className="btn btn-sm btn-danger">
            Signup as Organization
          </Link>
        </div>

        {/* Status messages */}
        {loading && <b className="text-warning">{loading}</b>}
        {error && <b className="text-danger">{error}</b>}
        {success && <b className="text-success">{success}</b>}

        {/* Signup form */}
        <form onSubmit={submit}>
          <input
            type="text"
            placeholder="Enter your name"
            className="form-control mb-3"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="email"
            name="email"
            autoComplete="new-password"
            className="form-control mb-3"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="tel"
            className="form-control mb-3"
            placeholder="Enter your phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter your location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />

          <input
            type="password"
            name="new-password"
            autoComplete="new-password"
            className="form-control mb-3"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="btn btn-danger w-100">
            Submit
          </button>
        </form>

        {/* Divider */}
        <div className="text-center my-3">or</div>

        {/* Google Login */}
        <div className="">
          <GoogleLogin onSuccess={handleGoogleSuccess} onError={() => setError("Google Sign-In failed.")} />
        </div>

        {/* Already have account */}
        <p className="text-center mt-3">
          Already have an account?{" "}
          <Link to="/signin" className="text-danger">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
