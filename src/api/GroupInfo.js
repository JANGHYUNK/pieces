import api from "./api";

export const fetchGroups = async () => {
  try {
    const response = await api.get("/api/groups");
    return response.data;
  } catch (error) {
    console.error("Error fetching groups:", error);
    return null;
  }
};

export const fetchGroupById = async (id) => {
  try {
    const response = await api.get(`/api/groups/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching group ${id}:`, error);
    return null;
  }
};
