import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleContacts from 'react-google-contacts';

const Dashboard = () => {
  let [contact_list, set_contact_list] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/users")
      .then((response) => response.json())
      .then((data) => set_contact_list(data));
  }, []);

  const go_to_route = (email) => {
    navigate("/send-email/" + email);
  };
  const responseCallback = (response) => {
    console.log(response);
    set_contact_list(response);
  }
  return (
    <div className="dashboard">
      <div className="dash_header">
        <p>Dashboard</p>
        <a href="/">Logout</a>
      </div>

      <div className="dash_header">
        <GoogleContacts
          clientId="101232111464-m9pm4j1mha6q70pgbhicl067an5062dj.apps.googleusercontent.com"
          buttonText="Import Google Contact"
          onSuccess={responseCallback}
          onFailure={responseCallback}
        />
        ,
      </div>

      <div className="contact_list">
          <div className="contact_comp" >
            <h5>S. No.</h5>
            <h5>Email</h5>
            <h5>Send Email</h5>
          </div>
      </div>

      <div className="contact_list">
        {contact_list.map((melody, i = 0) => (
          <div className="contact_comp" key={i + 1}>
            <p>{i+1}</p>
            <p>{melody.email}</p>
            <button onClick={() => go_to_route(melody.email)}>
              Send Email
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
