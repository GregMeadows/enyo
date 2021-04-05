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
      _version
      _deleted
      _lastChangedAt
      updatedAt
      images {
        items {
          id
          productID
          url
          description
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          product {
            id
            name
            description
            price
            createdAt
            createdBy
            _version
            _deleted
            _lastChangedAt
            updatedAt
          }
        }
        nextToken
        startedAt
      }
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
      _version
      _deleted
      _lastChangedAt
      updatedAt
      images {
        items {
          id
          productID
          url
          description
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          product {
            id
            name
            description
            price
            createdAt
            createdBy
            _version
            _deleted
            _lastChangedAt
            updatedAt
          }
        }
        nextToken
        startedAt
      }
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
      _version
      _deleted
      _lastChangedAt
      updatedAt
      images {
        items {
          id
          productID
          url
          description
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          product {
            id
            name
            description
            price
            createdAt
            createdBy
            _version
            _deleted
            _lastChangedAt
            updatedAt
          }
        }
        nextToken
        startedAt
      }
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      product {
        id
        name
        description
        price
        createdAt
        createdBy
        _version
        _deleted
        _lastChangedAt
        updatedAt
        images {
          items {
            id
            productID
            url
            description
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      product {
        id
        name
        description
        price
        createdAt
        createdBy
        _version
        _deleted
        _lastChangedAt
        updatedAt
        images {
          items {
            id
            productID
            url
            description
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      product {
        id
        name
        description
        price
        createdAt
        createdBy
        _version
        _deleted
        _lastChangedAt
        updatedAt
        images {
          items {
            id
            productID
            url
            description
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
    }
  }
`;
