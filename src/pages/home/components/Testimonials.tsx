import { useState } from "react";
import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { testimonials } from "@/mocks/home";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const total = testimonials.length;
  const current = testimonials[active];

  const go = (direction: 1 | -1) => setActive((prev) => (prev + direction + total) % total);

  return (
    <section className="bg-foreground-950">
      <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-28">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.8fr_1.5fr] lg:gap-20">
          <div>
            <SectionHeading tone="light" index="05" label="Client Stories" title="Testimonials" />

            <Reveal y={22} delay={140}>
              <p className="mt-6 max-w-sm font-body text-base leading-relaxed text-background-50/70">
                A few words from the families, buyers, and investors we&apos;ve helped move across
                Los Angeles.
              </p>
            </Reveal>

            <div className="mt-10 flex items-center gap-4">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="flex h-12 w-12 cursor-pointer items-center justify-center border border-background-50/25 text-background-50 transition-colors hover:border-primary-400 hover:bg-primary-500 hover:text-foreground-950"
              >
                <i className="ri-arrow-left-line text-base" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="flex h-12 w-12 cursor-pointer items-center justify-center border border-background-50/25 text-background-50 transition-colors hover:border-primary-400 hover:bg-primary-500 hover:text-foreground-950"
              >
                <i className="ri-arrow-right-line text-base" />
              </button>
              <span className="ml-auto font-label text-[10px] text-background-50/55">
                {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
            </div>
          </div>

          <div>
            <Reveal y={26}>
              <i
                className="ri-double-quotes-l text-6xl leading-none text-primary-400"
                aria-hidden="true"
              />
              <blockquote
                key={`quote-${active}`}
                className="mt-2 animate-fade-up font-heading text-2xl font-medium leading-snug text-background-50 md:text-4xl"
              >
                {current.quote}
              </blockquote>
              <div key={`meta-${active}`} className="mt-8 animate-fade-up">
                <p className="font-body text-sm font-medium text-background-50">{current.name}</p>
                <p className="mt-1 font-label text-[10px] text-background-50/55">
                  {current.role} · {current.location}
                </p>
              </div>
            </Reveal>

            <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-background-50/15 pt-6">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`cursor-pointer font-label text-[10px] transition-colors ${
                    index === active
                      ? "text-primary-300"
                      : "text-background-50/35 hover:text-background-50/70"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}