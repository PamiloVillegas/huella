import { Link } from "react-router";

function RouteDetail() {
  return (
    <div className="route-detail-page">
      <nav className="route-breadcrumb" aria-label="Ruta de navegación">
        <Link to="/">Inicio</Link>
        <span>›</span>
        <Link to="/rutas">Rutas</Link>
        <span>›</span>
        <span>Páramo de Letras</span>
      </nav>

      <section className="route-detail-heading">
        <div className="route-detail-meta">
          <span className="route-detail-difficulty">Exigente</span>
          <span>📍 Villamaría</span>
          <span>★ 4.9 · 74 reseñas</span>
        </div>

        <h1>Páramo de Letras</h1>

        <p>
          Travesía de alta montaña entre frailejones, lagunas pequeñas y viento
          frío.
        </p>
      </section>

      <section className="route-gallery" aria-label="Galería de la ruta">
        <div className="route-gallery__main route-image--mountain"></div>

        <div className="route-gallery__secondary">
          <div className="route-gallery__image route-image--forest"></div>

          <div className="route-gallery__image route-image--waterfall"></div>
        </div>
      </section>

      <section className="route-detail-layout">
        <div className="route-detail-main">
          <div className="route-technical">
            <h2>Ficha técnica</h2>

            <div className="technical-grid">
              <div className="technical-item">
                <span>Distancia</span>
                <strong>12 km</strong>
              </div>

              <div className="technical-item">
                <span>Desnivel</span>
                <strong>900 m</strong>
              </div>

              <div className="technical-item">
                <span>Duración</span>
                <strong>7 horas</strong>
              </div>

              <div className="technical-item">
                <span>Altitud máxima</span>
                <strong>3.700 m s. n. m.</strong>
              </div>

              <div className="technical-item">
                <span>Tipo de recorrido</span>
                <strong>Ida y vuelta</strong>
              </div>

              <div className="technical-item">
                <span>Mejor temporada</span>
                <strong>Diciembre a febrero y julio a agosto</strong>
              </div>
            </div>
          </div>

          <div className="route-description">
            <section className="route-about">
              <h2>Sobre la ruta</h2>
              <p>
                Salida de madrugada hacia el páramo. El sendero sube entre
                frailejones y pajonales hasta un filo con vista a la cordillera.
                Por la altura se camina despacio y con pausas. Se exige buena
                condición física y se hace una charla de seguridad antes de
                empezar.
              </p>
            </section>

            <section className="route-points">
              <h2>Puntos de interés</h2>

              <div className="route-points-list">
                <div className="route-point">
                  <span className="route-point__marker"></span>
                  <strong>Punto de aclimatación</strong>
                  <span>km 0</span>
                </div>

                <div className="route-point">
                  <span className="route-point__marker"></span>
                  <strong>Valle de frailejones</strong>
                  <span>km 3.5</span>
                </div>

                <div className="route-point">
                  <span className="route-point__marker"></span>
                  <strong>Laguna pequeña</strong>
                  <span>km 5</span>
                </div>

                <div className="route-point">
                  <span className="route-point__marker route-point__marker--last"></span>
                  <strong>Filo del páramo</strong>
                  <span>km 6</span>
                </div>
              </div>
            </section>
          </div>

          <section className="route-includes-grid">
            <div className="route-list-section">
              <h2>Qué llevar</h2>

              <ul className="route-check-list">
                <li>Ropa térmica por capas</li>
                <li>Guantes y gorro</li>
                <li>Bastones</li>
                <li>Protector solar de alta protección</li>
                <li>Dos litros de agua</li>
              </ul>
            </div>

            <div className="route-list-section">
              <h2>La salida incluye</h2>

              <ul className="route-check-list">
                <li>Guía de alta montaña</li>
                <li>Transporte ida y regreso</li>
                <li>Seguro de accidentes</li>
                <li>Desayuno y almuerzo</li>
                <li>Botiquín y oxímetro</li>
              </ul>
            </div>
          </section>

          <section className="route-guides">
            <h2>Guías de esta ruta</h2>

            <div className="route-guides-grid">
              <article className="route-guide-card">
                <div className="route-guide-avatar route-guide-avatar--one">
                  SM
                </div>

                <div className="route-guide-info">
                  <h3>Sebastián Mejía</h3>
                  <p>Alta montaña · 4.9</p>
                </div>
              </article>

              <article className="route-guide-card">
                <div className="route-guide-avatar route-guide-avatar--two">
                  LH
                </div>

                <div className="route-guide-info">
                  <h3>Luisa Henao</h3>
                  <p>Cultura, alta montaña, fotografía · 4.8</p>
                </div>
              </article>
            </div>
          </section>
        </div>

        <aside className="route-booking">
          <p className="booking-price">
            Desde <strong>$120.000</strong> por persona
          </p>

          <div className="booking-info">
            <span>Punto de encuentro</span>
            <strong>Terminal de transportes de Manizales</strong>
          </div>

          <div className="booking-info">
            <span>Hora de encuentro</span>
            <strong>4:30 a. m.</strong>
          </div>

          <h3>Próximas salidas</h3>

          <div className="departure-list">
            <div className="departure-item">
              <span>Sábado 14 de noviembre</span>
              <strong className="departure-available">5 cupos</strong>
            </div>

            <div className="departure-item">
              <span>Sábado 21 de noviembre</span>
              <strong className="departure-available">8 cupos</strong>
            </div>

            <div className="departure-item">
              <span>Sábado 28 de noviembre</span>
              <strong className="departure-soldout">Agotado</strong>
            </div>

            <div className="departure-item">
              <span>Sábado 5 de diciembre</span>
              <strong className="departure-available">6 cupos</strong>
            </div>
          </div>

          <Link to="/reservar" className="booking-button">
            Reservar esta ruta →
          </Link>

          <Link to="/reservar" className="booking-all-dates">
            Ver todas las fechas
          </Link>
        </aside>
      </section>
    </div>
  );
}

export default RouteDetail;
