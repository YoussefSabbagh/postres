import Layout from '../../components/Layout';

const MenuScreen = () => {
  return (
    <Layout title={"Marias's Dessert Menu"}>
      <section
        className="h-screen bg-pink-100 flex items-center justify-center"
        id="menu"
      >
        <h1 className="text-4xl t-10">Menu</h1>
      </section>
    </Layout>
  );
};

export default MenuScreen;
