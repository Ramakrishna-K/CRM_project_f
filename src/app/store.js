import { configureStore } from "@reduxjs/toolkit";

import interactionReducer from "../redux/interactionSlice";
import chatReducer from "../redux/chatSlice";

export const store = configureStore({
  reducer: {
    interaction: interactionReducer,
    chat: chatReducer,
  },
});

export default store;