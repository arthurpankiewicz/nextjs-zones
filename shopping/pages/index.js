import Header from "../components/Header";
import Products from "../components/Products";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Products page</h1>
        <Products />
      </main>
    </div>
  );
}