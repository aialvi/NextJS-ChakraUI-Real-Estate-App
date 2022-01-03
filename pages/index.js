import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Real Estate</title>
        <meta name="description" content="Get the 'Real' deals at ease" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
