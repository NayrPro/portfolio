"use client";
import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");
    try {
      const res = await fetch("https://formspree.io/f/mykawbjw", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className={styles.section} id="contact">
      <div className={styles.card}>
        <div className={styles.left}>
          <p className={styles.label}>// contact</p>
          <h2 className={styles.title}>Un projet en tête ?</h2>
          <p className={styles.desc}>
            Disponible pour de la sous-traitance agence ou des projets directs.
            TJM 330 €/j. Réponse sous 24h.
          </p>
          <div className={styles.links}>
            <a href="https://linkedin.com/in/nayir-pro" className={styles.link} target="_blank" rel="noopener noreferrer">
              <div className={styles.linkLabel}>linkedin</div>
              linkedin.com/in/nayir-pro
            </a>
            <a href="https://www.malt.fr/profile/nayira" className={styles.link} target="_blank" rel="noopener noreferrer">
              <div className={styles.linkLabel}>malt</div>
              malt.fr/profile/nayira
            </a>
            <a href="https://github.com/NayrPro" className={styles.link} target="_blank" rel="noopener noreferrer">
              <div className={styles.linkLabel}>github</div>
              github.com/NayrPro
            </a>
          </div>
        </div>

        <div className={styles.right}>
          {status === "success" ? (
            <div className={styles.success}>
              <div className={styles.successIcon}>✓</div>
              <h3>Message envoyé !</h3>
              <p>Je vous réponds sous 24h.</p>
            </div>
          ) : (
            <>
              <div className={styles.row}>
                <div className={styles.group}>
                  <label className={styles.fieldLabel} htmlFor="name">nom</label>
                  <input className={styles.input} id="name" name="name" type="text" placeholder="Jean Dupont" value={form.name} onChange={handleChange} required />
                </div>
                <div className={styles.group}>
                  <label className={styles.fieldLabel} htmlFor="email">email</label>
                  <input className={styles.input} id="email" name="email" type="email" placeholder="jean@agence.fr" value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div className={styles.group}>
                <label className={styles.fieldLabel} htmlFor="subject">sujet</label>
                <input className={styles.input} id="subject" name="subject" type="text" placeholder="Sous-traitance React / Mission courte…" value={form.subject} onChange={handleChange} />
              </div>
              <div className={styles.group}>
                <label className={styles.fieldLabel} htmlFor="message">message</label>
                <textarea className={styles.textarea} id="message" name="message" placeholder="Décrivez votre projet ou votre besoin…" value={form.message} onChange={handleChange} required />
              </div>
              {status === "error" && (
                <p className={styles.error}>Une erreur est survenue. Réessayez ou contactez-moi directement.</p>
              )}
              <button className={styles.btn} onClick={handleSubmit} disabled={status === "loading"}>
                {status === "loading" ? "Envoi en cours…" : "Envoyer le message →"}
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
