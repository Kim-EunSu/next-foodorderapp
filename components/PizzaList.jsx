import PizzaCard from "./PizzaCard";
import classes from "../src/styles/PizzaList.module.css";

const PizzaList = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={classes.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={classes.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
};

export default PizzaList;
