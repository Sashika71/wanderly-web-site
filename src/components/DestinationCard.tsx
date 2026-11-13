
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Star, ArrowUpRight, MapPin } from "lucide-react";
import type { Destination } from "../data/destinations";

interface DestinationCardProps {
  destination: Destination;
}

function DestinationCard({ destination }: DestinationCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Image */}
      <div className="relative h-56 overflow-hidden sm:h-64">

        <img
          src={destination.image}
          alt={`${destination.name}, ${destination.country}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-primary shadow-sm">
          {destination.category}
        </span>

        <button
          type="button"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          aria-pressed={isFavorite}
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-dark shadow-sm transition-all hover:scale-110"
        >
          <Heart
            size={19}
            className={isFavorite ? "fill-red-500 text-red-500" : ""}
          />
        </button>

        <div className="absolute bottom-4 left-4 flex items-center gap-1 rounded-lg bg-white/95 px-3 py-2 text-sm font-semibold text-dark">
          <Star size={15} className="fill-amber-400 text-amber-400" />
          {destination.rating}
          <span className="font-normal text-gray-500">
            ({destination.reviews})
          </span>
        </div>

      </div>

      {/* Content */}
      <div className="p-5">

        <div className="mb-3 flex items-center gap-2 text-xs text-gray-500">
          <MapPin size={15} className="text-primary" />
          {destination.country}
        </div>

        <h3 className="text-xl font-bold text-dark transition-colors group-hover:text-primary">
          {destination.name}
        </h3>

        <p className="mt-3 min-h-[60px] text-sm leading-6 text-gray-500">
          {destination.description}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-5">

          <div>
            <p className="text-xs text-gray-400">Starting from</p>
            <p className="mt-1 text-lg font-bold text-primary sm:text-xl">
              ${destination.price.toLocaleString()}
              <span className="text-[11px] font-normal text-gray-400 sm:text-xs"> / person</span>
            </p>
          </div>

          <Link
            to={`/destination/${destination.id}`}
            aria-label={`View ${destination.name} details`}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-primary transition-all hover:bg-primary hover:text-white"
          >
            <ArrowUpRight size={21} />
          </Link>

        </div>
      </div>
    </article>
  );
}

export default DestinationCard;
