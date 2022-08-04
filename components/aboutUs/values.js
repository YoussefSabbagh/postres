import Image from 'next/image';
import styles from './values.module.scss';

const Values = () => {
  return (
    <div className="container w-full text-center">
      <h2 className={styles.subtitle}>Values</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3 className="text-4xl mb-5">Our History</h3>
          <p className="font-bold mb-1">
            cing jujubes sugar plum ice cream chocolate bar. Oat cake cotton
            candy candy jelly-o sesame snaps. Oat cake bonbon chocolate
            macaroon.
          </p>
          <p>
            chupa chups jelly beans danish lollipop halvah. Chocolate bar
            tootsie roll cake tart caramels dessert. Fruitcake candy canes
            halvah sweet chocolate cake lollipop tart muffin candy canes. Bear
            claw macaroon sweet roll danish ice cream fruitcake chocolate bar
            cheesecake. Fruitcake tootsie roll sweet pastry sugar plum soufflé
            tiramisu candy cheesecake. Sweet roll croissant cake topping cookie
            chupa chups pastry pudding. Marshmallow chocolate bar sweet roll
            chocolate cake chocolate cake cookie tiramisu tootsie roll. Pudding
            shortbread wafer pie ice cream dessert tiramisu chocolate bear claw.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.image__container}>
            <Image
              src="/images/dulces/chef.png"
              alt="Chef"
              width={100}
              height={100}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
        <div className={styles.card}>
          <h3 className="text-4xl mb-5">Our Vision</h3>
          <p className="font-bold mb-2">
            cing jujubes sugar plum ice cream chocolate bar. Oat cake cotton
            candy candy jelly-o sesame snaps. Oat cake bonbon chocolate
            macaroon.
          </p>
          <p>
            chupa chups jelly beans danish lollipop halvah. Chocolate bar
            tootsie roll cake tart caramels dessert. Fruitcake candy canes
            halvah sweet chocolate cake lollipop tart muffin candy canes. Bear
            claw macaroon sweet roll danish ice cream fruitcake chocolate bar
            cheesecake. Fruitcake tootsie roll sweet pastry sugar plum soufflé
            tiramisu candy cheesecake. Sweet roll croissant cake topping cookie
            chupa chups pastry pudding. Marshmallow chocolate bar sweet roll
            chocolate cake chocolate cake cookie tiramisu tootsie roll. Pudding
            shortbread wafer pie ice cream dessert tiramisu chocolate bear claw.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Values;
