// import React, { useState } from "react";
// import "../styles/contact.css"

// function Contact(){
//     const [data, setData] =useState ({name: "", email:"", phone:"", message:""});
//     const handleChange = (e) => {
//         const name = e.target.name;
//         const value = e.target.value;
//         setData ({...data, [name]: value})

//     }

//     const handleSubmit = (e) => {
//         e.preventDefault ()
// alert ("Thanks for Contacting..!")
//     }
//     return(
//         <div className="about-container" style={{border:"2px solid red"}}>
//             <form method="post" onSubmit={handleSubmit}>
//                 <div className="title">Contact Us</div>
//                 <input type="text" name="name" id="name" onChange={handleChange} value={data.name} placeholder="Enter Your Name" />
//                 <input type="email" name="email" id="email" onChange={handleChange}value={data.email} placeholder="Enter Your Email" />
//                 <input type="phone" name="phone" id="phone"  onChange={handleChange} value={data.phone} placeholder="+91 " />
//                 <textarea name="message" id ="" cels="30" rows="3" onChange={handleChange} value={data.message} placeholder="Enter Your Message"/>
//                 <button type="submit" >Send</button>
//             </form>
//         </div>
//     );
// }

// export default Contact;



import React, {useState, useEffect}from 'react';
import "../styles/signin.css";
import PhoneInput from "react-phone-number-input";

function ContactUs(){
  const [phone, setPhone] = useState("");
  const [showNameError, setShowNameError] = useState(false);
  const [showPhoneError, setShowPhoneError] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [contactInfo, setContactInfo] = useState({});
 
  useEffect(() => {
    loadContactInfo((result) => {
        try {
          setContactInfo(JSON.parse(result));
        } catch (e) {
          console.log(e);
        }
      });
  }, []);

	
	return(
		<div>
			<div className="contact-info-container" id="contact">
      <div className="contact-info-body" >
        <div className="contact-info-form-container" >
          <div className="contact-info-header" style={{color:"#090909"}}>
           Contact Us
          </div>
          <div className="contact-info-form-section">
            <div className="contact-info-form-input-container" >
              <div>
                <input
                  className="contact-info-form-input"
                  value={name}
                  placeholder="Enter Your Name"
                  onChange={(e) => setName(e.target.value)}
                />
                {showNameError && <div style={{ color: "red" }}>Name is required!</div>}
              </div>
            </div>
            <div className="contact-info-form-input-container">
              <div>
                <PhoneInput
                  value={phone}
                  placeholder="Enter Phone number"
                  className="contact-info-form-input"
                  defaultCountry="IN"
                  onChange={setPhone}
                />
              </div>
              {showPhoneError && <div style={{ color: "red" }}>Phone no is required!</div>}
            </div>

            <div className="contact-info-form-input-container">
              <div>
                <input
                  className="contact-info-form-input"
                  value={email}
                  placeholder="Enter Your Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {showEmailError && <div style={{ color: "red" }}>Email is required!</div>}

            </div>
            <div className="contact-info-form-input-container">
              <div>
                <textarea
                  style={{ height: 100 }}
                  placeholder="message"
                  className="contact-info-form-input"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="contact-info-button-block">
            <button
              className="contact-info-form-button"
              onClick={(e) => {
                let hasError = true

                if (!name) {
                  setShowNameError(true)
                  hasError = true
                } else setShowNameError(false)

                if (!phone) {
                  setShowPhoneError(true)
                  hasError = true
                } else setShowPhoneError(false)

                if (!email) {
                  setShowEmailError(true)
                  hasError = true
                } else setShowEmailError(false)
                console.log(phone.length, !(phone.length === 13));

                if (!(phone.length === 13)) {
                  return;
                }

                if (!validateEmail(email)) {
                  alert("Invalid Email");
                  return;
                }
                if (!hasError)
                sendMessage(phone, email, message, name, () => {
                    console.log("sent");
                  });
                window.alert("Thanks for Contacting..!");
                setEmail("");
                setPhone("");
                setName("");
                setMessage("");
              }}
              
            >
              <a>Send</a>
            </button>
          </div>
        </div>
      </div>
	  </div>
	  </div>
	);
}

export default ContactUs;    

function loadContactInfo(cb) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
}

function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
  
    return false;
  }
  

  function sendMessage(phone, email, message, fullName, cb) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "sails.sid=s%3AdGXoFKFuGyZcUZiRaZPpN1LFzAh_Vm-5.CS7p24277%2FQk9IxGJPvnuIkS4OMy%2FBIoD0mfQKSl2y8"
    )
  }