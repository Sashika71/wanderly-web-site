
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative flex min-h-[600px] items-center overflow-hidden bg-dark sm:min-h-[620px] lg:min-h-[680px]">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=2000&q=90')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark/85 via-dark/55 to-dark/10" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-20 sm:py-24 lg:px-8">

        <div className="max-w-3xl">

          <div className="mb-7 inline-flex max-w-full items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs text-white backdrop-blur-md sm:text-sm">
            <Sparkles size={16} className="text-accent" />
            Discover extraordinary places
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
            Discover Your
            <br />
            Next <span className="text-accent">Adventure.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
            Explore breathtaking destinations, experience new cultures,
            and create unforgettable memories. Your next adventure
            starts with Wanderly.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">

            <Link
              to="/explore"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary px-7 py-4 font-semibold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-teal-800 sm:w-auto"
            >
              Explore Destinations
              <ArrowRight
                size={19}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <a
              href="#popular-destinations"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/50 px-7 py-4 font-semibold text-white transition-all hover:bg-white hover:text-dark sm:w-auto"
            >
              <Play size={17} />
              Discover More
            </a>

          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-5 text-white/80 sm:mt-12 sm:gap-8">
            <div>
              <p className="text-2xl font-bold text-white">50+</p>
              <p className="mt-1 text-xs">Destinations</p>
            </div>

            <div className="hidden h-10 w-px bg-white/30 sm:block" />

            <div>
              <p className="text-2xl font-bold text-white">10k+</p>
              <p className="mt-1 text-xs">Happy Travelers</p>
            </div>

            <div className="hidden h-10 w-px bg-white/30 sm:block" />

            <div>
              <p className="text-2xl font-bold text-white">4.9/5</p>
              <p className="mt-1 text-xs">Customer Rating</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
