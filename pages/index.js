import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href="/Pokedex"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Pokedex <span>-&gt;</span>
            </h2>
            <p>Generate List of Pokemon.</p>
          </a>

          <a
            href="/RandomPokemon"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Random Pokemon <span>-&gt;</span>
            </h2>
            <p>Generate a Random Pokemon</p>
          </a>
        </div>
      </main>
    </>
  );
}
