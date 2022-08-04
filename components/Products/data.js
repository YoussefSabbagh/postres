import product1 from '../../public/images/dulces/chocolat-1.jpg';
import product2 from '../../public/images/dulces/product-2.jpg';
import product3 from '../../public/images/dulces/product-3.jpg';
import product4 from '../../public/images/dulces/product-3.jpg';
import product5 from '../../public/images/dulces/product-3.jpg';
import sweet1 from '../../public/images/dulces/sweet3.jpg';
import sweet2 from '../../public/images/dulces/sweet-2.jpg';
import sweet3 from '../../public/images/dulces/sweet-3.jpg';

export const productData = [
  {
    img: product1,
    alt: 'Delicias de Chocolate',
    name: 'Torta de Chocolate',
    desc: 'La original torta de la abuela con crema de chocolate',
    price: '$19.99',
    button: 'Add to Cart',
  },
  {
    img: product2,
    alt: 'Delicias de Chocolate',
    name: 'Marquesa de Chocolate',
    desc: 'Base de galletas "María", remojadas en leche, sumergida en crema de chocolate',
    price: '$16.99',
    button: 'Add to Cart',
  },
  {
    img: product3,
    alt: 'Pizza',
    name: 'Volcán de Chocolate',
    desc: ' Bizcocho de chocolate con una cremosa salsa de chocolate en el centro.',
    price: '$14.99',
    button: 'Add to Cart',
  },
  {
    img: product4,
    alt: 'Pizza',
    name: 'Browne',
    desc: ' Bizcocho de chocolate con una cremosa salsa de chocolate en el centro.',
    price: '$14.99',
    button: 'Add to Cart',
  },
  {
    img: product5,
    alt: 'Other',
    name: 'Volcán de Chocolate',
    desc: ' Bizcocho de chocolate con una cremosa salsa de chocolate en el centro.',
    price: '$14.99',
    button: 'Add to Cart',
  },
];

export const productDataTwo = [
  {
    img: sweet2,
    alt: 'Donuts',
    name: 'Doughlicious',
    desc: 'Belgian chocolate glazed donuts covered in icing with sprinkles on top',
    price: '$9.99',
    button: 'Add to Cart',
  },
  {
    img: sweet3,
    alt: 'Ice Cream',
    name: 'Caramel Wonder',
    desc: 'Vanilla ice cream covered with caramel and chocolate glaze topped with a coco stick',
    price: '$12.99',
    button: 'Add to Cart',
  },
  {
    img: sweet1,
    alt: 'Brownie',
    name: 'Brownie Bunch',
    desc: 'Double fudge brownie squares topped with white chocolate pieces and macadamia nuts',
    price: '$9.99',
    button: 'Add to Cart',
  },
];

export const MenuData = [
  {
    id: 'menu1',
    img: sweet1,
    alt: 'Donuts',
    title: 'Delicias de Chocolate',
    menu: [
      {
        name: 'Torta de Chocolate',
        desc: 'La original torta de la abuela con crema de chocolate',
        price: 25,
      },
      {
        name: 'Marquesa de Chocolate',
        desc: 'Base de galletas "María", remojadas en leche, sumergida en crema de chocolate',
        price: 18.5,
      },
      {
        name: 'Volcán de Chocolate',
        desc: 'Bizcocho de chocolate con una cremosa salsa de chocolate en el centro.',
        price: 22.5,
      },
      {
        name: 'Brownie',
        desc: 'Biscocho de chocolate, con trozos de chocolate.',
        price: 12.5,
      },
    ],
  },
  {
    id: 'menu2',
    img: sweet2,
    alt: 'Donuts',
    title: 'Delicias de Criollas',
    menu: [
      {
        name: 'Quesillo',
        desc: 'La original torta de la abuela con crema de chocolate',
        price: 12.5,
      },
      {
        name: 'Arroz con leche',
        desc: 'Base de galletas "María", remojadas en leche, sumergida en crema de chocolate',
        price: 18.5,
      },
      {
        name: 'Tres leches',
        desc: 'Bizcocho de chocolate con una cremosa salsa de chocolate en el centro.',
        price: 22.5,
      },
      {
        name: 'Dulce de Lechoza',
        desc: 'Biscocho de chocolate, con trozos de chocolate.',
        price: 12.5,
      },
    ],
  },
  {
    id: 'menu3',
    img: sweet3,
    alt: 'Donuts',
    title: 'Combos Especiales',
    menu: [
      {
        name: 'Combo #1',
        desc: 'La original torta de la abuela con crema de chocolate',
        price: 12.5,
      },
      {
        name: 'Combo #2',
        desc: 'Base de galletas "María", remojadas en leche, sumergida en crema de chocolate',
        price: 18.5,
      },
      {
        name: 'Combo #3',
        desc: 'Bizcocho de chocolate con una cremosa salsa de chocolate en el centro.',
        price: 22.5,
      },
      {
        name: 'Combo #4',
        desc: 'Biscocho de chocolate, con trozos de chocolate.',
        price: 12.5,
      },
    ],
  },
];
