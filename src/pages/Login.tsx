import { useState } from "react";
import { Link } from "react-router";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className="login-page">
      <section className="login-hero">
        <div className="login-hero__content">
          <h1>Tus salidas, en un solo lugar</h1>
          <p>
            Reserva en minutos, revisa tus fechas y cancela si cambian tus
            planes.
          </p>
        </div>
      </section>

      <section className="login-content">
        <div className="login-form-container">
          <h2>Inicia sesión</h2>
          <p className="login-subtitle">
            Entra para reservar salidas y ver tus reservas.
          </p>

          <div className="login-notice">
            <span>ⓘ</span>
            <p>Inicia sesión para continuar con tu reserva.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="login-field">
              <label htmlFor="login-email">Correo electrónico</label>
              <input
                id="login-email"
                type="email"
                placeholder="ana@correo.com"
                required
              />
            </div>

            <div className="login-field">
              <label htmlFor="login-password">Contraseña</label>

              <div className="login-password-wrapper">
                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••"
                  required
                />

                <button
                  type="button"
                  className="login-password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
                  }
                >
                  {showPassword ? "Ocultar" : "Mostrar"}
                </button>
              </div>
            </div>

            <button type="submit" className="login-submit">
              Iniciar sesión
            </button>
          </form>

          <p className="login-register">
            ¿Aún no tienes cuenta? <Link to="/registro">Crea una</Link>
          </p>

          <div className="login-demo">
            <span>Cuenta de ejemplo de la API</span>
            <strong>demo@huella.co · Huella2026</strong>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
