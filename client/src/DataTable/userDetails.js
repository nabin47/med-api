import React, { useContext, useEffect, useState } from "react";
import DataTable from "./DataTable";
import Login from "../Login";
import { UserContext } from "../UserContext";
export default function UserDetails() {

  const [userData, setUserData] = useState("");
  const {user, setUser} = useContext(UserContext);

  useEffect(() => {
    fetch("/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {


        console.log(data, "userData");
        setUser(true);
        setUserData( data.data );
        console.log(userData.email)
      });
  }, []);

    return (
      <div>

        {userData.email ? <DataTable/>:<Login/>} 

      </div>
    );
  // }
}
