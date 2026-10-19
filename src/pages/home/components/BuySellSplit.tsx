import { Link } from "react-router-dom";
import Reveal from "@/components/base/Reveal";
import { buySellPanels } from "@/mocks/home";

export default function BuySellSplit() {
  return (
    <section className="bg-background-50">
      <div className="mx-auto max-w-[1400px] px-4 py-14 md:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {buySellPanels.map((panel, index) => (
            <Reveal key={panel.title} index={index} step={160} y={44}>
              <Link
                to={panel.to}
                className="group relative flex h-[420px] cursor-pointer flex-col justify-end overflow-hidden md:h-[520px]"
              >
                <img
                  src={panel.image}
                  alt={`${panel.title} — Team Medved Los Angeles real estate guidance`}
                  title={`${panel.title} — Team Medved`}
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/90 via-foreground-950/35 to-transparent" />
                <div className="relative z-10 p-8 md:p-10">
                  <span className="font-label text-[10px] text-primary-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-heading text-4xl font-medium leading-tight text-background-50 md:text-5xl">
                    {panel.title}
                  </h3>
                  <p className="mt-3 max-w-md font-body text-sm leading-relaxed text-background-50/80">
                    {panel.description}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2 border-b border-background-50/40 pb-1 btn-label text-background-50 transition-colors group-hover:border-primary-400 group-hover:text-primary-300">
                    {panel.cta}
                    <i className="ri-arrow-right-line text-sm" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}