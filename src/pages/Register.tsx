import { useState } from "react";
import { Link } from "react-router";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
        <div className="login-form-container register-form-container">
          <h2>Crea tu cuenta</h2>

          <p className="login-subtitle">
            Solo te pedimos lo necesario para reservar.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="login-field">
              <label htmlFor="register-name">Nombre completo</label>
              <input
                id="register-name"
                type="text"
                placeholder="Ana Gómez"
                required
              />
            </div>

            <div className="login-field">
              <label htmlFor="register-email">Correo electrónico</label>
              <input
                id="register-email"
                type="email"
                placeholder="ana@correo.com"
                required
              />
            </div>

            <div className="login-field">
              <label htmlFor="register-phone">Celular</label>
              <input
                id="register-phone"
                type="tel"
                placeholder="3001234567"
                required
              />
            </div>

            <div className="login-field">
              <label htmlFor="register-password">Contraseña</label>

              <div className="login-password-wrapper">
                <input
                  id="register-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••"
                  required
                />

                <button
                  type="button"
                  className="login-password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Ocultar" : "Mostrar"}
                </button>
              </div>

              <span className="register-hint">
                Al menos 8 caracteres, con letras y números.
              </span>
            </div>

            <div className="login-field">
              <label htmlFor="register-confirm">Confirma la contraseña</label>

              <div className="login-password-wrapper">
                <input
                  id="register-confirm"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••••"
                  required
                />

                <button
                  type="button"
                  className="login-password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? "Ocultar" : "Mostrar"}
                </button>
              </div>
            </div>

            <button type="submit" className="login-submit">
              Crear cuenta
            </button>
          </form>

          <p className="login-register">
            ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Register;
