import { useState } from "react";
import { Routes, Route, Link } from "react-router";
import Home from "./pages/Home";
import RoutesPage from "./pages/Routes";
import "./App.css";
import Footer from "./components/Footer";
import RouteDetail from "./pages/RouteDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Booking from "./pages/Booking";
import Reservations from "./pages/Reservations";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="site-header__content">
          <Link to="/" className="site-logo" onClick={closeMenu}>
            <svg
              className="site-logo__icon"
              viewBox="0 0 32 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 19L11 7L17 14L22 9L30 19H2Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
            <span>Huella</span>
          </Link>

          <nav className={`site-nav ${menuOpen ? "site-nav--open" : ""}`}>
            <Link to="/" onClick={closeMenu}>
              Inicio
            </Link>
            <Link to="/rutas" onClick={closeMenu}>
              Rutas
            </Link>
            <Link to="/login" onClick={closeMenu}>
              Iniciar sesión
            </Link>
            <Link to="/registro" onClick={closeMenu}>
              Crear cuenta
            </Link>
          </nav>

          <div className="site-header__actions">
            <div className="language-selector">
              <span className="language-selector__active">ES</span>
              <span>EN</span>
            </div>

            <Link to="/login" className="header-login">
              Iniciar sesión
            </Link>

            <Link to="/registro" className="header-register">
              Crear cuenta
            </Link>
          </div>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rutas" element={<RoutesPage />} />
          <Route path="/rutas/paramo-de-letras" element={<RouteDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/reservar" element={<Booking />} />
          <Route path="/mis-reservas" element={<Reservations />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
