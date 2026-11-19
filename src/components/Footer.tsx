import { Link } from "react-router";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="site-footer__brand">
          <Link to="/" className="site-footer__logo">
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

            <span> Huella </span>
          </Link>

          <p>Salidas guiadas por los senderos de Caldas, con guías locales.</p>
        </div>

        <div className="site-footer__column">
          <h3>Explora</h3>
          <Link to="/rutas">Todas las rutas</Link>
          <Link to="/rutas">Rutas fáciles</Link>
          <Link to="/rutas">Rutas exigentes</Link>
        </div>

        <div className="site-footer__column">
          <h3>Tu cuenta</h3>
          <Link to="/login">Iniciar sesión</Link>
          <Link to="/registro">Crear cuenta</Link>
          <Link to="/mis-reservas">Mis reservas</Link>
        </div>

        <div className="site-footer__column">
          <h3>Contacto</h3>
          <a href="mailto:hola@huella.co">hola@huella.co</a>
          <a href="tel:+57606000000">+57 606 000 0000</a>
          <span>Manizales, Caldas</span>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>© 2026 Huella. Proyecto académico, Universidad de Caldas.</p>
        <p>
          Datos de rutas y precios ilustrativos. Uso exclusivamente educativo.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
