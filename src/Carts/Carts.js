import React, { useContext } from "react";
import "./carts.css";
import { CartContext } from "../Context/cartContext";
import { useNavigate } from "react-router";

const Carts = () => {
  const { myCart, total} = useContext(CartContext);
   const navigate = useNavigate();
    const handleHome = () =>{
        navigate("/dogs");
    }   
  return (
    <div>
      <section className="cart-container">
        <div className="cart-header"> CHECKOUT :</div>
        <div className="cart-items">
          {myCart.slice(1).map((dogsCart) => {
            return (
              <div className="cart-item">
                    <img src={dogsCart.imageUrl} className="cart-item-img" />
                    {dogsCart.name} : {dogsCart.price}$
              </div>
            );
          })}
          <div className="cart-total"> TOTAL : {total} </div>
        </div>
          <button className="cart-gohome" onClick={handleHome}>GO HOME</button>

      </section>
    </div>
  );
};

export default Carts;
