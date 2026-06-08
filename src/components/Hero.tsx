import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.tag}>⚡ Développeur freelance · Paris · Remote France</div>
          <h1 className={styles.title}>
            Je build des<br />
            interfaces <span className={styles.cyan}>React</span><br />
            <span className={styles.dim}>qui performent.</span>
          </h1>
          <p className={styles.sub}>
            Spécialisé Next.js 15 / TypeScript / App Router. Disponible pour de la
            sous-traitance agence ou des projets directs artisans et PME.
          </p>
          <div className={styles.actions}>
            <a href="#projets" className={styles.btnPrimary}>Voir les projets →</a>
            <a href="#contact" className={styles.btnGhost}>Me contacter</a>
          </div>
          <div className={styles.stack}>
            {["React", "Next.js 15", "TypeScript", "Tailwind", "PHP / Symfony", "GraphQL", "PostgreSQL", "Vercel"].map((t, i) => (
              <span key={t} className={`${styles.chip} ${i < 3 ? styles.active : ""}`}>{t}</span>
            ))}
          </div>
        </div>

        <div className={styles.terminal}>
          <div className={styles.termBar}>
            <span className={`${styles.termDot} ${styles.red}`} />
            <span className={`${styles.termDot} ${styles.yellow}`} />
            <span className={`${styles.termDot} ${styles.green}`} />
            <span className={styles.termTitle}>portfolio.ts — node</span>
          </div>
          <div className={styles.termBody}>
            <div className={styles.line}><span className={styles.prompt}>›</span><span className={styles.cmd}>const dev = {"{"}</span></div>
            <div className={styles.line}><span className={styles.out}><span className={styles.purple}>name</span>: <span className={styles.yellow}>&quot;Triton Org&quot;</span>,</span></div>
            <div className={styles.line}><span className={styles.out}><span className={styles.purple}>stack</span>: [<span className={styles.yellow}>&quot;React&quot;</span>, <span className={styles.yellow}>&quot;Next.js&quot;</span>],</span></div>
            <div className={styles.line}><span className={styles.out}><span className={styles.purple}>tjm</span>: <span className={styles.yellow}>&quot;330 €/j&quot;</span>,</span></div>
            <div className={styles.line}><span className={styles.out}><span className={styles.purple}>dispo</span>: <span className={styles.tgreen}>true</span>,</span></div>
            <div className={styles.line}><span className={styles.out}><span className={styles.purple}>remote</span>: <span className={styles.tgreen}>true</span></span></div>
            <div className={styles.line}><span className={styles.cmd}>{"}"}</span></div>
            <div className={`${styles.line} ${styles.mt}`}><span className={styles.prompt}>›</span><span className={styles.cmd}>dev.contact()</span></div>
            <div className={styles.line}><span className={`${styles.out} ${styles.tgreen}`}>✓ Message envoyé — réponse sous 24h</span></div>
            <div className={styles.line}><span className={styles.prompt}>›</span><span className={styles.cursor} /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
