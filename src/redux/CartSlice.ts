import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

export interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  qty: number;
}

interface CartState {
  cartitems: CartItem[];
  totalAmount: number;
  shipping: number;
}

const getCartFromLocalStorage = (): CartItem[] => {

  const data = localStorage.getItem(
    "cartitems"
  );

  return data ? JSON.parse(data) : [];

};

const calculateTotal = (
  cartitems: CartItem[]
): number => {

  return cartitems.reduce(
    (total, item) =>
      total + item.price * item.qty,
    0
  );

};

const calculateShipping = (
  cartitems: CartItem[]
): number => {

  return cartitems.length > 0
    ? 50
    : 0;

};

const initialCartItems =
  getCartFromLocalStorage();

const initialState: CartState = {

  cartitems: initialCartItems,

  totalAmount: calculateTotal(
    initialCartItems
  ),

  shipping: calculateShipping(
    initialCartItems
  ),

};

const cartSlice = createSlice({

  name: "cart",

  initialState,

  reducers: {

    addtocart: (
      state,
      action: PayloadAction<CartItem>
    ) => {

      const existingItem =
        state.cartitems.find(
          (item) =>
            item.id === action.payload.id
        );

      if (existingItem) {

        existingItem.qty += 1;

      } else {

        state.cartitems.push({
          ...action.payload,
          qty: 1,
        });

      }

      state.totalAmount =
        calculateTotal(
          state.cartitems
        );

      state.shipping =
        calculateShipping(
          state.cartitems
        );

      localStorage.setItem(
        "cartitems",
        JSON.stringify(state.cartitems)
      );

    },

    increaseqty: (
      state,
      action: PayloadAction<number>
    ) => {

      const item =
        state.cartitems.find(
          (item) =>
            item.id === action.payload
        );

      if (item) {

        item.qty += 1;

      }

      state.totalAmount =
        calculateTotal(
          state.cartitems
        );

      state.shipping =
        calculateShipping(
          state.cartitems
        );

      localStorage.setItem(
        "cartitems",
        JSON.stringify(state.cartitems)
      );

    },

    decreaseqty: (
      state,
      action: PayloadAction<number>
    ) => {

      const item =
        state.cartitems.find(
          (item) =>
            item.id === action.payload
        );

      if (item && item.qty > 1) {

        item.qty -= 1;

      }

      state.totalAmount =
        calculateTotal(
          state.cartitems
        );

      state.shipping =
        calculateShipping(
          state.cartitems
        );

      localStorage.setItem(
        "cartitems",
        JSON.stringify(state.cartitems)
      );

    },

    removefromcart: (
      state,
      action: PayloadAction<number>
    ) => {

      state.cartitems =
        state.cartitems.filter(
          (item) =>
            item.id !== action.payload
        );

      state.totalAmount =
        calculateTotal(
          state.cartitems
        );

      state.shipping =
        calculateShipping(
          state.cartitems
        );

      localStorage.setItem(
        "cartitems",
        JSON.stringify(state.cartitems)
      );

    },

  },

});

export const {

  addtocart,
  increaseqty,
  decreaseqty,
  removefromcart,

} = cartSlice.actions;

export default cartSlice.reducer;