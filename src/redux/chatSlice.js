import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [
    {
      role: "assistant",
      text: "Hello! Tell me about today's HCP interaction, and I'll extract the important details.",
    },
  ],

  loading: false,

  error: null,
};

const chatSlice = createSlice({
  name: "chat",

  initialState,

  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },

    setMessages: (state, action) => {
      state.messages = action.payload;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },

    clearChat: (state) => {
      state.messages = [
        {
          role: "assistant",
          text: "Hello! Tell me about today's HCP interaction, and I'll extract the important details.",
        },
      ];

      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  addMessage,
  setMessages,
  setLoading,
  setError,
  clearChat,
} = chatSlice.actions;

export default chatSlice.reducer;