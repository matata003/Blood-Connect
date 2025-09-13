import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const OrgSignin = () => {
    const[org_name,setOrg_name] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[loading,setLoading] = useState("")
    const[error,setError] = useState("")

    const navigate = useNavigate()

    const submit = async (e) => {
        e.preventDefault();

        try {

          const  data = new FormData();
          data.append("org_name",org_name)
          data.append("email", email);
          data.append("password", password);

          const response = await axios.post("https://tracyn.pythonanywhere.com//api/org_signin",data)
           if (response.data.user) {
                navigate("/")
            }else{
                setLoading("")
                setError(response.data.message)
            }
        } catch (error) {
            setError(error.message)
            setLoading("")
            
        }

        
    }
    return ( 
         <div className="row justify-content-center mt-4">
            <div className="col-md-6 card shadow p-4">
                <h2 className="text-danger">Organisation Sign in</h2>
                <b className="text-warning">{loading}</b>
                <b className="text-danger">{error}</b>
                
                <form onSubmit={submit}>
                    <input type="text"
                    className="form-control"
                    placeholder="Enter your org_name"
                    value={org_name}
                    onChange={(e)=>setOrg_name(e.target.value)}
                    required/> <br />

                    <input type="email"
                    placeholder="Enter your organization email"
                    className="form-control"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required/> <br />

                    <input type="password"
                    className="form-control"
                    placeholder="Ener your password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    required /> <br />
                    
                    <button className="btn btn-danger"> Sign in</button> <br />

                </form>
            </div>
        </div>
     );
}
 
export default OrgSignin ;