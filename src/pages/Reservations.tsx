import { Link } from "react-router";

function Reservations() {
  const reservations = [
    {
      code: "HUE-123456",
      name: "Bosque de niebla de Río Blanco",
      status: "Confirmada",
      date: "Sábado 14 de noviembre",
      time: "6:30 a. m.",
      people: 2,
      meetingPoint: "Entrada de la reserva, vía a Gallinazo",
      total: "$110.000",
      imageVariant: "route-image--forest",
      detailPath: "/rutas",
    },
    {
      code: "HUE-482913",
      name: "Páramo de Letras",
      status: "Confirmada",
      date: "Sábado 14 de noviembre",
      time: "4:30 a. m.",
      people: 2,
      meetingPoint: "Terminal de transportes de Manizales",
      total: "$240.000",
      imageVariant: "route-image--mountain",
      detailPath: "/rutas/paramo-de-letras",
    },
    {
      code: "HUE-654321",
      name: "Cascadas de Gallinazo",
      status: "Cancelada",
      date: "Domingo 15 de noviembre",
      time: "7:00 a. m.",
      people: 1,
      meetingPoint: "Parque principal de Villamaría",
      total: "$60.000",
      imageVariant: "route-image--waterfall",
      detailPath: "/rutas",
    },
  ];

  return (
    <div className="reservations-page">
      <section className="reservations-heading">
        <div>
          <h1>Mis reservas</h1>
          <p>Hola, Ana. Estas son tus salidas.</p>
        </div>

        <Link to="/rutas" className="reservations-new-button">
          Reservar otra salida →
        </Link>
      </section>

      <section className="reservations-content">
        <nav className="reservations-tabs" aria-label="Estado de reservas">
          <button className="reservations-tab reservations-tab--active">
            Todas
          </button>

          <button className="reservations-tab">Confirmadas</button>

          <button className="reservations-tab">Canceladas</button>
        </nav>

        <div className="reservations-list">
          {reservations.map((reservation) => (
            <article className="reservation-card" key={reservation.code}>
              <div
                className={`reservation-image ${reservation.imageVariant}`}
              />

              <div className="reservation-body">
                <div className="reservation-card-heading">
                  <div>
                    <span className="reservation-code">{reservation.code}</span>

                    <h2>{reservation.name}</h2>
                  </div>

                  <span
                    className={`reservation-status ${
                      reservation.status === "Confirmada"
                        ? "reservation-status--confirmed"
                        : "reservation-status--cancelled"
                    }`}
                  >
                    {reservation.status === "Confirmada" ? "✓" : "×"}{" "}
                    {reservation.status}
                  </span>
                </div>

                <div className="reservation-details">
                  <div>
                    <span>Fecha</span>
                    <strong>{reservation.date}</strong>
                  </div>

                  <div>
                    <span>Hora</span>
                    <strong>{reservation.time}</strong>
                  </div>

                  <div>
                    <span>Personas</span>
                    <strong>{reservation.people}</strong>
                  </div>
                </div>

                <div className="reservation-meeting">
                  <span>⌖</span>
                  <div>
                    <span>Punto de encuentro</span>
                    <strong>{reservation.meetingPoint}</strong>
                  </div>
                </div>

                <div className="reservation-card-footer">
                  <div className="reservation-total">
                    <span>Total</span>
                    <strong>{reservation.total}</strong>
                  </div>

                  <div className="reservation-actions">
                    <Link to={reservation.detailPath}>Ver ruta</Link>

                    {reservation.status === "Confirmada" && (
                      <button type="button">Cancelar reserva</button>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Reservations;
