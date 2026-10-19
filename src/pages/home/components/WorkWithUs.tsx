import Reveal from "@/components/base/Reveal";
import { useParallax } from "@/hooks/useParallax";
import { workWithUsImage } from "@/mocks/home";
import ButtonLabel from "@/components/base/ButtonLabel";

interface WorkWithUsProps {
  onOpenContact: () => void;
}

export default function WorkWithUs({ onOpenContact }: WorkWithUsProps) {
  const parallaxRef = useParallax<HTMLDivElement>(0.12);

  return (
    <section className="relative flex min-h-[620px] items-center overflow-hidden md:min-h-screen">
      <div
        ref={parallaxRef}
        className="absolute inset-x-0 -top-[15%] -bottom-[15%] will-change-transform"
      >
        <img
          src={workWithUsImage}
          alt="The Los Angeles skyline at sunset — the neighborhoods Team Medved serves"
          title="Work With Team Medved — Los Angeles luxury real estate"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-foreground-950/75" />

      <div
        className="pointer-events-none absolute inset-4 z-10 hidden border border-background-50/15 md:block md:inset-8"
        aria-hidden="true"
      />

      <Reveal
        y={40}
        className="relative z-20 mx-auto flex w-full max-w-[1400px] flex-col items-center px-6 py-24 text-center md:px-16 md:py-32"
      >
        <span className="inline-flex items-center gap-3 font-label text-[10px] text-primary-300">
          <span className="h-1.5 w-1.5 bg-primary-400" aria-hidden="true" />
          Work With Us
        </span>
        <h2 className="mt-7 max-w-4xl font-heading text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-background-50 md:text-6xl">
          Exceptional service for the world&apos;s most discerning clientele.
        </h2>
        <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-background-50/75">
          Karen and Julie&apos;s expertise in developing and executing systems to achieve
          exceptional client satisfaction for some of the world&apos;s most discriminating
          clientele was an ideal foundation for a career in Los Angeles real estate.
        </p>
        <button
          type="button"
          onClick={onOpenContact}
          className="btn btn-fill-light mt-10 inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-[4px] bg-primary-500 px-10 py-4 btn-label text-foreground-950"
        >
          <ButtonLabel>Contact Us</ButtonLabel>
          <i className="ri-arrow-right-line btn-arrow text-sm" />
        </button>
      </Reveal>
    </section>
  );
}