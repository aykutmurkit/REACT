import { useState } from "react";
import "./App.css";
import Product from "./Product";

function App() {
  const productName = "buzdolabı";

  // bir componentten bir componente değer geçirmeye props denir.

  return (
    <div>
      <Product productName="ayakkabı" price={3200} />
      <hr />
      <Product productName="elbise" price={1500} />
      <hr />
      <Product productName={productName} price={30000} />
    </div>
  );
}

export default App;
