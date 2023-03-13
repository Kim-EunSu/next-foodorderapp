import { useState } from "react";
import Image from "next/image";
import classes from "../../styles/Product.module.css";

function Product() {
  const [size, setSize] = useState(0);
  const pizza = {
    id: 1,
    img: "/pizza.png",
    name: "CAMPAGNOLA",
    price: [19.9, 23.9, 27.9],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.",
  };

  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes.imgContainer}>
          <Image src={pizza.img} alt={pizza.name} layout="fill" />
        </div>
      </div>
      <div className={classes.right}>
        <h1 className={classes.title}>{pizza.name}</h1>
        <p className={classes.desc}>{pizza.desc}</p>
        <h3 className={classes.choose}>Choose the Size</h3>
      </div>
    </div>
  );
}

export default Product;
