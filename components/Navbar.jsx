import Image from "next/image";
import classes from "../src/styles/Navbar.module.css";

function Navbar() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.item}>
          <div className={classes.callButton}>
            <Image
              src="/telephone.png"
              alt="telephone"
              width={32}
              height={32}
            />
          </div>
          <div className={classes.texts}>
            <div className={classes.text}>ORDER NOW!</div>
            <div className={classes.text}>010-1234-5678</div>
          </div>
        </div>
        <div className={classes.item}>
          <ul className={classes.list}>
            <li className={classes.listItem}>Homepage</li>
            <li className={classes.listItem}>Products</li>
            <li className={classes.listItem}>Menu</li>
            <li className={classes.listItem}>Events</li>
            <li className={classes.listItem}>Blog</li>
            <li className={classes.listItem}>Contact</li>
          </ul>
        </div>
        <div className={classes.item}>
          <div className={classes.cart}>
            <Image src={"/cart.png"} alt="" width={30} height={30} />
            <div className={classes.counter}>2</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
