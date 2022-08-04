import styles from './product.module.scss';
import Image from 'next/image';

const Products = ({ heading, data }) => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>{heading}</h1>
      <div className={styles.wrapper}>
        {data.map((product, index) => {
          return (
            <article className={styles.card} key={index}>
              <div className={styles.image__container}>
                <Image
                  className={styles.image}
                  src={product.img}
                  alt={product.alt}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.info}>
                <h2 className={styles.name}>{product.name}</h2>
                <p className={styles.desc}>{product.desc}</p>
                <p className={styles.price}>{product.price}</p>
                <button className={styles.button}>{product.button}</button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
