import { useState } from "react";
import Items from "./Items";
import Cart from "./Cart";
import cartImg from "../img/cart.png";

export default function Shop({ name, change }) {
  const [carted, setCarted] = useState(false);
  const [cartSum, setCartSum] = useState(0);
  const [cartNum, setCartNum] = useState(0);



  function changeSetCartSum(arg) {
    setCartSum(arg);
  }

  function changeSetCartNum(arg) {
    setCartNum(arg);
  }

  function changeSetCarted() {
    setCarted(!carted);
  }

  function handleClick() {
    change();
  }


  if (carted === true){
    return (
      <Cart name={name} handleClick={handleClick} cartSum={cartSum} cartNum={cartNum}/>
    )
  }
  return (
    <>
      <p id="header">Logged in as {name}.</p>
      <button onClick={handleClick}>Log out</button>

      <h1 className="snazzy-heading">Webshop</h1>

      <div className="header">
        <img
          src={cartImg}
          alt="Cart"
          onClick={changeSetCarted}
          className="cart-img"
        />
        {cartNum > 0 && (
            <span className="cart-count">{cartNum}</span>
          )}
        </div>

          <Items
            changeSetCartNum={changeSetCartNum}
            changeSetCartSum={changeSetCartSum}
          />
          
    </>
  );
}