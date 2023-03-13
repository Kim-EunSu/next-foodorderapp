import Head from "next/head";
import Featured from "../../components/Featured";
import PizzaList from "../../components/PizzaList";
import classes from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={classes.container}>
      <Head>
        <title>Pizza App</title>
        <meta name="description" content="Best pizza shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList />
    </div>
  );
}
