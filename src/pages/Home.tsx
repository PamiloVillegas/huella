import { Link } from "react-router";
import RouteCard from "../components/RouteCard";

function Home() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <svg
          className="home-hero__landscape"
          viewBox="0 0 1440 440"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <rect width="1440" height="440" fill="#9eafa3" />

          <path
            d="M0 190 Q180 75 350 155 T700 130 T1050 150 T1440 95 V440 H0Z"
            fill="#718d7b"
          />

          <path
            d="M0 245 Q180 150 360 215 T720 180 T1080 230 T1440 160 V440 H0Z"
            fill="#527762"
          />

          <path
            d="M0 300 Q220 215 440 285 T850 250 T1200 275 T1440 235 V440 H0Z"
            fill="#315c43"
          />

          <path
            d="M0 340 L80 275 L120 340 L190 260 L245 340 L320 290 L380 350 L470 275 L535 350 L620 280 L690 345 L770 275 L850 345 L940 290 L1000 350 L1090 265 L1160 345 L1240 280 L1320 350 L1380 290 L1440 340 V440 H0Z"
            fill="#203e30"
          />

          <path
            d="M0 380 L100 325 L160 390 L260 330 L340 390 L440 340 L520 400 L650 330 L730 390 L830 335 L930 400 L1040 330 L1130 390 L1230 335 L1330 390 L1440 330 V440 H0Z"
            fill="#172f24"
          />
        </svg>

        <div className="home-hero__content">
          <span className="home-hero__tag">
            Salidas guiadas cada fin de semana
          </span>

          <h1>
            Camina las montañas de
            <br />
            Caldas
          </h1>

          <p>
            Bosques de niebla, cascadas y páramos con guías que conocen cada
            sendero.
          </p>

          <div className="home-hero__actions">
            <Link to="/rutas" className="hero-button hero-button--primary">
              Explorar rutas →
            </Link>

            <Link to="/rutas" className="hero-button hero-button--light">
              Reservar salida
            </Link>
          </div>
        </div>
      </section>

      <section className="home-stats">
        <div className="home-stat">
          <strong>12</strong>
          <span>rutas</span>
        </div>

        <div className="home-stat">
          <strong>9</strong>
          <span>municipios</span>
        </div>

        <div className="home-stat">
          <strong>6</strong>
          <span>guías locales</span>
        </div>

        <div className="home-stat">
          <strong>4.6</strong>
          <span>calificación promedio</span>
        </div>
      </section>

      <section className="featured-routes">
        <div className="section-heading">
          <div>
            <h2>Rutas destacadas</h2>
            <p>Las más caminadas este mes.</p>
          </div>

          <Link to="/rutas" className="section-link">
            Ver todas las rutas →
          </Link>
        </div>

        <div className="route-grid">
          <RouteCard
            name="Bosque de niebla de Río Blanco"
            municipality="Manizales"
            difficulty="Moderada"
            rating="4.8"
            reviews={126}
            distance="6.4 km"
            duration="4h"
            elevation="320 m"
            price="$55.000"
            imageVariant="route-image--forest"
          />

          <RouteCard
            name="Senderos del Ecoparque Los Yarumos"
            municipality="Manizales"
            difficulty="Fácil"
            rating="4.5"
            reviews={210}
            distance="3.2 km"
            duration="1.5 h"
            elevation="120 m"
            price="$25.000"
            imageVariant="route-image--park"
          />

          <RouteCard
            name="Cascadas de Gallinazo"
            municipality="Villamaría"
            difficulty="Moderada"
            rating="4.7"
            reviews={143}
            distance="8 km"
            duration="4.5 h"
            elevation="450 m"
            price="$60.000"
            imageVariant="route-image--waterfall"
          />

          <RouteCard
            name="Páramo de Letras"
            municipality="Villamaría"
            difficulty="Exigente"
            rating="4.9"
            reviews={74}
            distance="12 km"
            duration="7h"
            elevation="900 m"
            price="$120.000"
            imageVariant="route-image--mountain"
          />

          <RouteCard
            name="Selva de Florencia"
            municipality="Samaná"
            difficulty="Exigente"
            rating="4.9"
            reviews={41}
            distance="14 km"
            duration="8h"
            elevation="700 m"
            price="$150.000"
            imageVariant="route-image--jungle"
          />
        </div>
      </section>

      <section className="difficulty-levels">
        <div className="section-heading">
          <div>
            <h2>Elige tu nivel</h2>
            <p>Hay una ruta para cada ritmo.</p>
          </div>
        </div>

        <div className="difficulty-grid">
          <article className="difficulty-card">
            <div className="difficulty-card__header">
              <span className="difficulty-badge difficulty-badge--easy">
                Fácil
              </span>
              <span>3 rutas</span>
            </div>

            <p>
              Menos de 3 horas, poco desnivel. Para empezar o ir en familia.
            </p>

            <Link to="/rutas">Ver rutas →</Link>
          </article>

          <article className="difficulty-card">
            <div className="difficulty-card__header">
              <span className="difficulty-badge difficulty-badge--moderate">
                Moderada
              </span>
              <span>6 rutas</span>
            </div>

            <p>
              Entre 3 y 5 horas con subidas sostenidas. Requiere algo de
              práctica.
            </p>

            <Link to="/rutas">Ver rutas →</Link>
          </article>

          <article className="difficulty-card">
            <div className="difficulty-card__header">
              <span className="difficulty-badge difficulty-badge--hard">
                Exigente
              </span>
              <span>3 rutas</span>
            </div>

            <p>
              Jornadas largas o de alta montaña. Requiere buena condición
              física.
            </p>

            <Link to="/rutas">Ver rutas →</Link>
          </article>
        </div>
      </section>

      <section className="how-it-works">
        <div className="section-heading">
          <div>
            <h2>Así funciona</h2>
          </div>
        </div>

        <div className="steps-grid">
          <article className="step-card">
            <div className="step-card__number">1</div>
            <div>
              <h3>Elige la ruta</h3>
              <p>Compara distancia, duración y dificultad.</p>
            </div>
          </article>

          <article className="step-card">
            <div className="step-card__number">2</div>
            <div>
              <h3>Reserva tu cupo</h3>
              <p>Escoge la fecha y cuántas personas van.</p>
            </div>
          </article>

          <article className="step-card">
            <div className="step-card__number">3</div>
            <div>
              <h3>Camina con un guía</h3>
              <p>Te esperamos en el punto de encuentro.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="home-cta">
        <div className="home-cta__content">
          <h2>Crea tu cuenta y reserva en minutos</h2>
          <p>
            Con tu cuenta guardas tus reservas y puedes cancelarlas cuando lo
            necesites.
          </p>
        </div>

        <Link to="/registro" className="home-cta__button">
          Crear cuenta →
        </Link>
      </section>
    </div>
  );
}

export default Home;
