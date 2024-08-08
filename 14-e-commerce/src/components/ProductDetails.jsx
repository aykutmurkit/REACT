import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedProduct } from "../redux/slices/productSlice";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { products, selectedProduct } = useSelector((store) => store.product);

  const { price, image, title, description } = selectedProduct;

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = () => {
    products &&
      products.map((product) => {
        if (product.id == id) {
          dispatch(setSelectedProduct(product));
        }
      });
  };
  const[count,setCount] = useState(0);

  const increment = () => {
    setCount((prev)=>prev+1);
  }

  const decrement = () => {
    setCount ((prev)=>{
        if(prev < 1){
            return 0;
        }
        else {
            return prev-1;
        }
    })
  }



  return (
    <div
      style={{
        marginTop: "30px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div style={{ marginRight: "30px" }}>
        <img src={image} width={300} height={500} alt="" />
      </div>
      <div>
        <h1 style={{ fontFamily: "helvetica" }}>{title}</h1>
        <h3 style={{ fontFamily: "helvetica", fontSize: "20px" }}>
          {description}
        </h3>
        <h1 style={{ fontFamily: "helvetica", fontSize: "50px", color: "red" }}>
          {price} TRY
        </h1>
        <div style={{display:"flex", alignItems:"center"}}>
          <CiCirclePlus onClick={increment} style={{fontSize:"40px",marginRight:"10px"}}/>
          <span style={{fontSize:"40px",marginRight:"10px",fontFamily: "helvetica"}}>{count}</span>
          <CiCircleMinus onClick={decrement} style={{fontSize:"40px"}}/>
        </div>
        <div>
            <button style={{marginTop:"25px",border:"none",padding:"20px",backgroundColor:"darkblue",borderRadius:"5px", color:"#fff"}}>SEPETE EKLE</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
