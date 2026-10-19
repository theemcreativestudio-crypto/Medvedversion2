import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { logos } from "@/mocks/home";
import ButtonLabel from "@/components/base/ButtonLabel";

interface NavbarProps {
  onOpenContact: () => void;
}

interface NavItem {
  label: string;
  to: string;
}

const navGroups: { label: string; items: NavItem[] }[] = [
  {
    label: "Properties",
    items: [
      { label: "Featured Listings", to: "/properties/sale" },
      { label: "For Leases", to: "/properties/lease" },
      { label: "Sold Listings", to: "/properties/sold" },
      { label: "Leased Properties", to: "/properties/leased" },
    ],
  },
  {
    label: "Buyers & Sellers",
    items: [
      { label: "Buyer's Guide", to: "/buyers-guide" },
      { label: "Seller's Guide", to: "/sellers-guide" },
    ],
  },
];

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const solid = scrolled || menuOpen;

  const linkBase = solid
    ? "text-foreground-950 hover:text-primary-700"
    : "text-background-50/85 hover:text-background-50";

  const handleContact = () => {
    setMenuOpen(false);
    onOpenContact();
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          solid ? "border-b border-foreground-950/10 bg-background-50/95 backdrop-blur" : "bg-transparent"
        }`}
      >
        <div className="flex h-20 items-center justify-between px-4 md:h-24 md:px-8">
          <Link to="/" className="flex items-center" aria-label="Team Medved home">
            <img
              src={solid ? logos.dark : logos.light}
              alt="Team Medved — Los Angeles luxury real estate"
              className="h-9 w-auto max-w-[190px] object-contain md:h-11"
            />
          </Link>

          <div className="flex items-center gap-5 md:gap-8">
            <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
              <Link
                to="/about"
                className={`link-underline font-label text-[10px] transition-colors ${linkBase}`}
              >
                Meet the Team
              </Link>
              <Link
                to="/properties/sale"
                className={`link-underline font-label text-[10px] transition-colors ${linkBase}`}
              >
                Featured Listings
              </Link>
              <a
                href="tel:+13102664236"
                className={`link-underline font-label text-[10px] transition-colors ${linkBase}`}
              >
                (310) 266-4236
              </a>
            </nav>

            <button
              type="button"
              onClick={handleContact}
              className="btn btn-fill hidden cursor-pointer items-center justify-center whitespace-nowrap rounded-[4px] bg-primary-500 px-6 py-3 btn-label text-foreground-950 md:inline-flex"
            >
              <ButtonLabel>Contact Us</ButtonLabel>
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className={`flex cursor-pointer items-center gap-2.5 font-label text-[10px] transition-colors ${
                solid ? "text-foreground-950 hover:text-primary-700" : "text-background-50 hover:text-primary-300"
              }`}
            >
              <span className="hidden sm:inline">Menu</span>
              <span
                className={`flex h-9 w-9 items-center justify-center border transition-colors ${
                  solid ? "border-foreground-950/25" : "border-background-50/40"
                }`}
              >
                <i className="ri-menu-line text-base" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out navigation */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
          className="absolute inset-0 h-full w-full cursor-pointer bg-foreground-950/60"
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-full max-w-[420px] flex-col bg-background-50 transition-transform duration-500 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-foreground-950/10 px-6 py-5">
            <img
              src={logos.dark}
              alt="Team Medved"
              className="h-8 w-auto max-w-[170px] object-contain"
            />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-[4px] border border-foreground-950/15 text-foreground-950 transition-colors hover:border-primary-600 hover:text-primary-700"
            >
              <i className="ri-close-line text-lg" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-6 py-8" aria-label="Sidebar">
            <p className="font-label text-[10px] text-foreground-500">Navigation</p>
            <ul className="mt-6 flex flex-col">
              <li className="border-b border-foreground-950/10">
                <Link
                  to="/"
                  className="block py-3 font-heading text-2xl text-foreground-950 transition-colors hover:text-primary-700"
                >
                  Home
                </Link>
              </li>
              <li className="border-b border-foreground-950/10">
                <Link
                  to="/about"
                  className="block py-3 font-heading text-2xl text-foreground-950 transition-colors hover:text-primary-700"
                >
                  Meet the Team
                </Link>
              </li>
              <li className="border-b border-foreground-950/10">
                <Link
                  to="/our-community"
                  className="block py-3 font-heading text-2xl text-foreground-950 transition-colors hover:text-primary-700"
                >
                  Our Community
                </Link>
              </li>

              {navGroups.map((group) => {
                const isOpen = openGroup === group.label;
                return (
                  <li key={group.label} className="border-b border-foreground-950/10">
                    <button
                      type="button"
                      onClick={() => setOpenGroup(isOpen ? null : group.label)}
                      aria-expanded={isOpen}
                      className="flex w-full cursor-pointer items-center justify-between py-3 font-heading text-2xl text-foreground-950 transition-colors hover:text-primary-700"
                    >
                      {group.label}
                      <i
                        className={`ri-arrow-down-s-line text-xl transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`grid overflow-hidden transition-all duration-300 ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <ul className="min-h-0 pb-3">
                        {group.items.map((item) => (
                          <li key={item.to}>
                            <Link
                              to={item.to}
                              className="block py-1.5 pl-4 font-body text-sm text-foreground-700 transition-colors hover:text-primary-700"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              })}

              <li className="border-b border-foreground-950/10">
                <Link
                  to="/communities"
                  className="block py-3 font-heading text-2xl text-foreground-950 transition-colors hover:text-primary-700"
                >
                  Neighborhoods
                </Link>
              </li>
              <li className="border-b border-foreground-950/10">
                <Link
                  to="/home-valuation"
                  className="block py-3 font-heading text-2xl text-foreground-950 transition-colors hover:text-primary-700"
                >
                  Home Valuation
                </Link>
              </li>
              <li className="border-b border-foreground-950/10">
                <Link
                  to="/testimonials"
                  className="block py-3 font-heading text-2xl text-foreground-950 transition-colors hover:text-primary-700"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </nav>

          <div className="border-t border-foreground-950/10 px-6 py-6">
            <button
              type="button"
              onClick={handleContact}
              className="btn btn-fill flex w-full cursor-pointer items-center justify-center whitespace-nowrap rounded-[4px] bg-primary-500 px-6 py-3.5 btn-label text-foreground-950"
            >
              <ButtonLabel>Contact Us</ButtonLabel>
            </button>
            <a
              href="tel:+13102664236"
              className="mt-3 block text-center font-label text-[10px] text-secondary-600 transition-colors hover:text-primary-700"
            >
              (310) 266-4236
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}