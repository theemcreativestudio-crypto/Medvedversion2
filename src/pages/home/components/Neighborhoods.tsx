import { useRef } from "react";
import { Link } from "react-router-dom";
import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { neighborhoods } from "@/mocks/home";

export default function Neighborhoods() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * 400, behavior: "smooth" });
  };

  return (
    <section className="overflow-hidden bg-background-50">
      <div className="mx-auto max-w-[1400px] px-4 pt-16 md:px-8 md:pt-28">
        <SectionHeading
          index="06"
          label="Where We Live"
          title="Neighborhoods"
          actions={
            <div className="hidden items-center gap-5 md:flex">
              <Link
                to="/communities"
                className="link-underline cursor-pointer whitespace-nowrap btn-label text-foreground-950 transition-colors hover:text-primary-700"
              >
                View All
              </Link>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous neighborhoods"
                  onClick={() => scrollByCard(-1)}
                  className="flex h-11 w-11 cursor-pointer items-center justify-center border border-foreground-950/20 text-foreground-950 transition-colors hover:border-primary-600 hover:bg-primary-600 hover:text-foreground-950"
                >
                  <i className="ri-arrow-left-line text-base" />
                </button>
                <button
                  type="button"
                  aria-label="Next neighborhoods"
                  onClick={() => scrollByCard(1)}
                  className="flex h-11 w-11 cursor-pointer items-center justify-center border border-foreground-950/20 text-foreground-950 transition-colors hover:border-primary-600 hover:bg-primary-600 hover:text-foreground-950"
                >
                  <i className="ri-arrow-right-line text-base" />
                </button>
              </div>
            </div>
          }
        />
      </div>

      <div
        ref={trackRef}
        className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-20 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:px-8"
        style={{ scrollbarWidth: "none" }}
      >
        {neighborhoods.map((hood, index) => (
          <Reveal
            key={hood.slug}
            index={index}
            step={100}
            y={40}
            className="w-[280px] shrink-0 snap-start md:w-[360px]"
          >
            <Link to={`/neighborhoods/${hood.slug}`} className="group block cursor-pointer">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <img
                  src={hood.image}
                  alt={`${hood.name} neighborhood guide — Team Medved Los Angeles real estate`}
                  title={`${hood.name} — Team Medved`}
                  className="h-full w-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/70 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 font-label text-[10px] text-background-50/85">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="mt-5 flex items-center justify-between gap-3 border-t border-foreground-950/10 pt-4">
                <h3 className="font-heading text-2xl leading-tight text-foreground-950">
                  {hood.name}
                </h3>
                <i className="ri-arrow-right-up-line text-lg text-foreground-400 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary-700" />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}