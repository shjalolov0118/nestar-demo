import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nestar Demo — Pages Router</title>
        <meta
          name="description"
          content="Next.js 14.2.1 course demo using the Pages Router"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <h1>Nestar Demo</h1>
        <p>Next.js 14.2.1 · Pages Router · TypeScript</p>
        <p>
          Get started by editing <code>pages/index.tsx</code>.
        </p>
      </main>
    </>
  );
}
