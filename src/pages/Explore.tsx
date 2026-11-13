
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Search,
  SlidersHorizontal,
  MapPin,
  ArrowUpDown,
  Compass,
  X,
} from "lucide-react";

import { destinations } from "../data/destinations";
import DestinationCard from "../components/DestinationCard";

function Explore() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("destination") || ""
  );

  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "All"
  );

  const [sortBy, setSortBy] = useState("recommended");

  const categories = [
    "All",
    "Beach",
    "Nature",
    "City",
    "Culture",
  ];

  const filteredDestinations = useMemo(() => {
    let results = [...destinations];

    // Search by destination name or country
    if (searchTerm.trim()) {
      results = results.filter(
        (destination) =>
          destination.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          destination.country
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== "All") {
      results = results.filter(
        (destination) => destination.category === selectedCategory
      );
    }

    // Sorting
    if (sortBy === "price-low") {
      results.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      results.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      results.sort((a, b) => b.rating - a.rating);
    }

    return results;
  }, [searchTerm, selectedCategory, sortBy]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSortBy("recommended");
    setSearchParams({});
  };

  const updateSearch = (value: string) => {
    setSearchTerm(value);
    const params = new URLSearchParams(searchParams);

    if (value.trim()) {
      params.set("destination", value);
    } else {
      params.delete("destination");
    }

    setSearchParams(params, { replace: true });
  };

  const updateCategory = (category: string) => {
    setSelectedCategory(category);
    const params = new URLSearchParams(searchParams);

    if (category !== "All") {
      params.set("category", category);
    } else {
      params.delete("category");
    }

    setSearchParams(params, { replace: true });
  };

  const hasActiveFilters =
    searchTerm.trim() !== "" || selectedCategory !== "All";

  return (
    <div className="min-h-screen bg-white">

      {/* Page Heading */}
      <section className="relative overflow-hidden bg-[#F5F8F7]">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-teal-100/60 blur-3xl" />
        <div className="absolute -bottom-20 left-10 h-60 w-60 rounded-full bg-orange-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-12 sm:py-20 lg:px-8">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm">
            <Compass size={16} />
            Explore the world with us
          </div>

          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-dark sm:text-5xl lg:text-6xl">
            Find Your Next
            <span className="text-primary"> Adventure.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-gray-500 sm:text-lg">
            From peaceful beaches to exciting city escapes,
            discover amazing destinations and plan your next
            unforgettable journey with Wanderly.
          </p>

          <div className="mt-8 flex items-center gap-3 text-sm text-gray-500">
            <MapPin size={18} className="text-primary" />
            Discover beautiful places around the world
          </div>

        </div>
      </section>

      {/* Explore Content */}
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">

        {/* Search and Sort */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Find your destination
            </p>

            <h2 className="mt-2 text-2xl font-bold text-dark sm:text-3xl">
              Explore Destinations
            </h2>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">

            {/* Search Input */}
            <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm transition focus-within:border-primary sm:w-72">
              <Search size={19} className="shrink-0 text-gray-400" />

              <input
                type="text"
                value={searchTerm}
                onChange={(e) => updateSearch(e.target.value)}
                placeholder="Search destinations..."
                className="w-full bg-transparent text-sm text-dark outline-none placeholder:text-gray-400"
              />

              {searchTerm && (
                <button
                  onClick={() => updateSearch("")}
                  aria-label="Clear search"
                  className="text-gray-400 hover:text-dark"
                >
                  <X size={17} />
                </button>
              )}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
              <ArrowUpDown size={17} className="text-primary" />

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full cursor-pointer bg-transparent text-sm font-medium text-dark outline-none sm:w-auto"
              >
                <option value="recommended">Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

          </div>
        </div>

        {/* Category Filters */}
        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-2">
            <SlidersHorizontal size={18} className="text-primary" />
            <span className="text-sm font-semibold text-dark">
              Filter by category
            </span>
          </div>

          <button
            onClick={clearFilters}
            className="self-start text-sm font-semibold text-primary transition hover:text-teal-800 sm:self-auto"
          >
            Clear Filters
          </button>

        </div>

        <div className="-mx-1 mt-4 flex gap-3 overflow-x-auto px-1 pb-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => updateCategory(category)}
              className={`shrink-0 rounded-full px-6 py-3 text-sm font-semibold transition-all ${
                selectedCategory === category
                  ? "bg-primary text-white shadow-md shadow-teal-900/15"
                  : "border border-gray-200 bg-white text-gray-600 hover:border-primary hover:text-primary"
              }`}
            >
              {category === "All" ? "All Destinations" : category}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-5">

          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-bold text-dark">
              {filteredDestinations.length}
            </span>{" "}
            of{" "}
            <span className="font-bold text-dark">
              {destinations.length}
            </span>{" "}
            destinations
          </p>

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <X size={15} />
              Remove filters
            </button>
          )}

        </div>

        {/* Destination Grid */}
        {filteredDestinations.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">

            {filteredDestinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
              />
            ))}

          </div>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center px-2 py-16 text-center sm:py-24">

            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-teal-50">
              <Search size={32} className="text-primary" />
            </div>

            <h3 className="mt-6 text-xl font-bold text-dark">
              No destinations found
            </h3>

            <p className="mt-3 max-w-md text-sm leading-7 text-gray-500">
              We couldn't find any destinations matching your search.
              Try another destination or change your filters.
            </p>

            <button
              onClick={clearFilters}
              className="mt-6 rounded-full bg-primary px-7 py-3 font-semibold text-white transition hover:bg-teal-800"
            >
              Clear All Filters
            </button>

          </div>
        )}

      </section>

    </div>
  );
}

export default Explore;
