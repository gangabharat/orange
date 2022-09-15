import { Product } from "../product.model";
import * as ProductActions from "./product.action";

//Step 1 create state of the store
export interface State {
  products: Product[];
}

//step 2 create initial state of the store
const initialState: State = {
  products: [
    {
      id: "1",
      address: "New Add",
      model: "mode",
      name: "name",
      number: " number",
    },
    {
      id: "2",
      address: "New Add",
      model: "mode",
      name: "name",
      number: " number",
    },
  ],
};

//step 3 create reducer of the store
export function productReducer(
  state = initialState,
  action: ProductActions.ProductActions
) {
  switch (action.type) {
    case ProductActions.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case ProductActions.ADD_PRODUCTS:
      return {
        ...state,
        products: [...state.products, ...action.payload],
      };

    case ProductActions.UPDATE_PRODUCT:
      const product = state.products[action.payload.index];
      const updateProuct = {
        ...product,
        ...action.payload.product,
      };
      const updateProucts = [...state.products];
      updateProucts[action.payload.index] = updateProuct;

      return {
        ...state,
        products: updateProucts,
      };

    case ProductActions.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((x, index) => {
          return x.id !== action.payload;
        }),
      };

    default:
      return state;
  }
}
