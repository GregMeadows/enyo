/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
      id
      name
      description
      price
      createdAt
      createdBy
      images {
        items {
          id
          productID
          url
          description
          product {
            id
            name
            description
            price
            createdAt
            createdBy
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
      id
      name
      description
      price
      createdAt
      createdBy
      images {
        items {
          id
          productID
          url
          description
          product {
            id
            name
            description
            price
            createdAt
            createdBy
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
      id
      name
      description
      price
      createdAt
      createdBy
      images {
        items {
          id
          productID
          url
          description
          product {
            id
            name
            description
            price
            createdAt
            createdBy
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const onCreateImage = /* GraphQL */ `
  subscription OnCreateImage {
    onCreateImage {
      id
      productID
      url
      description
      product {
        id
        name
        description
        price
        createdAt
        createdBy
        images {
          items {
            id
            productID
            url
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateImage = /* GraphQL */ `
  subscription OnUpdateImage {
    onUpdateImage {
      id
      productID
      url
      description
      product {
        id
        name
        description
        price
        createdAt
        createdBy
        images {
          items {
            id
            productID
            url
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteImage = /* GraphQL */ `
  subscription OnDeleteImage {
    onDeleteImage {
      id
      productID
      url
      description
      product {
        id
        name
        description
        price
        createdAt
        createdBy
        images {
          items {
            id
            productID
            url
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
