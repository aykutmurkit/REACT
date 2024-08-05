import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    console.log("her zaman çalışır");
  });

  useEffect(() => {
    console.log("sadece başlangıçta çalışır");
  }, []);

  useEffect(() => {
    console.log("başlangıçta veya firstname değiştiğinde çalışır");
  }, [firstName]);

  useEffect(() => {
    console.log(
      "başlangıçta veya firstname veya lastname değiştiğinde çalışır"
    );
  }, [firstName, lastName]);

  return (
    <>
      <div>
        <button onClick={() => setFirstName("aykut")}>ismi değiştir</button>
      </div>
      <div>
        <button onClick={() => setLastName("mürkit")}>adı değiştir</button>
      </div>
    </>
  );
}

export default App;
