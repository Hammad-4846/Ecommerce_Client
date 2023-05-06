import React from "react";

import "./CarItem.scss";
import { useSelector, useDispatch } from "react-redux";

function CartItem({ name, imgUrl, quantity, price, id }) {
  console.log("This is quantity", quantity)
  const dispatch = useDispatch();
 
  const addToCart = (id) => {
    dispatch({
      type: "ProductSlice/updateCart",
      payload: { val: Number(quantity) + 1, id },
    });
  };

  const removeCart = (id) => {
    dispatch({
      type: "ProductSlice/updateCart",
      payload: { val: Number(quantity) - 1, id },
    });
  };


  return (
    <div className="CartItem">
      <div className="Item-img">
        <img src={imgUrl} alt="Cart__item" />
      </div>

      <div className="item__info-fn">
        <h5>{name}</h5>
        <p className="p-text">{quantity}g</p>

        <div className="price__functions">
          <h5>${price}</h5>

          <div className="function">
            <span onClick={()=> removeCart(id)}>-</span>
            <span>{quantity}</span>
            <span onClick={() => addToCart(id)}>+</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
