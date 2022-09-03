import React, { useContext, useState } from "react";
import "./dogs.css";
import { CartContext } from "../Context/cartContext";



const DogsCard = (props) => {
  const { imageUrl, price, description, breed, name, id } = props;
  const {setTotal,setAddtoCard} =useContext(CartContext)
  const [isAdded, setAdded] = useState(false);

  const handleClick = () => {
    setAdded(true);
      const newItemsDogs ={
        name: name,
        price: price,
        imageUrl : imageUrl,

      };
      setAddtoCard((itemDogs) =>[...itemDogs, newItemsDogs])
      setTotal((total) => (total += Number(price)))
  };
   
  return (
    <div>
      <section className="dogs">
        <div className="dogs-info">
          <p>{name}</p>
          <p>{breed}</p>
        </div>

        <div className="dogs-img-container">
          <img
            className="dog-img"
            src={imageUrl}
            alt={`picture off :${name}`}
          />
        </div>

        <div className="dogs=desc">{description}</div>

        <div className="dogs-price">{price}$</div>

        {isAdded ? (
          <button disabled className="dogs-btn-disabled">
            ADDED
          </button>
        ) : (
          <button className="dogs-btn" onClick={handleClick}>
            ADD TO CART
          </button>
        )}
      </section>
    </div>
  );
};

export default DogsCard;
