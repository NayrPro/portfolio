import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <Hero />
        <hr className={styles.divider} />
        <Projects />
        <hr className={styles.divider} />
        <Services />
        <hr className={styles.divider} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
