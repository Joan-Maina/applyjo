import React, { useState } from "react";
import "../styles/Signup.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function Signup() {
  const history = useHistory();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({
    firstname: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const handle = (e) => {
    const signupDetails = { ...userDetails };
    signupDetails[e.target.id] = e.target.value;
    setUserDetails(signupDetails);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post("http://localhost:9000/users/signup", {
        userDetails,
      });
      setLoading(false);

      history.push("/");
    } catch (error) {
      setLoading(false);
      setError("Check the details");
    }
  };
  return (
    <div className="signupform">
      <h1>SIGN UP FORM</h1>
      {error !== null && <h4 style={{ color: "red" }}>{error}</h4>}
      <form onSubmit={(e) => handleSubmit(e)}>
        <label for="fullname">Enter full names</label>
        <input
          id="fullname"
          placeholder="Enter your full names"
          type="text"
          required
          onChange={(e) => handle(e)}
        />
        <label for="email">Enter email</label>
        <input
          id="email"
          placeholder="Enter your email"
          type="text"
          required
          onChange={(e) => handle(e)}
        />
        <label for="name">Enter username</label>
        <input
          id="name"
          placeholder="Enter username"
          type="text"
          required
          onChange={(e) => handle(e)}
        />
        <label for="password">Enter password</label>
        <input
          id="password"
          placeholder="Enter password"
          type="password"
          required
          onChange={(e) => handle(e)}
        />
        <label for="confirm password">Confirm password</label>
        <input
          id="confirmpassword"
          placeholder="Confirm password"
          type="password"
          required
          onChange={(e) => handle(e)}
        />
        {loading ? (
          <button>Registering</button>
        ) : (
          <button>REGISTER DETAILS</button>
        )}

        <Link to="">
          <h5>Log in</h5>
        </Link>
      </form>
    </div>
  );
}

export default Signup;
