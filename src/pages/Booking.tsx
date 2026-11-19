function Booking() {
  return (
    <div className="booking-page">
      <section className="booking-heading">
        <h1>Reservar salida</h1>
        <p>
          Elige la fecha y cuántas personas van. La reserva queda guardada en tu
          cuenta.
        </p>

        <div className="booking-steps">
          <div className="booking-step booking-step--active">
            <span>1</span>
            <strong>La salida</strong>
          </div>

          <div className="booking-step-line"></div>

          <div className="booking-step">
            <span>2</span>
            <strong>Detalles</strong>
          </div>

          <div className="booking-step-line"></div>

          <div className="booking-step">
            <span>3</span>
            <strong>Confirmar</strong>
          </div>
        </div>
      </section>

      <div className="booking-layout">
        <div className="booking-form-column">
          <section className="booking-card">
            <h2>1. La salida</h2>

            <div className="booking-field">
              <label htmlFor="booking-route">Ruta</label>
              <select id="booking-route" defaultValue="paramo">
                <option value="paramo">Páramo de Letras</option>
              </select>
            </div>

            <div className="booking-selection-grid">
              <div className="booking-field">
                <label htmlFor="booking-date">Fecha de la salida</label>
                <select id="booking-date" defaultValue="nov14">
                  <option value="nov14">
                    Sábado 14 de noviembre · 5 cupos
                  </option>
                  <option value="nov21">
                    Sábado 21 de noviembre · 8 cupos
                  </option>
                  <option value="dec5">Sábado 5 de diciembre · 6 cupos</option>
                </select>
                <span className="booking-hint">
                  Solo se muestran fechas con cupos.
                </span>
              </div>

              <div className="booking-field">
                <label>Número de personas</label>

                <div className="booking-people">
                  <span>−</span>
                  <strong>2</strong>
                  <span>+</span>
                </div>

                <span className="booking-hint">Máximo 8 por reserva.</span>
              </div>
            </div>
          </section>

          <section className="booking-card">
            <h2>2. Detalles</h2>

            <div className="booking-user">
              <span className="booking-user-avatar">AG</span>
              <span>Reservas como Ana Gómez (ana@correo.com)</span>
            </div>

            <div className="booking-field">
              <label htmlFor="booking-comments">Comentarios (opcional)</label>

              <textarea
                id="booking-comments"
                maxLength={300}
                placeholder="Alergias, condiciones de salud, dudas..."
              />

              <span className="booking-hint">0/300</span>
            </div>

            <label className="booking-terms">
              <input type="checkbox" />
              <span>
                Acepto las condiciones de la salida y la política de
                cancelación.
              </span>
            </label>
          </section>

          <div className="booking-confirm">Confirmar reserva →</div>
        </div>

        <aside className="booking-summary">
          <div className="booking-summary-image route-image--mountain"></div>

          <div className="booking-summary-content">
            <span className="booking-summary-label">Resumen</span>
            <h2>Páramo de Letras</h2>

            <div className="booking-summary-row">
              <span>Fecha</span>
              <strong>Sábado 14 de noviembre</strong>
            </div>

            <div className="booking-summary-row">
              <span>Hora</span>
              <strong>4:30 a. m.</strong>
            </div>

            <div className="booking-summary-row">
              <span>Punto de encuentro</span>
              <strong>Terminal de transportes de Manizales</strong>
            </div>

            <div className="booking-summary-row">
              <span>Personas</span>
              <strong>2</strong>
            </div>

            <div className="booking-summary-row">
              <span>Precio por persona</span>
              <strong>$120.000</strong>
            </div>

            <div className="booking-summary-total">
              <strong>Total</strong>
              <strong>$240.000</strong>
            </div>

            <p>El pago se hace el día de la salida.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Booking;
