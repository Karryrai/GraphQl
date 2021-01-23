
import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../GraphQl/Queries";
import "../Styles/App.css";


function GetUsers() {
  const { data } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (data) {
      setUsers(data.jobs);
    }
  }, [data]);

  
  return (
    <div>
    
        {" "}
        {users.map((val) => {
        return (
            <div className="w3-container">
            <ul className="w3-ul w3-card w3-hoverable">
            <li>
            <h3 className="title"><a href={val.description}>{val.title}</a></h3>
            
            <h4>Location: {val.locationNames}</h4>
            
            <h4>Posted On: {val.postedAt}</h4>
            <h4>Apply: <a href={val.applyUrl}>{val.applyUrl}</a></h4>
            
            </li>
            </ul>
            </div>
            
        )
        
        })}
        
        </div>
     
  );
}

export default GetUsers;