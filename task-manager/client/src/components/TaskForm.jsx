import { useState } from "react";
import { createTask } from "../Services/taskService";

function TaskForm({ onTaskCreated }) {
    const [title, setTitle] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!title.trim()) {
            setError("Task title is required");
            return;
        }

        try {
            setLoading(true);
            setError("");

            const response = await createTask({
                title
            });

            onTaskCreated(response.data);

            setTitle("");

        } catch (error) {
            setError(
                error.response?.data?.message ||
                "Failed to create task"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter a task"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />

            <button
                type="submit"
                disabled={loading}
            >
                {loading ? "Creating..." : "Add Task"}
            </button>

            {error && <p>{error}</p>}
        </form>
    );
}

export default TaskForm;