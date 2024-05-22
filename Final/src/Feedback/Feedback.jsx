import React, { useState, useEffect } from 'react';
import './Feedback.css';

function Feedback() {
  const [selectedOffice, setSelectedOffice] = useState("");
  const [selectedDesk, setSelectedDesk] = useState("");
  const [selectedHelpDesk, setSelectedHelpDesk] = useState("");
  const [phone, setPhone] = useState(null);
  const [showError, setShowError] = useState(false);
  const [showWidget, setShowWidget] = useState(true);
  const [showPost, setShowPost] = useState(false);
  const [language, setLanguage] = useState('en'); // Add state for language toggle


  const handleOfficeChange = (e) => {
    const selectedOffice = e.target.value;
    console.log("Selected Office:", selectedOffice);
    setSelectedOffice(selectedOffice);
    setSelectedDesk(""); // Reset selected desk when office changes
    setShowError(false); // Hide the error message
  };

  const handleDeskChange = (e) => {
    const selectedDesk = e.target.value;
    console.log("Selected Desk:", selectedDesk);
    setSelectedDesk(selectedDesk);
    setShowError(false); // Hide the error message
  };
  
  const OfficeLabels = {
    en:[
    "Minister Office",
    "Innovation & Technology Partnership and Alliance Affairs Office",
    "Innovation and Research Sector",
    "ICT and Digital Economy Sector",
    "Administration Office",
    "Policy & Strategy Studies Research Executive",
    "Innovation Fund Office",
  ],
  am: [
    "ሚኒስቴር ኃላፊ ጽሕፈት ቤት",
    "የኢኖቬሽንና ቴክኖሎጂ የትብብርና ትስስር ጉዳዮች መሪ ስራ አስፈጻሚ",
    "ኢኖቬሽን ምርምር ዘርፍ ",
    "አይሲቲ እና ዲጂታል ኢኮኖሚ ዘርፍ",
    "የሥራ አመራር ዋና ሥራ አስፈጻሚ",
    "የፖሊሲና ስትራቴጂ ጥናትና ምርምር ሥራ አስፈጻሚ",
    "የኢኖቬሽን ፈንድ ጽሕፈት ቤት",
  ]
  };
  const deskOptionsByOffice = {
    en:{
    "Minister Office": [
      "Legal Service Office",
      "Audit Service Office",
      "Institutional Transition Office",
      "Ethics and Anti-Corruption Office",
      "Public relations and Communication Office",
      "Public Relations & Communication Team",
      "Women and Social Affairs Office",
     ],
     "Innovation & Technology Partnership and Alliance Affairs Office": [
      "International Relations & Cooperation Desk",
      "Sector & Regional Councils Desk",
      "Private Sector Industries Technology Desk",
    ],
    "Innovation and Research Sector": [
      "National Research Office",
      "Technology Transformation Office",
      "Technology Innovation and Management Office",
    ],
    "ICT and Digital Economy Sector": [
      "National E-Government Services Office",
      "ICT Infrastructure Development and Management Office",
      "Digital Economy Development Sector Office",
    ],
    "Administration Office": [
      "Strategic Affairs Office",
      "Finance & Procurement Office",
      "Human Resource Competency & Management Office",
      "Information Communication Technology Office",
      "Facilities Management Office",
    ],
    "Policy & Strategy Studies Research Executive": [
      "Policy & Strategy Studies Research Executive",
    ],
    "Innovation Fund Office": ["Innovation Fund Office"],
  },
  am:{
    "ሚኒስቴር ኃላፊ ጽሕፈት ቤት": [
      "የሕግ አገልግሎት ሥራ አስፈጻሚ",
      "የኦዲት ሥራ አስፈጻሚ",
      "የተቋማዊ ለውጥ ሥራ አስፍጻሚ",
      "የሥነምግባርና ፀረሙስና ሥራ አስፈጻሚ",
      "የህዝብ ግንኙነትና ኮሙኒኬሽን ሥራ አስፈጻሚ",
      "የህዝብ ግንኙነትና ኮሙኒኬሽን ሥራ ቡድን መሪ",
      "የሴቶችና የማህበራዊ ጉዳዮች አካቶ ትግበራ ሥራ አስፈጻሚ ",
    ],
    "የኢኖቬሽንና ቴክኖሎጂ የትብብርና ትስስር ጉዳዮች መሪ ስራ አስፈጻሚ": [
      "የአለም ዓቀፍ ግንኙነትና ትብብር ዴስክ",
      "የዘርፍ ካውንስሎችና የክልሎች ዴስክ",
      "የግል ዘርፍ ኢንዱስትሪዎች ቴክኖሎጂ ዴስክ",
    ],
    "ኢኖቬሽን ምርምር ዘርፍ ":[
      "ሀገራዊ የምርምር ልማት መሪ ሥራ አስፈጻሚ",
      "የቴክኖሎጂ ሽግግርና ልማት መሪ ሥራ አስፈጻሚ",
      "የኢኖቬሽን ቴክኖሎጂ መረጃ ልማትና አስተዳደር ዴስክ",
    ],
    "አይሲቲ እና ዲጂታል ኢኮኖሚ ዘርፍ":[
      "የብሄራዊ የኤሌክትሮኒክ መንግስት ልማት መሪ ሥራ አስፈጻሚ",
      "የአይሲቲ መሰረተ ልማት ግንባታ እና አስተዳደር መሪ ሥራ አስፈጻሚ",
      "የዲጂታል ኢኮኖሚ ልማት ዘርፍ መሪ ሥራ አስፈጻሚ",
    ],
    "የሥራ አመራር ዋና ሥራ አስፈጻሚ":[
      "የስትራቴጂክ ጉዳዮች ሥራ አስፈጻሚ",
      "የግዢና ፋይናንስ ሥራ አስፈጻሚ",
      "የብቃትና የሰው ሀይል አስተዳደር ሥራ አስፈጻሚ",
      "የኢንፎርሜሽን ኮሚኒኬሽን ቴክኖሎጂ ሥራ አስፈጻሚ",
      "የመሠረታዊ አገልግሎት ሥራ አስፈጻሚ",
    ],
    "የፖሊሲና ስትራቴጂ ጥናትና ምርምር ሥራ አስፈጻሚ":[
      "የፖሊሲና ስትራቴጂ ጥናትና ምርምር ሥራ አስፈጻሚ",
    ],
    "የኢኖቬሽን ፈንድ ጽሕፈት ቤት":["የኢኖቬሽን ፈንድ ጽሕፈት ቤት"]
  }
  };

  const deskHelpOptionsByOffice = {
    "Legal Service Office": ["Legal Service Office"],
    "Audit Service Office": ["Audit Service Office"],
    "Institutional Transition Office": ["Institutional Transition Office"],
    "Ethics and Anti-Corruption Office": ["Ethics and Anti-Corruption Office"],
    "Public relations and Communication Office": [
      "Public relations and Communication Office",
    ],
    "Public Relations & Communication Team": [
      "Public Relations & Communication Team",
    ],
    "Women and Social Affairs Office": ["Women and Social Affairs Office"],
    "Innovation Fund Office": ["Innovation Fund Office"],

    "International Relations & Cooperation Desk": [
      "International Relations & Cooperation Desk",
    ],
    "Sector & Regional Councils Desk": ["Sector & Regional Councils Desk"],
    "Private Sector Industries Technology Desk": [
      "Private Sector Industries Technology Desk",
    ],

    "Policy & Strategy Studies Research Executive": [
      "Policy & Strategy Studies Research Executive",
    ],

    "National Research Office": [
      "National Research Development Desk",
      "National Research Infrastructure Development Desk",
      "National Research Ethics and Methodology Development Desk",
    ],

    "Technology Transformation Office": [
      "Innovation & Information Technology Development & Management Desk",
      "TechnologIcal Transformation and Collaboration Desk",
      "Indigenous Technology Development Desk",
    ],

    "Technology Innovation and Management Office": [
      "Innovation Development Desk",
      "Innovation Infrastructure Development Desk",
      "Starap & Innovative Enterprise Development Desk 1",
      "Starap & Innovative Enterprise Development Desk 2",
    ],
    "National E-Government Services Office": [
      "National E-Government Services Development & Management Desk",
      "National E-Government Strategy Coordination Desk",
      "National Data Development Coordination Desk",
    ],
    "ICT Infrastructure Development and Management Office": [
      "National Data Center Management Desk",
      "Cyber Security Desk",
      "National ICT Infrastructure Development Desk",
    ],
    "Digital Economy Development Sector Office": [
      "Digital Economy Development Standards & Control Desk",
      "Digital Industry Development Desk",
      "Digital Society Development Desk",
    ],
    "Strategic Affairs Office": [
      "Planning & Budget Preparation, Monitoring & Evaluation Team",
    ],
    "Finance & Procurement Office": ["Procurement Team", "FInance Team"],
    "Human Resource Competency & Management Office": [
      "Human Resource Administration Team ",
      "Human Recourse Competency Development & Management Team",
      "Records Management Team",
    ],
    "Information Communication Technology Office": [
      "Information Communication Technology Office",
    ],
    "Facilities Management Office": [
      "Property Management Team",
      "Property Treasury Team",
      "General Services Team",
      "Transport Deployment Service Team",
    ],
  };
 

  useEffect(() => {
    const handleBtnClick = () => {
      const widget = document.querySelector(".star-widget");
      const post = document.querySelector(".post");
      const editBtn = document.querySelector(".edit");

      widget.style.display = "none";
      post.style.display = "block";

      editBtn.onclick = () => {
        widget.style.display = "block";
        post.style.display = "none";
      };
    };

    const btn = document.querySelector("button");
    btn.addEventListener("click", handleBtnClick);

    return () => {
      btn.removeEventListener("click", handleBtnClick);
    };
  }, []);

  const handleBtnClick = () => {
    setShowWidget(false);
    setShowPost(true);
  };

  const handleEditBtnClick = () => {
    setShowWidget(true);
    setShowPost(false);
  };
  
//  // useEffect to handle language changes
//  useEffect(() => {
//   // Fetch translations or switch logic depending on your implementation
// }, [language]);

// // Function to toggle between English and Amharic
// const toggleLanguage = () => {
//   setLanguage(prevLanguage => prevLanguage === 'en' ? 'am' : 'en');
// };
useEffect(() => {
  // Code to fetch help desk phone number based on selected office and desk
  // Assuming this is an async operation, otherwise, handle the logic directly here
  const fetchHelpDeskPhoneNumber = async () => {
    // Assuming some async logic to fetch phone number based on selectedOffice and selectedDesk
    const phoneNumber = await someAsyncFunction(selectedOffice, selectedDesk, selectedHelpDesk);
    setPhone(phoneNumber);
  };

  // Fetch the help desk phone number whenever either selectedOffice or selectedDesk changes
  if (selectedOffice && selectedDesk) {
    fetchHelpDeskPhoneNumber();
  }
}, [selectedOffice, selectedDesk]);

const toggleLanguage = () => {
  const newLanguage = language === 'en' ? 'am' : 'en';
  setLanguage(newLanguage);
};
  return (
    <div className='main-container'>
    
      <div className="feedback-container">

      <div className="language-toggle" onClick={toggleLanguage}>
        {language === 'en' ? 'አማርኛ' : 'English'}
      </div>
     
      <div className="form-Office">
  <label htmlFor="office">{language === 'en' ? 'Sector' : 'ዘርፍ'}:</label>
  <select
    id="office"
    onChange={(e) => {
      setSelectedOffice(e.target.value);
      setSelectedDesk(""); // Reset selected desk when office changes
      setShowError(false); // Hide the error message
    }}
    value={selectedOffice}
    className={`form-control ${
      selectedOffice === "" ? "empty-field" : ""
    } form-select form-select-md`}
  >
    <option value="">{language === 'en' ? 'Select Sector' : 'ዘርፍ ይምረጡ'}</option>
    {OfficeLabels[language].map((sector, index) => (
      <option key={index} value={sector}>
        {sector}
      </option>
    ))}
  </select>
  {selectedOffice === "" && showError && (
    <span className="text-danger">{language === 'en' ? 'Please select the Sector!' : 'እባኮትን ዘርፍ ይምረጡ!'}</span>
  )}
</div>

<div className="form-Desk">
  <label htmlFor="desk">{language === 'en' ? 'Office:' : 'ጽሕፈት ቤት'}</label>
  <select
    id="desk"
    onChange={(e) => {
      setSelectedDesk(e.target.value);
      setShowError(false); // Hide the error message
    }}
    value={selectedDesk}
    className={`form-control ${
      selectedDesk === "" ? "empty-field" : ""
    } form-select form-select-md`}
  >
    <option value="">{language === 'en' ? 'Select Office' : 'ጽሕፈት ቤት ይምረጡ'}</option>
    {deskOptionsByOffice[language]?.[selectedOffice]?.map((desk, index) => (
      <option key={index} value={desk}>
        {desk}
      </option>
    ))}
  </select>
  {selectedDesk === "" && showError && (
    <span className="text-danger">{language === 'en' ? 'Please select an Office!' : 'እባኮትን ጽፈት ቤት ይምረጡ'}
      </span>
  )}
</div>

<div className="form-HelpDesk">
  <label htmlFor="helpDesk">{language === 'en' ? 'Desk:' : 'ዴስክ፡'}</label>
  <select
    id="helpDesk"
    onChange={(e) => {
      setSelectedHelpDesk(e.target.value);
      setShowError(false); // Hide the error message
    }}
    value={selectedHelpDesk}
    className={`form-control ${
      selectedHelpDesk === "" ? "empty-field" : ""
    } form-select form-select-md`}
  >
    <option value="">{language === 'en' ? 'Select Desk' : 'ዴስክ ይምረጡ'}</option>
    
      {selectedDesk && deskHelpOptionsByOffice[language]?.[selectedDesk]?.map((helpDesk, index) => (
        <option key={index} value={helpDesk}>
          {helpDesk}
        </option>
      ))}
    
  </select>
  {selectedHelpDesk === "" && showError && (
    <span className="text-danger">{language === 'en' ? 'Please select Desk!' : 'እባኮትን ዴስክ ይምረጡ'}</span>
  )}
</div>

<div className="form-Phone">
  <label htmlFor="phone">{language === 'en' ? 'Do you want to share your phone number?' : 'ስልክ ቁጥሮን ማጋራት ይፈልጋሉ?'}
    </label>
  <div>
    <input
      id="phone"
      type="text" // Assuming it's a text input for phone number
      onChange={(e) => setPhone(e.target.value)}
      value={phone}
      placeholder="+251"
      className="phone-input" // Add a CSS class for styling
    />
  </div>
</div>


        <div className="feedback-widget">
          <div className={showPost ? "post" : "post hidden"}>
            <div className="text">{language === 'en' ? 'Thanks for rating us!' : 'ስለሰጡን አስተያየት እናመሰግናለን!'}</div>
            <div className="edit" onClick={handleEditBtnClick}>EDIT</div>
          </div>
          <div className={showWidget ? "star-widget" : "star-widget hidden"}>
          <input className='radio' type="radio" name="rate" id="rate-5" />
        <label htmlFor="rate-5" className="fas fa-star"></label>
        <input className='radio' type="radio" name="rate" id="rate-4" />
        <label htmlFor="rate-4" className="fas fa-star"></label>
        <input className='radio' type="radio" name="rate" id="rate-3" />
        <label htmlFor="rate-3" className="fas fa-star"></label>
        <input className='radio' type="radio" name="rate" id="rate-2" />
        <label htmlFor="rate-2" className="fas fa-star"></label>
        <input className='radio' type="radio" name="rate" id="rate-1" />
        <label htmlFor="rate-1" className="fas fa-star"></label>
  
            <form action="#">
              <header></header>
              <div className="textarea">
                <textarea cols="30" placeholder={language === 'en' ? 'Describe your experience..' : 'አስተያየቶን ያጋሩን..'}
                ></textarea>
              </div>
              <div className="btn">
                <button type="submit" onClick={handleBtnClick}>{language === 'en' ? 'Post!' : 'አስረክብ'}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
