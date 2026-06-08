import styles from "./Services.module.css";

const services = [
  { num: "01 /", title: "Sites vitrines", desc: "Landing pages et sites de présentation pour artisans, commerces et PME locales. Orienté conversion." },
  { num: "02 /", title: "E-commerce", desc: "Boutiques Next.js avec panier dynamique, catalogue produits et tunnel d'achat complet." },
  { num: "03 /", title: "Sous-traitance", desc: "Renfort React / Next.js / TypeScript pour agences web. Missions ponctuelles ou récurrentes." },
  { num: "04 /", title: "Intégration", desc: "Intégration de maquettes Figma pixel-perfect, responsive et accessible sur tous devices." },
];

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <p className={styles.eyebrow}>// services</p>
      <h2 className={styles.title}>Ce que je construis</h2>
      <div className={styles.grid}>
        {services.map((s) => (
          <div key={s.num} className={styles.card}>
            <p className={styles.num}>{s.num}</p>
            <h3 className={styles.sTitle}>{s.title}</h3>
            <p className={styles.desc}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
