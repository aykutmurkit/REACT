import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./Login"; // ismini değiştirebilrsin
import { users } from "./Login";

function App() {
  let a = 15;
  const firstName = "aykutmurkit";

  console.log(users);
  // ctrl + ö yorum satırı yapar seçtiği yeri
  return (
    <div>
      <Login />
      <hr />
      <Login />
      <hr />
      <Login />
      <hr />
    </div>
  );
}

export default App;
