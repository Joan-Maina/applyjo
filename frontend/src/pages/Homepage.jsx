import React from "react";
import Navbar from "../components/Navbar";

function Homepage() {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  return (
    <div>
      <Navbar />
      <p>
        hey {user.user.fullname}.<br></br>
        Welcome{" "}
      </p>
    </div>
  );
}

export default Homepage;
