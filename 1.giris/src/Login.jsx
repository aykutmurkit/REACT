import React from "react";

export const users = [
  {
    username: "aykut",
    password: "1",
  },
  {
    username: "sibel",
    password: "2",
  },
];

function Login() {
  return (
    <>
      <div>
        <p>Kullanıcı Adınız</p>
        <input type="text" />
      </div>
      <div>
        <p>Şifreniz</p>
        <input type="text" />
      </div>
      <div>
        <button>giriş yap</button>
      </div>
    </>
  );
}

export default Login;
