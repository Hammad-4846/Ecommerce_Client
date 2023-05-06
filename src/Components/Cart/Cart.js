import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import CartImg from "../../Assets/Images/Cartitem.jpeg";
import CartItem from "../CartItem/CartItem.js";
import AddressBox from "../AddressBox/AddressBox.js";
import { ProductData } from "../../Data/productsData";
import {useSelector} from "react-redux"

import "./Cart.scss";

function Cart({ toggleCart, setToggleCart }) {
  const { carts } = useSelector((state) => state.products);

  const [secondComp, setSecondComp] = useState(false);
  const [addressContainer, setAddressContainer] = useState(false);

  const handleChangeComp = () => {
    setSecondComp(!secondComp);
  };

  const handleAddressOpener = () => {
    setAddressContainer(true);
  };
  return (
    <>
      {addressContainer && (
        <div className="overlay">
          <RxCross1 onClick={() => setAddressContainer(false)} />
          <div className="Address__Box">
            <div className="top__box">
              <h3>Enter Complete Address</h3>
              <p className="p-text">
                This Allow us to find you easily and give you timely <br />
                Delivery exprerience
              </p>
            </div>

            <div className="form">
              <div className="cost__name">
                <select onChange>
                  <option>MR</option>
                  <option>Miss</option>
                </select>
                <input type="text" placeholder="Reciever's Name" />
              </div>

              <div className="address">
                <input type="text" placeholder="Flat/House/Office No." />
              </div>

              <div className="address">
                <input type="text" placeholder="Street/Society/Office Name" />
              </div>

              <button className="btn">Save Address</button>
            </div>
          </div>
        </div>
      )}

      {!secondComp && (
        <div className={`Cart flex__center ${toggleCart ? "active" : ""}`}>
          <div className="top__cart-section">
            <h5>My Cart</h5>
            <RxCross1 onClick={setToggleCart} />
          </div>

          <div className="cart__del-info">
            <h5>Delivery in 10 minutes</h5>
            <p className="p-text">{carts.length} Items</p>
          </div>

          <div className="item__container">
          {carts.map((product, index) => (
              <CartItem
                id={product.id}
                name={product.title}
                imgUrl={CartImg}
                price={product.price}
                quantity={product.quantity ? product.quantity : 1}
              />
            ))}
            {/* <CartItem name="Item-1"  imgUrl={CartImg} price={50} quantity="500" />
      <CartItem name="Item-1"  imgUrl={CartImg} price={50} quantity="500" />
      <CartItem name="Item-1"  imgUrl={CartImg} price={50} quantity="500" /> */}
          </div>

          <div onClick={handleChangeComp} className="place__order">
            <h5>{carts.length} Items . $130</h5>
            <h5>Proceed</h5>
          </div>
        </div>
      )}
      {secondComp && (
        <div className={`Cart flex__center ${toggleCart ? "active" : ""}`}>
          <div className="top__cart-section">
            <h5>My Address</h5>
            <RxCross1 onClick={setToggleCart} />
          </div>
          <div className="cart__del-info address">
            <span onClick={handleAddressOpener}>+</span>
            <div className="add__adress">
              <h5>Add A New Address</h5>
              <p className="p-text">3 Items</p>
            </div>
          </div>
          <div className="address__selection">
            <p className="p-text">Choose Delivery Address</p>

            <div className="address__selection-container">
              <AddressBox />
              <AddressBox />
            </div>
          </div>
          f
          <div onClick={handleChangeComp} className="place__order submit">
            <h5>Proceed</h5>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
