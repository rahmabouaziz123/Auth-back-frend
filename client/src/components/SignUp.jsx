import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSignUp } from "../redux/action";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const { user, loading } = useSelector((state) => state);
  console.log(loading);
  console.log(user);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adresse, setAdresse] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userSignUp({ fullName, email, password, adresse }));
  };

  return (
    <div>
      <div>
        {loading ? (
          <h1>Loading ...</h1>
        ) : (
          <form>
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <label>Email</label>
            <input
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input
              type="text"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          
          <label>adresse</label>
            <input
              type="text"
              placeholder="adresse"
              value={adresse}
              onChange={(e) => setAdresse(e.target.value)}
            />
           
            <button onClick={handleSubmit}>Confirm</button>
          </form>
        )}
         <Link to="/login">
       login
      </Link>
      </div>
    </div>
  );
};
