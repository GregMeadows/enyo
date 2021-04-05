/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProductInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  price: number,
  createdAt?: string | null,
  createdBy: string,
  _version?: number | null,
};

export type ModelProductConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  createdBy?: ModelStringInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Product = {
  __typename: "Product",
  id?: string,
  name?: string,
  description?: string | null,
  price?: number,
  createdAt?: string,
  createdBy?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  updatedAt?: string,
  images?: ModelImageConnection,
};

export type ModelImageConnection = {
  __typename: "ModelImageConnection",
  items?:  Array<Image | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Image = {
  __typename: "Image",
  id?: string,
  productID?: string,
  url?: string,
  description?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
  product?: Product,
};

export type UpdateProductInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  price?: number | null,
  createdAt?: string | null,
  createdBy?: string | null,
  _version?: number | null,
};

export type DeleteProductInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateImageInput = {
  id?: string | null,
  productID: string,
  url: string,
  description: string,
  _version?: number | null,
  imageProductId?: string | null,
};

export type ModelImageConditionInput = {
  productID?: ModelIDInput | null,
  url?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelImageConditionInput | null > | null,
  or?: Array< ModelImageConditionInput | null > | null,
  not?: ModelImageConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateImageInput = {
  id: string,
  productID?: string | null,
  url?: string | null,
  description?: string | null,
  _version?: number | null,
  imageProductId?: string | null,
};

export type DeleteImageInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  createdBy?: ModelStringInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items?:  Array<Product | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelImageFilterInput = {
  id?: ModelIDInput | null,
  productID?: ModelIDInput | null,
  url?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelImageFilterInput | null > | null,
  or?: Array< ModelImageFilterInput | null > | null,
  not?: ModelImageFilterInput | null,
};

export type CreateProductMutationVariables = {
  input?: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description?: string | null,
    price: number,
    createdAt: string,
    createdBy: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
    images?:  {
      __typename: "ModelImageConnection",
      items?:  Array< {
        __typename: "Image",
        id: string,
        productID: string,
        url: string,
        description: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        product?:  {
          __typename: "Product",
          id: string,
          name: string,
          description?: string | null,
          price: number,
          createdAt: string,
          createdBy: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          updatedAt: string,
        } | null,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type UpdateProductMutationVariables = {
  input?: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description?: string | null,
    price: number,
    createdAt: string,
    createdBy: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
    images?:  {
      __typename: "ModelImageConnection",
      items?:  Array< {
        __typename: "Image",
        id: string,
        productID: string,
        url: string,
        description: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        product?:  {
          __typename: "Product",
          id: string,
          name: string,
          description?: string | null,
          price: number,
          createdAt: string,
          createdBy: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          updatedAt: string,
        } | null,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type DeleteProductMutationVariables = {
  input?: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description?: string | null,
    price: number,
    createdAt: string,
    createdBy: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
    images?:  {
      __typename: "ModelImageConnection",
      items?:  Array< {
        __typename: "Image",
        id: string,
        productID: string,
        url: string,
        description: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        product?:  {
          __typename: "Product",
          id: string,
          name: string,
          description?: string | null,
          price: number,
          createdAt: string,
          createdBy: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          updatedAt: string,
        } | null,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type CreateImageMutationVariables = {
  input?: CreateImageInput,
  condition?: ModelImageConditionInput | null,
};

export type CreateImageMutation = {
  createImage?:  {
    __typename: "Image",
    id: string,
    productID: string,
    url: string,
    description: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      createdAt: string,
      createdBy: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
      images?:  {
        __typename: "ModelImageConnection",
        items?:  Array< {
          __typename: "Image",
          id: string,
          productID: string,
          url: string,
          description: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateImageMutationVariables = {
  input?: UpdateImageInput,
  condition?: ModelImageConditionInput | null,
};

export type UpdateImageMutation = {
  updateImage?:  {
    __typename: "Image",
    id: string,
    productID: string,
    url: string,
    description: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      createdAt: string,
      createdBy: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
      images?:  {
        __typename: "ModelImageConnection",
        items?:  Array< {
          __typename: "Image",
          id: string,
          productID: string,
          url: string,
          description: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteImageMutationVariables = {
  input?: DeleteImageInput,
  condition?: ModelImageConditionInput | null,
};

export type DeleteImageMutation = {
  deleteImage?:  {
    __typename: "Image",
    id: string,
    productID: string,
    url: string,
    description: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      createdAt: string,
      createdBy: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
      images?:  {
        __typename: "ModelImageConnection",
        items?:  Array< {
          __typename: "Image",
          id: string,
          productID: string,
          url: string,
          description: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items?:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      createdAt: string,
      createdBy: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
      images?:  {
        __typename: "ModelImageConnection",
        items?:  Array< {
          __typename: "Image",
          id: string,
          productID: string,
          url: string,
          description: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetProductQueryVariables = {
  id?: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description?: string | null,
    price: number,
    createdAt: string,
    createdBy: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
    images?:  {
      __typename: "ModelImageConnection",
      items?:  Array< {
        __typename: "Image",
        id: string,
        productID: string,
        url: string,
        description: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        product?:  {
          __typename: "Product",
          id: string,
          name: string,
          description?: string | null,
          price: number,
          createdAt: string,
          createdBy: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          updatedAt: string,
        } | null,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type SyncProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProductsQuery = {
  syncProducts?:  {
    __typename: "ModelProductConnection",
    items?:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      createdAt: string,
      createdBy: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
      images?:  {
        __typename: "ModelImageConnection",
        items?:  Array< {
          __typename: "Image",
          id: string,
          productID: string,
          url: string,
          description: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetImageQueryVariables = {
  id?: string,
};

export type GetImageQuery = {
  getImage?:  {
    __typename: "Image",
    id: string,
    productID: string,
    url: string,
    description: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      createdAt: string,
      createdBy: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
      images?:  {
        __typename: "ModelImageConnection",
        items?:  Array< {
          __typename: "Image",
          id: string,
          productID: string,
          url: string,
          description: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
  } | null,
};

export type ListImagesQueryVariables = {
  filter?: ModelImageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListImagesQuery = {
  listImages?:  {
    __typename: "ModelImageConnection",
    items?:  Array< {
      __typename: "Image",
      id: string,
      productID: string,
      url: string,
      description: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      product?:  {
        __typename: "Product",
        id: string,
        name: string,
        description?: string | null,
        price: number,
        createdAt: string,
        createdBy: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        updatedAt: string,
        images?:  {
          __typename: "ModelImageConnection",
          nextToken?: string | null,
          startedAt?: number | null,
        } | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncImagesQueryVariables = {
  filter?: ModelImageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncImagesQuery = {
  syncImages?:  {
    __typename: "ModelImageConnection",
    items?:  Array< {
      __typename: "Image",
      id: string,
      productID: string,
      url: string,
      description: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      product?:  {
        __typename: "Product",
        id: string,
        name: string,
        description?: string | null,
        price: number,
        createdAt: string,
        createdBy: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        updatedAt: string,
        images?:  {
          __typename: "ModelImageConnection",
          nextToken?: string | null,
          startedAt?: number | null,
        } | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description?: string | null,
    price: number,
    createdAt: string,
    createdBy: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
    images?:  {
      __typename: "ModelImageConnection",
      items?:  Array< {
        __typename: "Image",
        id: string,
        productID: string,
        url: string,
        description: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        product?:  {
          __typename: "Product",
          id: string,
          name: string,
          description?: string | null,
          price: number,
          createdAt: string,
          createdBy: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          updatedAt: string,
        } | null,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description?: string | null,
    price: number,
    createdAt: string,
    createdBy: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
    images?:  {
      __typename: "ModelImageConnection",
      items?:  Array< {
        __typename: "Image",
        id: string,
        productID: string,
        url: string,
        description: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        product?:  {
          __typename: "Product",
          id: string,
          name: string,
          description?: string | null,
          price: number,
          createdAt: string,
          createdBy: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          updatedAt: string,
        } | null,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description?: string | null,
    price: number,
    createdAt: string,
    createdBy: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
    images?:  {
      __typename: "ModelImageConnection",
      items?:  Array< {
        __typename: "Image",
        id: string,
        productID: string,
        url: string,
        description: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        product?:  {
          __typename: "Product",
          id: string,
          name: string,
          description?: string | null,
          price: number,
          createdAt: string,
          createdBy: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          updatedAt: string,
        } | null,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnCreateImageSubscription = {
  onCreateImage?:  {
    __typename: "Image",
    id: string,
    productID: string,
    url: string,
    description: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      createdAt: string,
      createdBy: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
      images?:  {
        __typename: "ModelImageConnection",
        items?:  Array< {
          __typename: "Image",
          id: string,
          productID: string,
          url: string,
          description: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateImageSubscription = {
  onUpdateImage?:  {
    __typename: "Image",
    id: string,
    productID: string,
    url: string,
    description: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      createdAt: string,
      createdBy: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
      images?:  {
        __typename: "ModelImageConnection",
        items?:  Array< {
          __typename: "Image",
          id: string,
          productID: string,
          url: string,
          description: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteImageSubscription = {
  onDeleteImage?:  {
    __typename: "Image",
    id: string,
    productID: string,
    url: string,
    description: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      createdAt: string,
      createdBy: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
      images?:  {
        __typename: "ModelImageConnection",
        items?:  Array< {
          __typename: "Image",
          id: string,
          productID: string,
          url: string,
          description: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
  } | null,
};
