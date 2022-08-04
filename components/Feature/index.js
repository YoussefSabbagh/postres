import styles from './Feature.module.scss';
const Feature = () => {
  return (
    <article className={styles.container}>
      <h1 className="title">Torta del dia</h1>
      <p>Torta doble chocolate </p>
      <button className={styles.button}>Ordena ya</button>
    </article>
  );
};

export default Feature;
