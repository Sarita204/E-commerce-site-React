import React, { useEffect, useState } from "react";
import "../styles/login.css"
import "react-phone-number-input/style.css";

function Login() {
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

  return (
    <div className="contact-info-container" id="contact">
      <div className="contact-info-body" >
        <div className="contact-info-form-container" >
          <div className="contact-info-header" style={{color:"#090909"}}>
            Login Here
          </div>
          <div className="contact-info-form-section">
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

            <div className="contact-info-form-input-container" >
              <div>
                <input
                  className="contact-info-form-input"
                  value={name}
                  placeholder="Enter Your Password"
                  onChange={(e) => setName(e.target.value)}
                />
                {showNameError && <div style={{ color: "red" }}>Password is required!</div>}
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

                if (!validateEmail(email)) {
                  return;
                }
                if (!hasError)
                sendMessage(phone, email, message, name, () => {
                    console.log("sent");
                  });
                window.alert("Login Successful");
                setEmail("");
                setPhone("");
                setName("");
                setMessage("");
              }}
            >
              <a>Login</a>   
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

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