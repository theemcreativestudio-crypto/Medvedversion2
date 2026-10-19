import { Link } from "react-router-dom";
import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { quickJumpCards } from "@/mocks/home";

export default function QuickJump() {
  return (
    <section className="bg-background-50">
      <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-28">
        <SectionHeading
          index="01"
          label="Start Here"
          title="Where would you like to begin?"
          className="max-w-3xl"
        />

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-3">
          {quickJumpCards.map((card, index) => (
            <Reveal key={card.title} index={index} step={140} y={40} className="h-full">
              <Link to={card.to} className="group flex h-full cursor-pointer flex-col">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={card.image}
                    alt={`${card.title} — Team Medved Los Angeles real estate`}
                    title={`${card.title} — Team Medved`}
                    className="h-full w-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <span className="font-label text-[10px] text-accent-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="rule flex-1" aria-hidden="true" />
                </div>

                <h3 className="mt-5 font-heading text-3xl leading-tight text-foreground-950">
                  {card.title}
                </h3>
                <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-foreground-600">
                  {card.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 btn-label text-foreground-950 transition-colors group-hover:text-primary-700">
                  {card.cta}
                  <i className="ri-arrow-right-line text-sm transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}