import { Routes, Route, Link } from "react-router-dom";

export const Menu = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    <Link to="/" className="nav-link">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/historia" className="nav-link">Historia</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/integrantes" className="nav-link">Integrantes</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/music" className="nav-link">Music</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}