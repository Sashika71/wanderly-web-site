
import { Link } from "react-router-dom";
import {
  Compass,
  Globe,
  Camera,
  MessageCircle,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-12 sm:pt-16 lg:px-8">

        <div className="grid gap-12 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link to="/" className="mb-5 inline-flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <Compass size={25} className="text-white" />
              </div>
              <span className="text-2xl font-bold">
                Wanderly<span className="text-accent">.</span>
              </span>
            </Link>

            <p className="max-w-xs text-sm leading-7 text-white/60">
              Discover amazing destinations, create unforgettable memories,
              and explore the world with Wanderly.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {[Globe, Camera, MessageCircle].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label={["Facebook", "Instagram", "Twitter"][index]}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:border-primary hover:bg-primary hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-4 text-sm text-white/60">
              <li>
                <Link to="/" className="transition-colors hover:text-accent">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/explore" className="transition-colors hover:text-accent">
                  Explore Destinations
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Support</h3>
            <ul className="space-y-4 text-sm text-white/60">
              <li>
                <a href="#contact" className="transition-colors hover:text-accent">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="mailto:hello@wanderly.com" className="transition-colors hover:text-accent">
                  Help & Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Get in Touch</h3>

            <div className="space-y-4 text-sm text-white/60">
              <p className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
                Explore the world with us
              </p>

              <a
                href="mailto:hello@wanderly.com"
                className="flex items-center gap-3 transition-colors hover:text-accent"
              >
                <Mail size={18} className="text-accent" />
                hello@wanderly.com
              </a>

              <a
                href="tel:+94112345678"
                className="flex items-center gap-3 transition-colors hover:text-accent"
              >
                <Phone size={18} className="text-accent" />
                +94 11 234 5678
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/45">
            © {new Date().getFullYear()} Wanderly. All rights reserved.
          </p>

          <p className="text-xs text-white/45">
            Made for travelers, by travel lovers.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
