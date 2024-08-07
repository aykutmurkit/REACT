import { useState } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import UserList from "./UserList.jsx";



function App() {

  

  const {value} = useSelector((store)=>store.counter);
  console.log(value);

  return (
    <div>
      <UserList/>
    </div>
  );
}

export default App;
