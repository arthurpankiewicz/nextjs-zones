import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function SinglePost() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Single Product page</h1>
        <p>Product slug: {router.query.productSlug}</p>
        <p>We can use this slug to fetch product details from server</p>
      </main>
    </div>
  );
}