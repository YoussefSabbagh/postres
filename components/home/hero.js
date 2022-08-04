import styles from '../../styles/index.module.scss';

const Hero = () => {
  return (
    <div className={styles.home__content}>
      <div className={styles.home__items}>
        <h1 className={styles.home__title}>Los postres de Maria</h1>
        <p className={styles.home__description}>Con la receta de la abuela</p>
        <button className={styles.home__button}>Pedidos</button>
      </div>
    </div>
  );
};

export default Hero;
