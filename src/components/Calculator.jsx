import { useState } from "react";

export default function Calculator({
  header,
  price,
  url,
  changeSetTotalNum,
  changeSetTotalSum,
  changeSetPrice,
  addToCart,
  showIndicator,
}) {
  const [digit, setDigit] = useState(0);

  function add() {
    setDigit(digit + 1);
    changeSetTotalNum(1);
    changeSetTotalSum(price);
    changeSetPrice(price * 1);
  }

  function subtract() {
    if (digit > 0) {
      setDigit(digit - 1);
      changeSetTotalNum(-1);
      changeSetTotalSum(-price);
      changeSetPrice(price * 1);
    }
  }

  function handleAddToCart() {
    if (typeof addToCart === "function") {
      addToCart({
        header: header,
        price: price,
        quantity: digit,
      });
    }
  }

  return (
    <div className="items-container">
      <img src={url} height={250} width={250} alt={header} />
      <p>{header}</p>
      <p>{price} $</p>
      <div>
        <button onClick={subtract}>-</button>
        <span>{digit}</span>
        <button onClick={add}>+</button>
        <button onClick={handleAddToCart}>Add to cart</button>
        {showIndicator && <span className="indicator">{digit}</span>}
      </div>
    </div>
  );
}
