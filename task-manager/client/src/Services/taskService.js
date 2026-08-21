import api from "./api";

export const getTasks = () => {
    return api.get("/tasks");
};

export const createTask = (taskData) => {
    return api.post("/tasks", taskData);
};