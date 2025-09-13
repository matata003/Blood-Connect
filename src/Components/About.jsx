import { Navbar } from "react-bootstrap";
import CustomNavbar from "./CustomNavbar";
import Footer from "./Footer";
import Patners from "./Patners";

const About = () => {
    return (  
        <div className="">
            <CustomNavbar/>
            <div className="about row p-5 ">
                <h2>About Us</h2> <br />
                <p>Blood Connect is a life-saving platform that bridges the gap between blood donors, recipients, and health organizations. Our mission is to make blood donation simple, accessible, and reliable by connecting communities with verified donors and hosting drives that save lives.

              </p> <br /> <br />

              
                
            </div>
            <div className="p-3">
              <Patners/>
              </div>
        </div>
    );
}
 
export default About;