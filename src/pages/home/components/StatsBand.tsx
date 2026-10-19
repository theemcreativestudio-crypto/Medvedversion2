import Reveal from "@/components/base/Reveal";
import { homeStats } from "@/mocks/home";

export default function StatsBand() {
  return (
    <section className="border-b border-foreground-950/10 bg-background-50">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[0.7fr_2.3fr]">
          <div className="flex items-center py-8 md:py-14">
            <span className="font-label text-[10px] text-foreground-500">By The Numbers</span>
          </div>

          <div className="grid grid-cols-1 divide-y divide-foreground-950/10 md:grid-cols-3 md:divide-x md:divide-y-0">
            {homeStats.map((stat, index) => (
              <Reveal
                key={stat.label}
                index={index}
                step={140}
                y={24}
                className="flex flex-col py-8 md:px-10 md:py-14"
              >
                <span className="font-label text-[10px] text-accent-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-6 font-heading text-5xl font-medium leading-none tracking-[-0.02em] text-foreground-950 md:text-6xl">
                  {stat.value}
                </span>
                <span className="mt-4 font-label text-[10px] text-secondary-600">{stat.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}