/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
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
export const syncProducts = /* GraphQL */ `
  query SyncProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getImage = /* GraphQL */ `
  query GetImage($id: ID!) {
    getImage(id: $id) {
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
export const listImages = /* GraphQL */ `
  query ListImages(
    $filter: ModelImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          images {
            nextToken
            startedAt
          }
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncImages = /* GraphQL */ `
  query SyncImages(
    $filter: ModelImageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncImages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          images {
            nextToken
            startedAt
          }
        }
      }
      nextToken
      startedAt
    }
  }
`;
