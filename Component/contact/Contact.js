"use client";

import { useState } from 'react';
import './contact.css'; 

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    dob: "",
    address: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Registered!\n" + JSON.stringify(formData, null, 2));
  }

  return (
    <>
      {/* Navbar */}
      <header className="header">
        <nav className="navbar">
          <a className="Logo" href="/">EduTech</a>
          <ul className="navmenu">
            <li className="navitem">
              <a className="navlink" href="#">Home</a>
            </li>
            <li className="navitem">
              <a className="navlink" href="#">About</a>
            </li>
            <li className="navitem">
              <a className="navlink" href="#">Contact</a>
            </li>
          </ul>
          <button className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </nav>
      </header>

      {/* Registration Form */}
      <div className="container">
        <center>
          <h2>Register Now</h2>
        </center>

        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} required />
          <input type="date" name="dob" onChange={handleChange} required />

          <select name="course" onChange={handleChange} required>
            <option value="">Select Course</option>
            <option value="BCA">BCA</option>
            <option value="B.Sc">B.Sc</option>
            <option value="MCA">MCA</option>
          </select>

          <textarea name="address" placeholder="Address" onChange={handleChange} required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
