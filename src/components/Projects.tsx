import Image from "next/image";
import styles from "./Projects.module.css";

const projects = [
  {
    type: "landing page · artisan",
    name: "Vidal Électricité",
    desc: "Landing page de conversion pour électricien certifié. Formulaire Formspree, design sobre orienté lead.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Formspree"],
    github: "https://github.com/NayrPro/vidal-electricite",
    live: "https://vidal-electricite.vercel.app/",
    img: "/vidal.png",
    alt: "Vidal Électricité",
  },
  {
    type: "e-commerce · épicerie fine",
    name: "Maison Castellane",
    desc: "Boutique Next.js 15 avec CartContext + useReducer, App Router, architecture TypeScript propre.",
    tags: ["Next.js 15", "React 19", "TypeScript", "useReducer"],
    github: "https://github.com/NayrPro/maison-castellane",
    live: "https://maison-castellane.vercel.app/",
    img: "/castellane.png",
    alt: "Maison Castellane",
  },
  {
    type: "réservation · studio yoga",
    name: "Studio Lumière",
    desc: "Site de réservation multi-étapes, stepper animé, scroll animations useInView, typographie Cormorant.",
    tags: ["React", "TypeScript", "Stepper", "Animations"],
    github: "https://github.com/NayrPro/studio-lumiere",
    live: "https://studio-lumiere-six.vercel.app/",
    img: "/lumiere.png",
    alt: "Studio Lumière",
  },
];

export default function Projects() {
  return (
    <section className={styles.section} id="projets">
      <p className={styles.eyebrow}>// projets</p>
      <h2 className={styles.title}>Réalisations récentes</h2>
      <div className={styles.grid}>
        {projects.map((p) => (
          <div key={p.name} className={styles.card}>
            <div className={styles.imgWrap}>
              {p.img ? (
                <Image src={p.img} alt={p.alt} fill style={{ objectFit: "cover", objectPosition: "top" }} />
              ) : (
                <div className={styles.placeholder}>
                  <span className={styles.placeholderTitle}>studio.lumiere</span>
                  <div className={styles.placeholderTags}>
                    {["Yoga", "Réservation", "Lyon 6e"].map((t) => (
                      <span key={t} className={styles.placeholderTag}>{t}</span>
                    ))}
                  </div>
                </div>
              )}
              <div className={styles.overlay}>
                <a href={p.live} target="_blank" rel="noopener noreferrer" className={`${styles.overlayBtn} ${styles.solid}`}>↗ Live</a>
                <a href={p.github} className={`${styles.overlayBtn} ${styles.ghost}`}>GitHub</a>
              </div>
            </div>
            <div className={styles.body}>
              <p className={styles.type}>{p.type}</p>
              <h3 className={styles.name}>{p.name}</h3>
              <p className={styles.desc}>{p.desc}</p>
              <div className={styles.tags}>
                {p.tags.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
