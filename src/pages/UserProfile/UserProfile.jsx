import React, { useEffect, useState } from "react";

const UserProfile = () => {
  const [users, setUsers] = useState([]);
  const [balance, setBalance] = useState("");
  const [interest, setInterest] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  useEffect(() => {
    // Fetch user data after login
    fetch("http://localhost:3000/users", {
      method: "GET",
      headers: {
        Authorization: "Bearer your-auth-token",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const handleAddValues = (e) => {
    e.preventDefault();

    // Prepare the data to be posted
    const data = {
      balance: balance,
      interest: interest,
      from: from,
      to: to,
    };

    // Post the data to the backend
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer your-auth-token",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("Data posted successfully:", response);
        // Perform any additional actions or update the UI as needed
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
  };

  return (
    <>
      <h1>User Profile</h1>
      {users.length > 0 && (
        <div>
          <h2>User Details</h2>
          {/* Display the user details here */}
          {users.map((user) => (
            <div key={user.id}>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Type of Investment: {user.type_of_investment}</p>
              <p>Gender: {user.gender}</p>
              <p>Location: {user.location}</p>
              {/* Add more user details as needed */}
            </div>
          ))}
        </div>
      )}
      <div>
        <h2>Add Values</h2>
        <form onSubmit={handleAddValues}>
          <div>
            <label htmlFor="balance">Balance:</label>
            <input
              type="text"
              id="balance"
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="interest">Interest:</label>
            <input
              type="text"
              id="interest"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="from">From:</label>
            <input
              type="date"
              id="from"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="to">To:</label>
            <input
              type="date"
              id="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </div>
          <button type="submit">Add Values</button>
        </form>
      </div>
    </>
  );
};

export default UserProfile;
