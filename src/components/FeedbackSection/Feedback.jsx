import React, { useState } from "react";
import "./FeedbackForm.css";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    experience: "excellent",
    likes: "",
    improvements: "",
    likelihood: 0,
    comments: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Add your submit logic here
  //   console.log(formData);
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("Feedback submitted successfully:", data);
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };
  

  return (
    <div className="container">
      <h1>Feedback Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="experience">Overall Experience:</label>
          <select
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
          >
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="average">Average</option>
            <option value="poor">Poor</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="likes">What aspects did you like the most?</label>
          <textarea
            id="likes"
            name="likes"
            placeholder="Enter your feedback"
            value={formData.likes}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="improvements">What aspects need improvement?</label>
          <textarea
            id="improvements"
            name="improvements"
            placeholder="Enter your feedback"
            value={formData.improvements}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="likelihood">
            How likely are you to use our product/service again?
          </label>
          <input
            type="range"
            id="likelihood"
            name="likelihood"
            min="0"
            max="10"
            step="1"
            value={formData.likelihood}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="comments">Additional Comments:</label>
          <textarea
            id="comments"
            name="comments"
            placeholder="Enter your comments"
            value={formData.comments}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
