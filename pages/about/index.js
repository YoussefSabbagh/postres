import Layout from '../../components/Layout';
import styles from './about.module.scss';
import { getAllPartner } from '../../services';

import Values from '../../components/aboutUs/values';

const About = () => {
  return (
    <Layout title={'Next Level Partners About US'}>
      <section id="about" className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <h1 className={styles.subtitle}>About Us</h1>
          <h2 className={styles.title}>The best desserts since 2009</h2>
          <p className={styles.text}>
            <strong>{"Maria's Desserts"} </strong> has the best cookies and cake
            made with the radicional recipe of granmother
          </p>
        </div>
        <Values />
      </section>
    </Layout>
  );
};

export default About;

// Fetch data at build time
export const getStaticProps = async () => {
  const partners = (await getAllPartner()) || [];

  return {
    props: { partners },
    revalidate: 10,
  };
};
