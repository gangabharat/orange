import { ActionReducerMap } from "@ngrx/store";
import * as fromProduct from "../product/store/product.reducer";

export interface AppState {
  products: fromProduct.State;
}

export const appReducer : ActionReducerMap<AppState> = {
    products : fromProduct.productReducer
};