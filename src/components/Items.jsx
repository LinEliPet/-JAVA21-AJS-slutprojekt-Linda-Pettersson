import React, { useState } from "react";
import Calculator from "./Calculator";

const itemsArr = [
  {
    id: 1,
    heading: "Absent father action figure",
    img: "http://www.weirdshityoucanbuy.com/uploads/7/0/8/8/70881739/absent-father_orig.jpg",
    price: 230,
  },
  {
    id: 2,
    heading: "Life size Tyrannosaurus skeleton",
    img: "http://www.weirdshityoucanbuy.com/uploads/7/0/8/8/70881739/the-life-size-tyrannosaurus-skeleton_orig.jpg",
    price: 100000000,
  },
  {
    id: 3,
    heading: "Dog umbrella",
    img: "http://www.weirdshityoucanbuy.com/uploads/7/0/8/8/70881739/dog-umbrella_orig.jpg",
    price: 260,
  },
  {
    id: 4,
    heading: "Weed pillow",
    img: "http://www.weirdshityoucanbuy.com/uploads/7/0/8/8/70881739/weed-pillow_orig.jpg",
    price: 350,
  },
  {
    id: 5,
    heading: "I miss drugs Yoga mat",
    img: "http://www.weirdshityoucanbuy.com/uploads/7/0/8/8/70881739/i-miss-drugs-yoga-mat_orig.jpg",
    price: 200,
  },
];

export default function Items({changeSetCartNum, changeSetCartSum,}) {
  const [totalNum, setTotalNum] = useState(0);
  const [totalSum, setTotalSum] = useState(0);
  const [price, setPrice] = useState([]);

  function changeSetPrice(arg) {
    setPrice(arg);
  }

  function changeSetTotalNum(arg) {
    const totalNum = totalNum + arg;
    setTotalNum (totalNum);
  }

  function changeSetTotalSum(arg) {
    setTotalSum(totalSum + arg);
  }

  changeSetCartNum(totalNum);
  changeSetCartSum(totalSum);
  

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
          />
        </div>
      ))}
    </>
  );
}
