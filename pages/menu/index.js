import Layout from '../../components/Layout';
import HeroMenu from '../../components/menu/menuhero';

import { MenuData } from '../../components/Products/data';
import MenuDetail from '../../components/menu/menu';

const MenuScreen = () => {
  return (
    <Layout title={"Marias's Dessert Menu"}>
      <section id="menu" className="mt-[var(--header-height)]">
        <HeroMenu />
        <MenuDetail data={MenuData} />
        {/* <Especial /> */}
      </section>
    </Layout>
  );
};

export default MenuScreen;
