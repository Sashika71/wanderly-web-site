
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin, CalendarDays, ChevronDown } from "lucide-react";

function SearchBar() {
  const navigate = useNavigate();

  const [destination, setDestination] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [travelDate, setTravelDate] = useState("");

  const popularPlaces = ["Bali", "Ella", "Amalfi Coast", "Kyoto", "Santorini"];

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const params = new URLSearchParams();

    if (destination.trim()) {
      params.set("search", destination.trim());
    }

    if (category !== "All Categories") {
      params.set("category", category);
    }

    if (travelDate) {
      params.set("date", travelDate);
    }

    navigate(`/explore?${params.toString()}`);
  };

  return (
    <section className="relative z-20 mx-auto -mt-10 max-w-6xl px-4 sm:-mt-16 sm:px-5">

      <div className="rounded-2xl bg-white p-4 shadow-xl shadow-dark/10 sm:p-7">

        <form
          onSubmit={handleSearch}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_auto]"
        >

          {/* Destination */}
          <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 transition-colors focus-within:border-primary">
            <MapPin size={21} className="shrink-0 text-primary" />

            <div className="min-w-0 flex-1">
              <label className="mb-1 block text-xs font-semibold text-dark">
                Destination
              </label>

              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Where do you want to go?"
                className="w-full bg-transparent text-sm text-dark outline-none placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Category */}
          <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 transition-colors focus-within:border-primary">
            <ChevronDown size={21} className="shrink-0 text-primary" />

            <div className="min-w-0 flex-1">
              <label className="mb-1 block text-xs font-semibold text-dark">
                Category
              </label>

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full cursor-pointer bg-transparent text-sm text-dark outline-none"
              >
                <option>All Categories</option>
                <option>Beach</option>
                <option>Nature</option>
                <option>City</option>
                <option>Culture</option>
              </select>
            </div>
          </div>

          {/* Travel Date */}
          <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 transition-colors focus-within:border-primary">
            <CalendarDays size={21} className="shrink-0 text-primary" />

            <div className="min-w-0 flex-1">
              <label className="mb-1 block text-xs font-semibold text-dark">
                Travel Date
              </label>

              <input
                type="date"
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="w-full bg-transparent text-sm text-dark outline-none"
              />
            </div>
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 font-semibold text-white transition-all hover:bg-teal-800 hover:shadow-lg"
          >
            <Search size={19} />
            Search
          </button>

        </form>

        {/* Popular Searches */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="text-xs font-semibold text-gray-500">
            Popular:
          </span>

          {popularPlaces.map((place) => (
            <button
              key={place}
              type="button"
              onClick={() => setDestination(place)}
              className="rounded-full bg-secondary px-4 py-2 text-xs font-medium text-dark transition-colors hover:bg-primary hover:text-white"
            >
              {place}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}

export default SearchBar;
