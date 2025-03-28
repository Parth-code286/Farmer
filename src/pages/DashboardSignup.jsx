import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

export const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/about"); // Redirect after 4 seconds
        }, 2000);

        return () => clearTimeout(timer); // Cleanup
    }, [navigate]);

    return (
        <section className="dash-container">
            <div className="heading">
                <h1>Dashboard</h1>
                <p className="content-dash">Logged In!</p>
            </div>
        </section>
    );
};