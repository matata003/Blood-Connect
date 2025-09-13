import axios from "axios";
import { useState } from "react";

const OrgSignup = () => {
    const[org_name,setOrg_name]= useState("")
    const[email,setEmail] = useState("")
    const[phone,setPhone] = useState("")
    const[location,setLocation] = useState("")
    const[type,setType] = useState("")
    const[password,setPassword] = useState("")
    // const[verification,setVerification] = useState(0)
    const[success,setSuccess] = useState("")
    const[loading,setLoading] = useState("")
    const[error,setError] = useState("")



    const submit = async (e) => {
        e.preventDefault();

        try {
            setLoading("please wait...")
            setError("")

            const data = new FormData();
            data.append("org_name",org_name);
            data.append("email",email);
            data.append("phone",phone);
            data.append("location",location);
            data.apend("type",type);
            // data.append("verification",verification)
            data.append("password",password)

            const response = await axios.post ("https://tracyn.pythonanywhere.com//api/org_signup",data);
            setSuccess(success)
            setLoading("");
        } catch (error) {
            setError(error)
        }
    };

    return ( 
        <div className=" row justify-content-center mt-4">
            <div className="col-md-6 card shadow p-4">
                <h2 className=" text-center text-danger"> Organization Sign up </h2>
                <b classname = "text-warning">{loading}</b>
                <b className="text-danger">{error}</b>

                <form onSubmit = {submit}>
                    <input 
                    type = "text"
                    className="form-control"
                    placeholder="Enter name of organization"
                    value = {org_name}
                    onChange={(e) => setOrg_name(e.target.value)}
                    required
                    /> <br />

                    <input
                     type="email" 
                     className="form-control"
                     placeholder="Enter organization email "
                     value={email} 
                     onChange={(e)=> setEmail(e.target.value)}
                     required
                     /> <br />

                     <input
                     type="tel"
                     className="form-control"
                     placeholder="Enter the organisations phone number"
                     value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                     required
                     
                     /> <br />

                     <input 
                     type="text"
                     className="form-control" 
                     placeholder="Enter the location"
                     value={location}
                     onChange={(e)=>setLocation(e.target.value)}
                     required
                     /> <br />

                     <input 
                     type="password" 
                     className="form-control"
                     placeholder="Enter password"
                     value={password}
                     onChange={(e)=>setPassword(e.target.value)}
                     required
                     /> <br />

                     <select
                     className="form-control"
                     onChange={(e)=>setType(e.target.value)}
                     required>

                        <option value="">Select organization type</option>
                        <option value = "NGO">NGO</option>
                        <option value = "Hospital">Hospital</option>
                        <option value = "Initiative">Initiative</option>
                     </select> <br />

                    {/* radio button for verification */}

                    <button className="submit btn btn-danger form-control">submit</button>

                </form>
            </div>

        </div>
     );
}
 
export default OrgSignup;