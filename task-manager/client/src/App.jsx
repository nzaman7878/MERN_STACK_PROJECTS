import { useEffect, useState } from "react";
import api from "./services/api";

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await api.get("/tasks");

            setTasks(response.data);
        };

        fetchTasks();
    }, []);

    return (
        <div>
            <h1>Task Manager</h1>

            {tasks.map((task) => (
                <div key={task._id}>
                    <h3>{task.title}</h3>
                </div>
            ))}
        </div>
    );
}

export default App;