import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
    const[username,setUsername]= useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[loading,setLoading] = useState("")
    const[error,setError] = useState("")

    const navigate = useNavigate();

    const submit =async (e) => {
        e.preventDefault();

        try {
            setError("")
            setLoading("")

            const data = new FormData();
            data.append("username",username)
            data.append("email", email);
            data.append("password", password);


            const response = await axios.post("https://tracyn.pythonanywhere.com//api/donor_signin",data)

            if (response.data.user) {
                navigate("/")
            }else{
                setLoading("")
                setError(response.data.message)
            }
        } catch (error) {
            setLoading("")
            setError(error.message)
            
        }
        
    };

    return ( 
        <div className="row justify-content-center mt-4">
            <div className="col-md-6 card shadow p-4">
                <h2 className="text-danger">Sign in</h2>
                <b className="text-warning">{loading}</b>
                <b className="text-danger">{error}</b>
                
                <form onSubmit={submit}>
                    <input type="text"
                    className="form-control"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    required/> <br />

                    <input type="email"
                    placeholder="Enter yourr email"
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
                    <p>Don't have an account?<Link to = "/signup">Sign Up</Link></p>

                </form>
            </div>
        </div>
     );
}
 
export default SignIn;