import Layout from '../components/Layout';
import Hero from '../components/home/hero';
import Products from '../components/Products';
import Feature from '../components/Feature';
import Contact from '../components/contact';
import { productData, productDataTwo } from '../components/Products/data';

// import Services from '../components/home/services';

export default function Home() {
  return (
    <Layout title={"Marias's Dessert Home Page"}>
      <section id="home">
        <Hero />
        <Products heading="Delicias de Chocolate" data={productData} />
        <Feature />
        <Products heading="Delicias Criollas" data={productDataTwo} />
      </section>
      <Contact />
    </Layout>
  );
}
