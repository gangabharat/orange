import { Action } from "@ngrx/store";
import { Product } from "../product.model";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export class AddProduct implements Action {
  readonly type = ADD_PRODUCT;
  constructor(public payload: Product) {}
}

export class AddProducts implements Action {
  readonly type = ADD_PRODUCTS;
  constructor(public payload: Product[]) {}
}

export class UpdateProduct implements Action {
  readonly type = UPDATE_PRODUCT;
  constructor(public payload: { index: number; product: Product }) {}
}

export class DeleteProduct implements Action {
  readonly type = DELETE_PRODUCT;
  constructor(public payload: string) {}
}

export type ProductActions =
  | AddProduct
  | AddProducts
  | UpdateProduct
  | DeleteProduct;
