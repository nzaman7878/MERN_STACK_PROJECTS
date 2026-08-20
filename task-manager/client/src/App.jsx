import TaskCard from "./components/TaskCard";

function App() {
    const tasks = [
        {
            id: 1,
            title: "Learn React",
            completed: false
        },
        {
            id: 2,
            title: "Learn Express",
            completed: true
        }
    ];

    return (
        <div>
            <h1>Task Manager</h1>

            {tasks.map((task) => (
                <div key={task.id}>
                    <h3>{task.title}</h3>

                    <p>
                        {task.completed
                            ? "Completed"
                            : "Pending"}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default App;