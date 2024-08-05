import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [firstName, setFirstName] = useState("aykut");

  const [student, setStudent] = useState(["aykut", "mehmet"]);

  /*
  <div>
    {student.map((name, i) =>(
        <div key={i}>{name}</div>
      ))}
  </div>
  */

  const [userInfo, setUserInfo] = useState({
    username: "aykutmurkit",
    password: "123456",
  });

  /*
  <div>
    {userInfo.username}{userInfo.password}
  </div>
  */

  const arttir = () => {
    setCount(count + 1);
  };

  const azalt = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={arttir}>Arttır</button>
        <br />
        <button onClick={azalt}>Azalt</button>
      </div>
    </div>
  );
}

export default App;
