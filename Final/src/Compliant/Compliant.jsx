import React, { useState } from 'react';
import './Compliant.css';

const Compliant = () => {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle the submission of the feedback, for example, send it to a server or perform any other action.
    console.log('Feedback submitted:', feedback);
    // You can also reset the feedback state here if needed.
    setFeedback('');
  };

  // Function to count words in the feedback
  const countWords = (text) => {
    const words = text.trim().split(/\s+/);
    return words.filter(word => word !== '').length;
  };

  const wordCount = countWords(feedback);

  return (
    <div className="compliant-container">
      <h1 className="compliant-main-title">Create New Complaint</h1>
      <p className="confidentiality-note">Your confidentiality will be ensured.</p>
      <form className="feedback-form" onSubmit={handleSubmit}>
       
        <input type="text" className="input" name="txt" placeholder="Enter title here" /><br />
        <label className="feedback-label" htmlFor="feedback">Please describe the incident*</label><br />
        <textarea
          className="feedback-textarea"
          id="feedback"
          name="feedback"
          value={feedback}
          onChange={handleFeedbackChange}
          rows="6"
          cols="50"
          placeholder="Type your complaint..." // Placeholder for the textarea
          title="Create a new compliant" // Title attribute for the textarea
          required // Adding required attribute for accessibility
          aria-required="true" // Adding aria-required for screen readers
        
        /><br />
        {/* Displaying word count */}
        <div className="word-count">{wordCount} words</div>
        <button className="feedback-submit-button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Compliant;
