import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  totalAmount: 0,
  showBasket: false,
  items: [],
  totalPrice: 0,
};
const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    increment(state, action) {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingItem = state.items[existingItemIndex];

      let updatedItems;
      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount + action.payload.amount,
          price: Number(existingItem.price) + Number(action.payload.price),
        };

        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;

        state.items = updatedItems;
      } else {
        state.items = state.items.concat(action.payload);
      }
      state.totalAmount++;
      state.totalPrice =
        state.totalPrice + action.payload.price * action.payload.amount;
    },
    decrement(state, action) {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let updatedItems;
      if (state.items[existingItemIndex].amount === 1) {
        updatedItems = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.items = updatedItems;
      } else {
        state.items[existingItemIndex].price =
          state.items[existingItemIndex].price -
          action.payload.price * action.payload.amount;

        state.items[existingItemIndex].amount =
          state.items[existingItemIndex].amount - action.payload.amount;
      }

      state.totalAmount--;
      state.totalPrice =
        state.totalPrice - action.payload.price * action.payload.amount;
    },
    toggle(state) {
      state.showBasket = !state.showBasket;
    },
  },
});

const store = configureStore({
  reducer: basketSlice.reducer,
});
export const basketActions = basketSlice.actions;
export default store;
