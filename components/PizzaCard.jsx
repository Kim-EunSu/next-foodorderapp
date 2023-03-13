import Image from "next/image";
import classes from "../src/styles/PizzaCard.module.css";

function PizzaCard() {
  return (
    <div className={classes.container}>
      <Image src={"/pizza.png"} alt="pizza" width={150} height={150} />
      <h1 className={classes.title}>FIORI DI ZUCCA</h1>
      <span className={classes.price}>$19.90</span>
      <p className={classes.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
}

export default PizzaCard;
