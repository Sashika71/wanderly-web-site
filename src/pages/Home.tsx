
import {
  ArrowRight,
  ShieldCheck,
  Headphones,
  Star,
  Quote,
  Plane,
  Globe2,
  Heart,
} from "lucide-react";

import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import DestinationCard from "../components/DestinationCard";
import { destinations } from "../data/destinations";

function Home() {
  const featuredDestinations = destinations.filter(
    (destination) => destination.featured
  );

  return (
    <div className="overflow-hidden">

      {/* HERO SECTION */}
      <Hero />

      {/* SEARCH SECTION */}
      <SearchBar />

      {/* POPULAR DESTINATIONS */}
      <section
        id="popular-destinations"
        className="bg-white px-5 py-16 sm:py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

            <div>
              <span className="text-sm font-bold uppercase tracking-[3px] text-primary">
                Explore the World
              </span>

              <h2 className="mt-4 text-3xl font-extrabold text-dark sm:text-4xl">
                Popular Destinations
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-gray-500">
                Discover handpicked destinations loved by travelers.
                Find your perfect getaway and start creating memories.
              </p>
            </div>

            <Link
              to="/explore"
              className="inline-flex items-center gap-2 font-semibold text-primary transition-all hover:gap-4"
            >
              View All Destinations
              <ArrowRight size={19} />
            </Link>

          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {featuredDestinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
              />
            ))}
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-secondary px-5 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[3px] text-primary">
              Why Wanderly
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-dark sm:text-4xl">
              Travel Better, Experience More
            </h2>

            <p className="mt-5 leading-7 text-gray-500">
              We make planning your next adventure simple, enjoyable,
              and memorable from beginning to end.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-2xl bg-white p-8 text-center shadow-sm transition-all hover:-translate-y-2 hover:shadow-lg">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-primary">
                <Globe2 size={30} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-dark">
                Amazing Destinations
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-500">
                Explore carefully selected destinations around the world
                and discover places worth remembering.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 text-center shadow-sm transition-all hover:-translate-y-2 hover:shadow-lg">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-accent">
                <ShieldCheck size={30} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-dark">
                Trusted Experiences
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-500">
                Enjoy thoughtfully planned travel experiences with
                quality and comfort in mind.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 text-center shadow-sm transition-all hover:-translate-y-2 hover:shadow-lg">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-primary">
                <Headphones size={30} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-dark">
                Dedicated Support
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-500">
                Get assistance throughout your journey and enjoy
                a smoother travel planning experience.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="bg-white px-5 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* Left Content */}
            <div>
              <span className="text-sm font-bold uppercase tracking-[3px] text-primary">
                Traveler Stories
              </span>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-dark sm:text-4xl">
                Memories That Last
                <span className="text-primary"> Forever.</span>
              </h2>

              <p className="mt-5 max-w-lg leading-8 text-gray-500">
                Every journey tells a story. We are proud to help
                travelers discover new places and create experiences
                they will remember for a lifetime.
              </p>

              <div className="mt-8 flex items-center gap-4">

                <div className="flex -space-x-3">
                  <img
                    src="https://i.pravatar.cc/100?img=47"
                    alt="Traveler"
                    className="h-11 w-11 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://i.pravatar.cc/100?img=12"
                    alt="Traveler"
                    className="h-11 w-11 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://i.pravatar.cc/100?img=32"
                    alt="Traveler"
                    className="h-11 w-11 rounded-full border-2 border-white"
                  />
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-primary text-xs font-bold text-white">
                    +10k
                  </div>
                </div>

                <div>
                  <p className="text-sm font-bold text-dark">
                    Loved by travelers
                  </p>
                  <p className="text-xs text-gray-500">
                    Across the world
                  </p>
                </div>

              </div>
            </div>

            {/* Review Card */}
            <div className="relative rounded-3xl bg-secondary p-8 sm:p-12">

              <Quote
                size={50}
                className="absolute right-8 top-8 text-primary/15"
              />

              <div className="flex gap-1 text-amber-400">
                {[1, 2, 3, 4, 5].map((number) => (
                  <Star
                    key={number}
                    size={19}
                    className="fill-current"
                  />
                ))}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-dark">
                An unforgettable experience!
              </h3>

              <p className="mt-5 leading-8 text-gray-600">
                "Planning our vacation with Wanderly was such a
                wonderful experience. Everything was easy to explore
                and the destinations were absolutely beautiful.
                We cannot wait for our next adventure!"
              </p>

              <div className="mt-8 flex items-center gap-4 border-t border-gray-200 pt-7">

                <img
                  src="https://i.pravatar.cc/100?img=44"
                  alt="Customer portrait"
                  className="h-12 w-12 rounded-full object-cover"
                />

                <div>
                  <p className="font-bold text-dark">
                    Emily Johnson
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Traveler
                  </p>
                </div>

                <div className="ml-auto text-right">
                  <p className="text-2xl font-extrabold text-primary">
                    4.9/5
                  </p>
                  <p className="text-xs text-gray-400">
                    Average rating
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* STATISTICS */}
      <section className="bg-primary px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 text-center md:grid-cols-4">

          <div>
            <p className="text-3xl font-extrabold text-white sm:text-4xl">
              50+
            </p>
            <p className="mt-2 text-sm text-white/75">
              Amazing Destinations
            </p>
          </div>

          <div>
            <p className="text-3xl font-extrabold text-white sm:text-4xl">
              10K+
            </p>
            <p className="mt-2 text-sm text-white/75">
              Happy Travelers
            </p>
          </div>

          <div>
            <p className="text-3xl font-extrabold text-white sm:text-4xl">
              4.9/5
            </p>
            <p className="mt-2 text-sm text-white/75">
              Average Rating
            </p>
          </div>

          <div>
            <p className="text-3xl font-extrabold text-white sm:text-4xl">
              24/7
            </p>
            <p className="mt-2 text-sm text-white/75">
              Customer Support
            </p>
          </div>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-white px-5 py-16 sm:py-24 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-dark px-5 py-14 text-center sm:px-14 sm:py-20">

          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-2xl">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-accent">
              <Plane size={28} />
            </div>

            <h2 className="mt-7 text-3xl font-extrabold text-white sm:text-5xl">
              Ready to Plan Your
              <span className="text-accent"> Dream Getaway?</span>
            </h2>

            <p className="mt-6 leading-8 text-white/65">
              Your next unforgettable adventure is just one click away.
              Explore incredible destinations and start planning today.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">

              <Link
                to="/explore"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-white transition-all hover:bg-teal-700 sm:w-auto"
              >
                Explore All Trips
                <ArrowRight size={19} />
              </Link>

              <a
                href="mailto:hello@wanderly.com"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-4 font-semibold text-white transition-all hover:bg-white hover:text-dark sm:w-auto"
              >
                Contact Us
                <Heart size={18} />
              </a>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
