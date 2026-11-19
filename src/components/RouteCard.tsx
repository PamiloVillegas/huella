import { Link } from "react-router";

interface RouteCardProps {
  name: string;
  municipality: string;
  difficulty: string;
  rating: string;
  reviews: number;
  distance: string;
  duration: string;
  elevation: string;
  price: string;
  imageVariant: string;
  detailPath?: string;
}

function RouteCard({
  name,
  municipality,
  difficulty,
  rating,
  reviews,
  distance,
  duration,
  elevation,
  price,
  imageVariant,
  detailPath,
}: RouteCardProps) {
  return (
    <article className="route-card">
      <div className={`route-card__image ${imageVariant}`}>
        <span className="route-card__difficulty">{difficulty}</span>
      </div>

      <div className="route-card__body">
        <div className="route-card__rating">
          <span>
            ★ {rating} · {reviews} reseñas
          </span>
        </div>

        <h3>{name}</h3>

        <p className="route-card__municipality">{municipality}</p>

        <div className="route-card__details">
          <span>{distance}</span>
          <span>{duration}</span>
          <span>{elevation}</span>
        </div>

        <div className="route-card__footer">
          <strong>Desde {price}</strong>

          <Link to={detailPath || "/rutas"}>Ver ruta →</Link>
        </div>
      </div>
    </article>
  );
}

export default RouteCard;
