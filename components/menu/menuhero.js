import styles from './menuhero.module.scss';

const HeroMenu = () => {
  return (
    <div className={styles.menu__content}>
      <div className={styles.menu__items}>
        <h1 className={styles.menu__title}>Explora nuestro Menu</h1>
      </div>
    </div>
  );
};

export default HeroMenu;
