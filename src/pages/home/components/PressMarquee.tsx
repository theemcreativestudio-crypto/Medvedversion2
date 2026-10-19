import { pressNames } from "@/mocks/home";

const marqueeItems = [...pressNames, ...pressNames];

export default function PressMarquee() {
  return (
    <section className="overflow-hidden border-y border-foreground-950/10 bg-foreground-950 py-12 md:py-16">
      <div className="mx-auto mb-10 max-w-[1400px] px-4 md:px-8">
        <span className="font-label text-[10px] text-primary-300">As Seen In</span>
      </div>

      <div className="group relative flex overflow-hidden">
        <div className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]">
          {marqueeItems.map((name, index) => (
            <span
              key={`${name}-${index}`}
              className="flex items-center whitespace-nowrap font-heading text-3xl font-light italic tracking-wide text-background-50/55 transition-colors duration-300 hover:text-primary-300 md:text-4xl"
            >
              {name}
              <span className="mx-12 h-1.5 w-1.5 bg-primary-500/60 md:mx-16" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}