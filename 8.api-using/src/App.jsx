import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

const BASE_URL = "http://localhost:3005";

function App() {
  // get işlemi
  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data);
  };

  // get işlemi
  const getUserById = async (userId) => {
    const response = await axios.get(BASE_URL + "/users/" + userId);
    console.log(response.data);
  };

  // post işlemi
  const createUser = async (newUser) => {
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log("response", response.data);
  };

  //put işlemi
  const updateUser = async (userId, updatedUser) => {
    // alt gr iki kere virgül ``
    await axios.put(`${BASE_URL}/users/${userId}`, updatedUser);
  };
  // delete işlemi

  const deleteUserById = async (userId) => {
    const deletedResponse = await axios.delete(`${BASE_URL}/users/${userId}`);
    console.log(deletedResponse.data);
  };

  useEffect(() => {
    //getUserById(1);
    const newUser = {
      username: "ayhan",
      password: "pass",
    };

    const newUser2 = {
      username: "ayhan_updated",
      password: "updated_pass",
    };

    //createUser(newUser);
    //updateUser("58da", newUser2);
    deleteUserById("2");
    // getAllUsers();
  }, []);

  return (
    <>
      <p>aykutmurkit</p>
    </>
  );
}

export default App;
