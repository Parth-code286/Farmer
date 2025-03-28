import { useState } from "react";
import "./Registration.css";
import { NavLink } from "react-router-dom";
import { Dashboard } from "./DashboardLogin";

export const RegistrationReact = () => {
  const [registered, setRegistered] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    password: "",
    email: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    alert("Registration Successful");
    setRegistered(true);
  };

  const handleInputNew = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  if (registered) return <Dashboard />;

  return (
    <div className="placingBelow">
      {/* Video Background */}
      <video autoPlay loop muted playsInline className="video-bg">
        <source src="/nnnn.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <section className="form-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <p>Please fill in this form to create your account</p>

          <div className="input-group">
            <input
              type="text"
              name="firstName"
              placeholder=" "
              value={user.firstName}
              onChange={handleInputNew}
              required
            />
            <label><b>First Name</b></label>
          </div>

          <div className="input-group">
            <input
              type="text"
              name="lastName"
              placeholder=" "
              value={user.lastName}
              onChange={handleInputNew}
              required
            />
            <label><b>Last Name</b></label>
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder=" "
              value={user.email}
              onChange={handleInputNew}
              required
            />
            <label><b>Email</b></label>
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder=" "
              value={user.password}
              onChange={handleInputNew}
              required
            />
            <label><b>Password</b></label>
          </div>

          <div className="input-group">
            <input
              type="text"
              name="phoneNumber"
              placeholder=" "
              value={user.phoneNumber}
              onChange={handleInputNew}
              required
            />
            <label><b>Phone Number</b></label>
          </div>

          <p>
            By creating an account you agree to our{" "}
            <a href="#" style={{ color: "dodgerblue" }}>Terms & Privacy</a>
          </p>
          <NavLink to="/about" className="home-button">
      <img width="40px" height="40px" src="/home.png" alt="" /></NavLink>
          <div className="clearfix">
            <button type="submit" className="btn">Sign Up</button>
          </div>
        </form>
      </section>
    </div>
  );
};