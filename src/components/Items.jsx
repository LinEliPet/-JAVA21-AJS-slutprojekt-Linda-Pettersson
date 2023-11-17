import React, { useState, useEffect } from "react";
import Calculator from "./Calculator";

const itemsArr = [
  {
    id: 1,
    heading: "Absent father action figure",
    img: "http://www.weirdshityoucanbuy.com/uploads/7/0/8/8/70881739/absent-father_orig.jpg",
    price: 230,
    quantity: 0
  },
  {
    id: 2,
    heading: "Life size Tyrannosaurus skeleton",
    img: "http://www.weirdshityoucanbuy.com/uploads/7/0/8/8/70881739/the-life-size-tyrannosaurus-skeleton_orig.jpg",
    price: 100000000,
    quantity: 0
  },
  {
    id: 3,
    heading: "Dog umbrella",
    img: "http://www.weirdshityoucanbuy.com/uploads/7/0/8/8/70881739/dog-umbrella_orig.jpg",
    price: 260,
    quantity: 0
  },
  {
    id: 4,
    heading: "Weed pillow",
    img: "http://www.weirdshityoucanbuy.com/uploads/7/0/8/8/70881739/weed-pillow_orig.jpg",
    price: 350,
    quantity: 0
  },
  {
    id: 5,
    heading: "I miss drugs Yoga mat",
    img: "http://www.weirdshityoucanbuy.com/uploads/7/0/8/8/70881739/i-miss-drugs-yoga-mat_orig.jpg",
    price: 200,
    quantity: 0
  },
];

export default function Items({ changeSetCartNum, changeSetCartSum, handleAddToCart }) {
  const [totalNum, setTotalNum] = useState(0);
  const [totalSum, setTotalSum] = useState(0);
  const [price, setPrice] = useState([]);

  function changeSetPrice(arg) {
    setPrice(arg);
  }

  function changeSetTotalNum(arg) {
    setTotalNum(totalNum + arg);
  }

  function changeSetTotalSum(arg) {
    setTotalSum(totalSum + arg);
  }

  useEffect(() => {
    changeSetCartNum(totalNum);
    changeSetCartSum(totalSum);
  }, [totalNum, totalSum, changeSetCartNum, changeSetCartSum]);


  return (
    <>
      {itemsArr.map((item) => (
        <div key={item.id}>
          <Calculator
            id={item.id}
            header={item.heading}
            price={item.price}
            url={item.img}
            changeSetTotalNum={changeSetTotalNum}
            changeSetTotalSum={changeSetTotalSum}
            changeSetPrice={changeSetPrice}
            addToCart={handleAddToCart}
            showIndicator={item.quantity > 0}
          />
        </div>
      ))}
    </>
  );
}
