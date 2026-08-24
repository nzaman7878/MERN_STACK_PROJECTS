import { useAuth } from "../context/AuthContext";

function Dashboard() {
    const { user } = useAuth();

    return (
        <div>
            <h1>Dashboard</h1>

            <p>
                Welcome, {user?.name}
            </p>
        </div>
    );
}

export default Dashboard;