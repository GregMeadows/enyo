/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createImage = /* GraphQL */ `
  mutation CreateImage(
    $input: CreateImageInput!
    $condition: ModelImageConditionInput
  ) {
    createImage(input: $input, condition: $condition) {
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
export const updateImage = /* GraphQL */ `
  mutation UpdateImage(
    $input: UpdateImageInput!
    $condition: ModelImageConditionInput
  ) {
    updateImage(input: $input, condition: $condition) {
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
export const deleteImage = /* GraphQL */ `
  mutation DeleteImage(
    $input: DeleteImageInput!
    $condition: ModelImageConditionInput
  ) {
    deleteImage(input: $input, condition: $condition) {
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
