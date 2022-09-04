import React,{useState} from "react";
import { useParams } from "react-router-dom";
import emailjs from '@emailjs/browser';

const SendEmail = () => {
  let { email } = useParams();
  const [form_data, setform_data] = useState({
    to_email:email
  });
  
  const sendMail = () => {
    var templateParams = {
        name: "Shivam",
        message:form_data.message,
        to_email:form_data.to_email,
        subject:form_data.subject,
        from_email:email,
    };

    emailjs.send("service_z54eaz9", "template_2v449ll", templateParams,"HImJxcyeTjKN2nrRl").then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  };



 const handleChange = (e)=>{
    const value = e.target.value;
    setform_data({
    		...form_data,
    		[e.target.name]: value
  		});
  }


  return (
    <div className="page">
      <h2>Send Email </h2>
      <div className="form_page">
        <div className="form_comp">
          <label>To</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={form_data.to_email}
            name="to_email"
            onChange={handleChange}
          />
        </div>
        
        <div className="form_comp">
          <label>Enter Subject</label>
          <input
            type="text"
            placeholder="Enter your subject"
            value={form_data.subject}
            name="subject"
            onChange={handleChange}
          />
        </div>

        <div className="form_comp">
          <label>Enter Your Message</label>
          <textarea
            type="text"
            placeholder="Enter your Message"
            name="message"
            col="50"
            value={form_data.message}
            onChange={handleChange}
            
          />
        </div>
        <div className="form_comp">
          <button onClick={() => sendMail()}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default SendEmail;



