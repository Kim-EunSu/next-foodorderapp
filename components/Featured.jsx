import { useState } from "react";
import Image from "next/image";
import classes from "../src/styles/Featured.module.css";

function Featured() {
  const [index, setIndex] = useState(0);
  const images = ["/featured1.jpeg", "/featured2.webp", "/featured3.jpeg"];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }

    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  console.log(index);

  return (
    <div className={classes.container}>
      <div
        className={classes.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image src={"/arrowl.png"} alt="" layout="fill" />
      </div>
      <div
        className={classes.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((item, i) => (
          <div className={classes.imgContainer} key={i}>
            <Image src={item} key={i} alt="featured" layout="fill" />
          </div>
        ))}
      </div>
      <div className={classes.arrowContainer} style={{ right: 0 }}>
        <Image
          src={"/arrowr.png"}
          alt=""
          layout="fill"
          onClick={() => handleArrow("r")}
        />
      </div>
    </div>
  );
}

export default Featured;
