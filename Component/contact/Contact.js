"use client"; // if you are using app/ router in Next.js 13+

import React, { useState } from "react";
import styles from "./contact.module.css";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    dob: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Student Registered Successfully!\n" + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="contact-container">
      <h2>Student Registration Form</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" name="name" placeholder="Enter full name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter phone number" value={formData.phone} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Date of Birth</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Course</label>
          <select name="course" value={formData.course} onChange={handleChange} required>
            <option value="">-- Select Course --</option>
            <option value="B.Tech">B.Tech</option>
            <option value="B.Sc">B.Sc</option>
            <option value="B.Com">B.Com</option>
            <option value="MBA">MBA</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Address</label>
          <textarea name="address" placeholder="Enter address" value={formData.address} onChange={handleChange} required></textarea>
        </div>

        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
}
