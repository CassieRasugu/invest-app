import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [typeOfInvestment, setTypeOfInvestement] = useState("");
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        confirm_Password: confirmPassword,
        type_of_Investment: typeOfInvestment,
        gender: gender,
        location: location,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        navigate("/Login");
      });
  };

  return (
    <>
      <h1>REGISTRATION</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="gender">Gender:</label>
          <input
            type="text"
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Type of Investment</label>
          <select name="investment" onChange={(e) => setTypeOfInvestement(e.target.value)}>
            <option value={'Shares'}>Shares</option>
            <option value={'Bills'}>Bills</option>
            <option value={'Bonds'}>Bonds</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegistrationForm;
