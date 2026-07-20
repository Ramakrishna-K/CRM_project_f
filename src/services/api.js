

import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

// =========================
// AI Agent
// =========================
export const sendChatMessage = async (message) => {
  const response = await API.post("/agent/chat", { message });
  return response.data;
};

// =========================
// HCP APIs
// =========================
export const getHCPs = async () => {
  const response = await API.get("/hcp");
  return response.data;
};

export const createHCP = async (data) => {
  const response = await API.post("/hcp", data);
  return response.data;
};

// =========================
// Interaction APIs
// =========================
export const getInteractions = async () => {
  const response = await API.get("/interaction");
  return response.data;
};

export const createInteraction = async (data) => {
  const response = await API.post("/interaction", data);
  return response.data;
};

export const updateInteraction = async (id, data) => {
  const response = await API.put(`/interaction/${id}`, data);
  return response.data;
};

export const deleteInteraction = async (id) => {
  const response = await API.delete(`/interaction/${id}`);
  return response.data;
};

export default API;