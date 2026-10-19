import { Link } from "react-router-dom";
import { heroMedia } from "@/mocks/home";
import { useParallax } from "@/hooks/useParallax";
import Reveal from "@/components/base/Reveal";
import ButtonLabel from "@/components/base/ButtonLabel";

export default function Hero() {
  const parallaxRef = useParallax<HTMLDivElement>(0.15);

  return (
    <section className="relative flex h-screen min-h-[680px] w-full items-end overflow-hidden bg-foreground-950">
      <div
        ref={parallaxRef}
        className="absolute inset-x-0 -top-[18%] -bottom-[18%] will-change-transform"
      >
        <video
          className="h-full w-full animate-ken-burns object-cover object-center"
          poster={heroMedia.poster}
          playsInline
          loop
          muted
          autoPlay
          preload="auto"
          aria-label="Aerial footage of the Los Angeles skyline at sunset — Team Medved luxury real estate"
        >
          <source src={heroMedia.webm} type="video/webm" />
          <source src={heroMedia.mp4} type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/90 via-foreground-950/35 to-foreground-950/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground-950/70 via-foreground-950/10 to-transparent" />

      {/* Editorial inset frame */}
      <div
        className="pointer-events-none absolute inset-4 z-10 hidden border border-background-50/20 md:block md:inset-6"
        aria-hidden="true"
      />

      {/* Vertical folio label */}
      <span className="absolute right-10 top-1/2 z-10 hidden -translate-y-1/2 font-label text-[10px] tracking-[0.3em] text-background-50/55 [writing-mode:vertical-rl] lg:block">
        Southern California — Est. 2004
      </span>

      <div className="relative z-10 w-full px-6 pb-16 md:px-16 md:pb-24">
        <div className="max-w-4xl">
          <Reveal index={0} step={130} y={22}>
            <span className="inline-flex items-center gap-3 font-label text-[10px] text-primary-300">
              <span className="h-1.5 w-1.5 bg-primary-400" aria-hidden="true" />
              Los Angeles Luxury Real Estate
            </span>
          </Reveal>

          <Reveal index={1} step={130} y={22}>
            <h1 className="mt-7 font-heading text-[3.75rem] font-medium leading-[0.88] tracking-[-0.035em] text-background-50 sm:text-8xl lg:text-[8.5rem]">
              Team Medved
            </h1>
          </Reveal>

          <Reveal index={2} step={130} y={22}>
            <p className="mt-8 max-w-xl font-body text-base font-light leading-relaxed text-background-50/80 md:text-lg">
              Top producing agents in the Lake Hollywood, Los Feliz, Silver Lake, Studio City,
              Valley Village, Sherman Oaks, Toluca Lake, and surrounding areas.
            </p>
          </Reveal>

          <Reveal index={3} step={130} y={22}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/properties/sale"
                className="btn btn-fill-light inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-[4px] bg-primary-500 px-9 py-4 btn-label text-foreground-950"
              >
                <ButtonLabel>Browse Properties</ButtonLabel>
                <i className="ri-arrow-right-line btn-arrow text-sm" />
              </Link>
              <Link
                to="/home-valuation"
                className="btn inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-[4px] border border-background-50/40 px-9 py-4 btn-label text-background-50 hover:border-primary-500 hover:bg-primary-500 hover:text-foreground-950"
              >
                <ButtonLabel>Home Valuation</ButtonLabel>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 z-10 hidden items-center gap-4 lg:flex">
        <span className="font-label text-[10px] text-background-50/55">Scroll</span>
        <span className="h-px w-16 bg-background-50/40" aria-hidden="true" />
        <i className="ri-arrow-down-line text-background-50/70" aria-hidden="true" />
      </div>
    </section>
  );
}