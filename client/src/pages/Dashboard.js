import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  let [contact_list, set_contact_list] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/users")
      .then((response) => response.json())
      .then((data) =>set_contact_list(data));
  }, []);

  const go_to_route = (email)=>{
    navigate("/send-email/"+email);
  }

  return (
    <div className="dashboard">
      <div className="dash_header">
        <p>Dashboard</p>
        <a href="/">Logout</a>
      </div>

      <div className="contact_list">
        {contact_list.map((melody) => (
          <div className="contact_comp">
            <p>{melody.name}</p>
            <p>{melody.email}</p>
            <button onClick={()=>go_to_route(melody.email)}>Send Email</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
