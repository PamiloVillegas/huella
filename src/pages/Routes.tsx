import { useState } from "react";
import RouteCard from "../components/RouteCard";

function Routes() {
  const routes = [
    {
      name: "Páramo de Letras",
      municipality: "Villamaría",
      difficulty: "Exigente",
      rating: "4.9",
      reviews: 74,
      distance: "12 km",
      duration: "7h",
      elevation: "900 m",
      price: "$120.000",
      imageVariant: "route-image--mountain",
      detailPath: "/rutas/paramo-de-letras",
    },
    {
      name: "Selva de Florencia",
      municipality: "Samaná",
      difficulty: "Exigente",
      rating: "4.9",
      reviews: 41,
      distance: "14 km",
      duration: "8h",
      elevation: "700 m",
      price: "$150.000",
      imageVariant: "route-image--jungle",
    },
    {
      name: "Bosque de niebla de Río Blanco",
      municipality: "Manizales",
      difficulty: "Moderada",
      rating: "4.8",
      reviews: 126,
      distance: "6.4 km",
      duration: "4h",
      elevation: "320 m",
      price: "$55.000",
      imageVariant: "route-image--forest",
    },
    {
      name: "Cascadas de Gallinazo",
      municipality: "Villamaría",
      difficulty: "Moderada",
      rating: "4.7",
      reviews: 143,
      distance: "8 km",
      duration: "4.5 h",
      elevation: "450 m",
      price: "$60.000",
      imageVariant: "route-image--waterfall",
    },
    {
      name: "Cerro Ingrumá",
      municipality: "Riosucio",
      difficulty: "Moderada",
      rating: "4.7",
      reviews: 63,
      distance: "7 km",
      duration: "4h",
      elevation: "520 m",
      price: "$80.000",
      imageVariant: "route-image--mountain",
    },
    {
      name: "Cascada La Pradera",
      municipality: "Pensilvania",
      difficulty: "Fácil",
      rating: "4.6",
      reviews: 45,
      distance: "4 km",
      duration: "2h",
      elevation: "150 m",
      price: "$70.000",
      imageVariant: "route-image--waterfall",
    },
    {
      name: "Camino real de Salamina",
      municipality: "Salamina",
      difficulty: "Moderada",
      rating: "4.6",
      reviews: 88,
      distance: "9 km",
      duration: "5h",
      elevation: "380 m",
      price: "$85.000",
      imageVariant: "route-image--forest",
    },
    {
      name: "Camino del Cacique",
      municipality: "Neira",
      difficulty: "Moderada",
      rating: "4.5",
      reviews: 29,
      distance: "8.5 km",
      duration: "4.5 h",
      elevation: "400 m",
      price: "$65.000",
      imageVariant: "route-image--park",
    },
    {
      name: "Senderos del Ecoparque Los Yarumos",
      municipality: "Manizales",
      difficulty: "Fácil",
      rating: "4.5",
      reviews: 210,
      distance: "3.2 km",
      duration: "1.5 h",
      elevation: "120 m",
      price: "$25.000",
      imageVariant: "route-image--park",
    },

    {
      name: "Cascadas Las Nereidas",
      municipality: "Villamaría",
      difficulty: "Moderada",
      rating: "4.8",
      reviews: 52,
      distance: "8.8 km",
      duration: "3 h",
      elevation: "232 m",
      price: "$75.000",
      imageVariant: "route-image--waterfall",
    },
    {
      name: "Sendero del Embalse Amaní",
      municipality: "Norcasia",
      difficulty: "Fácil",
      rating: "4.6",
      reviews: 38,
      distance: "3.5 km",
      duration: "2 h",
      elevation: "120 m",
      price: "$45.000",
      imageVariant: "route-image--park",
    },
    {
      name: "Bosque de niebla Cerro Viringo",
      municipality: "Supía",
      difficulty: "Exigente",
      rating: "4.7",
      reviews: 31,
      distance: "9 km",
      duration: "5 h",
      elevation: "500 m",
      price: "$85.000",
      imageVariant: "route-image--forest",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const routesPerPage = 9;

  const totalPages = Math.ceil(routes.length / routesPerPage);

  const startIndex = (currentPage - 1) * routesPerPage;

  const visibleRoutes = routes.slice(startIndex, startIndex + routesPerPage);

  return (
    <div className="routes-page">
      <section className="routes-heading">
        <h1>Rutas</h1>
        <p>Encuentra el sendero ideal para tu próxima salida.</p>
      </section>

      <section className="routes-filters">
        <div className="filter-group filter-group--search">
          <label htmlFor="route-search">Buscar</label>
          <input
            id="route-search"
            type="search"
            placeholder="Nombre de la ruta o municipio"
          />
        </div>

        <div className="filter-group filter-group--difficulty">
          <label>Dificultad</label>
          <div className="difficulty-options">
            <button
              type="button"
              className="filter-option filter-option--active"
            >
              Todas
            </button>
            <button type="button" className="filter-option">
              Fácil
            </button>
            <button type="button" className="filter-option">
              Moderada
            </button>
            <button type="button" className="filter-option">
              Exigente
            </button>
          </div>
        </div>

        <div className="filter-group">
          <label htmlFor="municipality-filter">Municipio</label>
          <select id="municipality-filter" defaultValue="">
            <option value="">Todos los municipios</option>
            <option value="Manizales">Manizales</option>
            <option value="Villamaría">Villamaría</option>
            <option value="Samaná">Samaná</option>
            <option value="Riosucio">Riosucio</option>
            <option value="Pensilvania">Pensilvania</option>
            <option value="Salamina">Salamina</option>
            <option value="Neira">Neira</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="route-sort">Ordenar por</label>
          <select id="route-sort" defaultValue="rating">
            <option value="rating">Mejor calificadas</option>
          </select>
        </div>
      </section>

      <section className="routes-results">
        <p className="routes-count">12 rutas encontradas</p>

        <div className="routes-grid">
          {visibleRoutes.map((route) => (
            <RouteCard key={route.name} {...route} />
          ))}
        </div>

        <nav className="routes-pagination" aria-label="Paginación de rutas">
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Anterior
          </button>

          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                type="button"
                className={
                  currentPage === page
                    ? "pagination-page pagination-page--active"
                    : "pagination-page"
                }
                aria-current={currentPage === page ? "page" : undefined}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ),
          )}

          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Siguiente
          </button>
        </nav>
      </section>
    </div>
  );
}

export default Routes;
