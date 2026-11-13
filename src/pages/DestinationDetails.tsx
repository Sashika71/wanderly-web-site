
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Star,
  Clock,
  CheckCircle2,
  CalendarDays,
} from "lucide-react";

import { destinations } from "../data/destinations";
import BookingForm from "../components/BookingForm";

function DestinationDetails() {
  const { id } = useParams();

  const destination = destinations.find(
    (item) => item.id === id
  );

  if (!destination) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
        <h1 className="text-3xl font-bold text-dark">
          Destination Not Found
        </h1>
        <p className="mt-3 text-gray-500">
          Sorry, we couldn't find this destination.
        </p>
        <Link
          to="/explore"
          className="mt-6 rounded-full bg-primary px-6 py-3 font-semibold text-white hover:bg-teal-800"
        >
          Explore Destinations
        </Link>
      </div>
    );
  }

  const images = [destination.image, ...destination.gallery];

  return (
    <div className="min-h-screen bg-white">

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-5 pt-8 lg:px-8">
        <Link
          to="/explore"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-primary"
        >
          <ArrowLeft size={17} />
          Back to Explore
        </Link>
      </div>

      {/* Destination Heading */}
      <section className="mx-auto max-w-7xl px-5 pb-8 pt-7 lg:px-8">
        <div className="flex min-w-0 flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <div>
            <div className="mb-3 flex items-center gap-2 text-sm font-medium text-primary">
              <MapPin size={17} />
              {destination.country}
              <span className="text-gray-300">/</span>
              {destination.category}
            </div>

            <h1 className="break-words text-4xl font-extrabold tracking-tight text-dark sm:text-5xl">
              {destination.name}
            </h1>

            <p className="mt-3 max-w-2xl leading-7 text-gray-500">
              {destination.description}
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-2">
            <Star size={21} className="fill-amber-400 text-amber-400" />
            <span className="text-xl font-bold text-dark">
              {destination.rating.toFixed(1)}
            </span>
            <span className="text-sm text-gray-400">
              ({destination.reviews} reviews)
            </span>
          </div>

        </div>
      </section>

      {/* Destination Image Gallery */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid h-[300px] grid-cols-1 gap-3 overflow-hidden rounded-2xl sm:h-[420px] md:grid-cols-2">

          {/* Main Image */}
          <div className="h-full overflow-hidden">
            <img
              src={images[0]}
              alt={destination.name}
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          {/* Other Images */}
          <div className="hidden grid-cols-2 grid-rows-2 gap-3 md:grid">
            {images.slice(1, 4).map((image, index) => (
              <div
                key={image}
                className={`overflow-hidden ${
                  index === 2 ? "col-span-2" : ""
                }`}
              >
                <img
                  src={image}
                  alt={`${destination.name} view ${index + 2}`}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Quick Information */}
      <section className="mx-auto max-w-7xl px-5 pt-9 lg:px-8">
        <div className="grid grid-cols-1 gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:grid-cols-3">

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-primary">
              <Star size={22} />
            </div>
            <div>
              <p className="text-xs text-gray-400">Guest Rating</p>
              <p className="mt-1 font-bold text-dark">
                {destination.rating} / 5.0
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-accent">
              <Clock size={22} />
            </div>
            <div>
              <p className="text-xs text-gray-400">Trip Duration</p>
              <p className="mt-1 font-bold text-dark">
                {destination.duration}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <CalendarDays size={22} />
            </div>
            <div>
              <p className="text-xs text-gray-400">Trip Category</p>
              <p className="mt-1 font-bold text-dark">
                {destination.category}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Main Details and Booking */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-14 lg:grid-cols-3 lg:px-8">

        {/* Left Content */}
        <div className="space-y-12 lg:col-span-2">

          {/* About */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              About the destination
            </p>

            <h2 className="mt-3 text-2xl font-bold text-dark sm:text-3xl">
              Discover {destination.name}
            </h2>

            <p className="mt-5 leading-8 text-gray-500">
              {destination.description}
            </p>

            <p className="mt-4 leading-8 text-gray-500">
              From exploring local attractions to enjoying unique
              experiences, {destination.name} offers something special
              for every traveler. Plan your journey and make beautiful
              memories with Wanderly.
            </p>
          </div>

          {/* Activities */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Experiences & activities
            </p>

            <h2 className="mt-3 text-2xl font-bold text-dark">
              Things to do in {destination.name}
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {destination.activities.map((activity) => (
                <div
                  key={activity}
                  className="flex items-start gap-3 rounded-xl border border-gray-100 bg-[#F9FBFA] p-4"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-primary"
                  />
                  <span className="text-sm leading-6 text-gray-600">
                    {activity}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Information */}
          <div className="rounded-2xl bg-[#F5F8F7] p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Trip information
            </p>

            <h2 className="mt-3 text-2xl font-bold text-dark">
              Plan your experience
            </h2>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">

              <div>
                <p className="text-sm text-gray-400">
                  Starting price
                </p>
                <p className="mt-2 text-3xl font-extrabold text-primary">
                  ${destination.price.toLocaleString()}
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  Per person
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  Package duration
                </p>
                <p className="mt-2 text-xl font-bold text-dark">
                  {destination.duration}
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  Estimated trip duration
                </p>
              </div>

            </div>
          </div>

          {/* Reviews */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Traveler feedback
            </p>

            <h2 className="mt-3 text-2xl font-bold text-dark">
              Loved by travelers
            </h2>

            <div className="mt-5 flex flex-wrap items-center gap-4 rounded-xl border border-gray-100 p-5">
              <div className="text-4xl font-extrabold text-dark">
                {destination.rating.toFixed(1)}
              </div>

              <div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={17}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <p className="mt-2 text-sm text-gray-500">
                  Based on {destination.reviews} traveler reviews
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Booking Form */}
        <div id="booking" className="lg:col-span-1">
          <div className="lg:sticky lg:top-28">
            <BookingForm
              destinationName={destination.name}
              price={destination.price}
            />
          </div>
        </div>

      </section>

      {/* Bottom CTA */}
      <section className="bg-[#F5F8F7]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-12 text-center sm:flex-row sm:text-left lg:px-8">
          <div>
            <h2 className="text-2xl font-bold text-dark">
              Ready to explore {destination.name}?
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Your next unforgettable journey starts here.
            </p>
          </div>

          <a
            href="#booking"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-white transition hover:bg-teal-800"
          >
            Book Your Trip
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

    </div>
  );
}

export default DestinationDetails;
