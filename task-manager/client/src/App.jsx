import { useEffect, useState } from "react";
import { getTasks } from "./Services/taskService.js";
import TaskForm from "./components/TaskForm";
import TaskCard from "./components/TaskCard";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";


function App() {

    <Routes>
            <Route path="/" element={<Login />} />

            <Route
                path="/register"
                element={<Register />}
            />

            <Route
                path="/dashboard"
                element={<Dashboard />}
            />
        </Routes>

    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                setLoading(true);

                const response = await getTasks();

                setTasks(response.data);

            } catch (error) {
                setError(
                    error.response?.data?.message ||
                    "Failed to load tasks"
                );
            } finally {
                setLoading(false);
            }
        };

        fetchTasks();
    }, []);

    const handleTaskCreated = (newTask) => {
        setTasks((currentTasks) => [
            newTask,
            ...currentTasks
        ]);
    };

    if (loading) {
        return <p>Loading tasks...</p>;
    }

    return (
        <div>
            <h1>Task Manager</h1>

            <TaskForm
                onTaskCreated={handleTaskCreated}
            />

            {error && <p>{error}</p>}

            {tasks.length === 0 ? (
                <p>No tasks yet. Create your first task.</p>
            ) : (
                tasks.map((task) => (
                    <TaskCard
                        key={task._id}
                        task={task}
                    />
                ))
            )}
        </div>
    );
}

export default App;