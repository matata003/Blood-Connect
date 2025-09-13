import axios from "axios";
import { useState } from "react";

const AddDrive = () => {
  const [drive_name, setDrive_name] = useState("");
  const [drive_desc, setDrive_desc] = useState("");
  const [location, setLocation] = useState("");
  const [org_id, setOrg_id] = useState("");
  const [drive_date, setDrive_date] = useState(""); 
  const [status, setStatus] = useState("Upcoming");
  const [drive_photo, setDrive_photo] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    try {
      setLoading("Please wait as we submit your data...");
      setSuccess("Success! Drive added successfull ");
      setError("");

      const data = new FormData();
      data.append("drive_name", drive_name);
      data.append("drive_desc", drive_desc);
      data.append("location", location);
      data.append("org_id", org_id);
      data.append("drive_date", drive_date); 
      data.append("status", status);
      data.append("drive_photo", drive_photo);

      const response = await axios.post(
        "https://tracyn.pythonanywhere.com/api/add_drive",
        data
      );

      setSuccess("");
      setLoading("");

      // ✅ Clear the form fields
      setDrive_name("");
      setDrive_desc("");
      setLocation("");
      setOrg_id("");
      setDrive_date("");
      setStatus("Upcoming");
      setDrive_photo("");
    } catch (error) {
      setLoading("");
      setError(error.message);
    }
  };

  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-6 card shadow p-4">
        
        

        <h2 className="text-danger">Host a Blood Drive</h2>
        <b className="text-warning">{loading}</b>
        <b className="text-success">{success}</b>
        <b className="text-danger">{error}</b>

        <form onSubmit={submit}>
          <input
            type="text"
            placeholder="Enter the drive name"
            className="form-control"
            value={drive_name}
            onChange={(e) => setDrive_name(e.target.value)}
            required
          />{" "}
          <br />

          <input
            type="text"
            placeholder="Enter Blood drive description"
            className="form-control"
            value={drive_desc}
            onChange={(e) => setDrive_desc(e.target.value)}
            required
          />{" "}
          <br />

          <input
            type="text"
            placeholder="Enter Blood drive location"
            className="form-control"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />{" "}
          <br />

          <input
            type="number"
            placeholder="Enter organization ID"
            className="form-control"
            value={org_id}
            onChange={(e) => setOrg_id(e.target.value)}
            required
          />{" "}
          <br />

          <label htmlFor="donationDate" className="form-label">
            Drive Date
          </label>
          <input
            type="date"
            id="donationDate"
            name="donationDate"
            className="form-control"
            value={drive_date}
            onChange={(e) => setDrive_date(e.target.value)}
            required
          />{" "}
          <br />

          <select
            id="status"
            className="form-control"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="Upcoming">Upcoming</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Completed">Completed</option>
          </select>
          <br />

          <label htmlFor="">Drive photo</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => setDrive_photo(e.target.files[0])}
            required
          />{" "}
          <br />

          <button className="btn btn-danger">Add Drive</button>
        </form>
      </div>
    </div>
  );
};

export default AddDrive;
