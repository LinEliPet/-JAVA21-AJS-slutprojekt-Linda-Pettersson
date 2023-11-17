export default function Cart({ name, handleClick, cartNum, cartSum }) {
  function handleBuyClick() {
    window.alert("Thank you for your purchase!");
    handleClick();
  }

  return (
    <>
      <p id="header">You are logged in as {name}.</p>
      <button onClick={handleClick}>Log out</button>

      <h1 className="snazzy-heading">Cart</h1>
      <div>
        <p>
          Total number of items: {cartNum}, total price: {cartSum} kr
        </p>
      </div>

      <button onClick={handleBuyClick}>Buy</button>
    </>
  );
}
