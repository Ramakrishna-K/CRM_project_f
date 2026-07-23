
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hcp_name: "",
  interaction_type: "Meeting",

  date: "",
  time: "",

  attendees: [],
  topics: [],

  materials: [],
  samples: [],

  sentiment: "Neutral",

  outcomes: "",
  follow_up: "",

  summary: "",
  next_action: "",
};

const interactionSlice = createSlice({
  name: "interaction",

  initialState,

  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },

    fillInteraction: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },

    resetInteraction: () => initialState,
  },
});

export const {
  updateField,
  fillInteraction,
  resetInteraction,
} = interactionSlice.actions;

export default interactionSlice.reducer;
