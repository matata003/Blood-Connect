import axios from "axios";
import { useState } from "react";

const AddAlert = () => {
    const[orgName,setOrgName] = useState("")
    const[location,setLocation] = useState("")
    const[message,setMessage] = useState("")
    const[blood_type,setBlood_type] = useState("")
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState("");
    const [error, setError] = useState("");

    const submit = async (e) => {
        e.preventDefault();

        try {
            setLoading("please waait as we submit your data")
            setSuccess("")

            const data = new FormData();
            data.append("OrgName",orgName)
            data.append("location",location)
            data.append("message",message)
            data.append("blood_type",blood_type)
            

            const response = await axios.post("https://tracyn.pythonanywhere.com//api/addalert",data)
            setSuccess("Emergency Alert added successfully")
            setLoading("")
            

        } catch (error) {
            setLoading("")
            setError(error.message)
            
        }
        
    }


    return (  
        <div className="row justify-content-center mt-4">
            <div className="col-md-6 card shadow p-4">
                <h2 className="text-danger">Add an Emergency Alert</h2>
                <b className="text-warning">{loading}</b>
                <b className="text-danger">{success}</b>

                <form onSubmit={submit}>

                <input type="text"
                  placeholder="Enter the organization name"
                  className="form-control"
                  value={orgName} 
                  onChange={(e)=>setOrgName(e.target.value)}
                  required/> <br />

                  

                 <input type="location"
                  placeholder="Enter the location"
                  className="form-control"
                  value={location}
                  onChange={(e)=>setLocation(e.target.value)}
                  required/> <br />

                 <input type="text"
                  placeholder="Enter the description of the Alert"
                  className="form-control"
                  value={message}
                  onChange={(e)=>setMessage(e.target.value)}
                  required/> <br />

                <input type="text"
                  placeholder="Enter the blood type needed"
                  className="form-control"
                  value={blood_type}
                  onChange={(e)=>setBlood_type(e.target.value)}
                  required/> <br />


                 <button className="btn btn-danger">Add Emergency Alert</button>

                </form>

            </div>

        </div>
    );
}
 
export default AddAlert;