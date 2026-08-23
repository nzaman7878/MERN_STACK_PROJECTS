import api from "./api";

export const registerUser = (userData) => {
    return api.post("/auth/register", userData);
};
