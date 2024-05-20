import React, { useState } from 'react';
import './Compliant.css';

const Compliant = () => {
  const [feedback, setFeedback] = useState('');
  const [language, setLanguage] = useState('en');

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

  // Function to toggle between English and Amharic
  const toggleLanguage = () => {
    setLanguage(prevLanguage => prevLanguage === 'en' ? 'am' : 'en');
  };

  return (
    <div className="compliant-container">
      <h1 className="compliant-main-title">{language === 'en' ? 'Create New Complaint' : 'አዲስ ቅሬታ ይፍጠሩ'}</h1>
      <p className="confidentiality-note">{language === 'en' ? 'Your confidentiality will be ensured.' : 'ሚስጥራዊነትዎ ይረጋገጣል።'}</p>
      <button onClick={toggleLanguage} className="language-toggle">{language === 'en' ? 'አማርኛ' : 'English'}</button>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <input type="text" className="input" name="txt" placeholder={language === 'en' ? 'Enter title here' : 'ርዕስ እዚህ ያስገቡ'} /><br />
        <label className="feedback-label" htmlFor="feedback">{language === 'en' ? 'Please describe the incident*' : 'እባክዎን ክስተቱን ይግለጹ*'}:</label><br />
        <textarea
          className="feedback-textarea"
          id="feedback"
          name="feedback"
          value={feedback}
          onChange={handleFeedbackChange}
          rows="6"
          cols="50"
          placeholder={language === 'en' ? 'Type your complaint...' : 'ቅሬታዎን ይተይቡ...'} // Placeholder for the textarea
          title={language === 'en' ? 'Create a new compliant' : 'አዲስ ቅሬታ ይፍጠሩ'} // Title attribute for the textarea
          required // Adding required attribute for accessibility
          aria-required="true" // Adding aria-required for screen readers
        /><br />
        {/* Displaying word count */}
        <div className="word-count">{wordCount} {language === 'en' ? 'words' : 'ቃላት'}</div>
        <button className="feedback-submit-button" type="submit">{language === 'en' ? 'Submit' : 'አስገባ'}</button>
      </form>
    </div>
  );
};

export default Compliant;
