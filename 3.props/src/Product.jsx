import React from "react";

function Product(props) {
  // obje destructing

  const { productName, price } = props; // {productName: "Ayakkabı, price 3200"}

  return (
    <div>
      <div>ÜRÜN BİLGİLERİ</div>
      <div>
        <div>isim : {props.productName}</div>
        <div>Fiyat : {price} </div>
      </div>
    </div>
  );
}

export default Product;
