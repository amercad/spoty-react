import { Routes, Route, Link } from "react-router-dom";

export const Menu = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container">
                    <Link to="/" className="nav-link">Navbar</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/historia" className="nav-link">Historia</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/integrantes" className="nav-link">Integrantes</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/music" className="nav-link">Music</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}