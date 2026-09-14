import React, { useEffect, useState } from "react";

const UserProfile = () => {
  const [users, setUsers] = useState([]);
  const [num, setNum] = useState(5);
  useEffect(() => {
    const GitHubProfile = async () => {
      const response = await fetch(
        `https://api.github.com/users?per_page=${num}`,
      );
      const data = await response.json();
      setUsers(data);
      console.log(data);
    };
    GitHubProfile();
  }, [num]);

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "30px 0px" }}>user profiles</h1>
      <input
        style={{
          marginBottom: "20px",
          textAlign: "center",
          padding: "10px 0",
          fontSize: "16px",
        }}
        placeholder="Enter Number"
        type="number"
        value={num}
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {users.map((user) => {
          return (
            <img
              key={user.login}
              src={user.avatar_url}
              height={"150px"}
              width={"150px"}
            ></img>
          );
        })}
      </div>
    </div>
  );
};

export default UserProfile;
