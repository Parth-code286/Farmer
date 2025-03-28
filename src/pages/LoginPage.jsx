import { useState } from "react";
import "./Login.css";
// import "../";
import { NavLink } from "react-router-dom";
import { Dashboard } from "./DashboardSignup";

export const LoginReact = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({
    phoneNumber: "",
    otp: "",
    password: "",
  });

  const validateInput = () => {
    // Check if phone number is exactly 10 digits
    if (!/^\d{10}$/.test(user.phoneNumber)) {
      alert("Phone number must be exactly 10 digits.");
      return false;
    }
  
    if (user.otp && !/^\d{6}$/.test(user.otp)) {
      alert("OTP must be exactly 6 digits.");
      return false;
    }
  
    
    if (
      user.password &&
      (/[A-Z]/.test(user.password) &&
       /\d/.test(user.password) &&   
       /[@$!%*?&_]/.test(user.password) &&
       user.password.length < 6)
    ) {
      alert(
        "Password must be at least 6 characters long and include one uppercase letter, one number, and one special character."
      );
      return false;
    }
  
    return true; 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateInput()) {
      console.log(user);
      alert("Logged In")
      setLoggedIn(true);
    }
    // else{
    //     alert("Dhang se input de na bhaand kahike")
    // }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  if (loggedIn) return <Dashboard />;

  return (
    <div className="placingBelow">
      {/* Video Background */}
      <video autoPlay loop muted playsInline className="video-bg">
        <source src="/farmernew.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <section className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <p>Please enter your credentials to log in</p>

          <div className="input-group">
            <input
              type="text"
              name="phoneNumber"
              placeholder=" "
              value={user.phoneNumber}
              onChange={handleInputChange}
              required
            />
            <label><b>Phone Number</b></label>
          </div>

          <div className="input-group">
            <input
              type="text"
              name="otp"
              placeholder=" "
              value={user.otp}
              onChange={handleInputChange}
            />
            <label><b>OTP</b></label>
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder=" "
              value={user.password}
              onChange={handleInputChange}
            />
            <label><b>Password</b></label>
          </div>

          <p>
            By logging in, you agree to our{" "}
            <a href="#" style={{ color: "dodgerblue" }}>Terms & Privacy</a>
          </p>

      <NavLink to="/about" className="home-button">
      <img width="40px" height="40px" src="/home.png" alt="" /></NavLink>
          <div className="clearfix">
            <button type="submit" className="btn">Login</button>
          </div>
        </form>
      </section>
    </div>
  );
};