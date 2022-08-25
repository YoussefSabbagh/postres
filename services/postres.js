import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getAllProducts = async () => {
  const query = gql`
    query allProducts {
      products {
        name
        description
        ingredients
        categories {
          name
          description
        }
        photo {
          id
          url
        }
        otherPhoto {
          id
          url
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.products;
};

export const getActiveMenu = async () => {
  const query = gql`
    query menus {
      menus(where: { menuStatus: "Activo" }) {
        id
        name
        title
        menuStatus
        seccionDelMenu {
          ... on MenuSeccion {
            id
            nameSection
            photoSection {
              url
            }
            productPrice {
              product {
                name
                description
              }
              precio
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result;
};

export const getAllCategories = async () => {
  const query = gql`
    query AllCategories {
      categories {
        id
        name
        slug
        stage
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.categories;
};
