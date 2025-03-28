import { useNavigate, useRouteError } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Error.css";

export const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1, { replace: true }); // ✅ Prevents looping back to error page
    };

    // Check if the error status is 404
    if (error?.status === 404) {
        return (
            <section className="error-section">
                <div id="error-text">
                    <figure>
                        <img
                            src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
                            alt="404 page"
                        />
                    </figure>
                    <div className="text-center">
                        <p className="p-a">
                            The page you were looking for could not be found.
                        </p>
                    </div>
                </div>
                <NavLink to="/about" className="home-button">Go back to About Page</NavLink> {/* ✅ Fixed */}
                <button onClick={handleGoBack} className="go-back-button">
                    Go Back
                </button>
            </section>
        );
    }

    // Default error message for other types of errors
    return (
        <section className="error-section">
            <div id="error-text">
                <h1>Oops! Something went wrong.</h1>
                <p>Please try again later.</p>
                <button onClick={handleGoBack} className="go-back-button">
                    Go Back
                </button>
            </div>
        </section>
    );
};