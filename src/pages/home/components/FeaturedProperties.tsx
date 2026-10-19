import { Link } from "react-router-dom";
import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { featuredProperties } from "@/mocks/home";

export default function FeaturedProperties() {
  return (
    <section className="bg-background-50">
      <div className="mx-auto max-w-[1400px] px-4 py-12 md:px-8 md:py-16">
        <SectionHeading
          index="02"
          label="Portfolio"
          title="Featured Properties"
          actions={
            <Link
              to="/properties/sale"
              className="link-underline hidden cursor-pointer items-center gap-2 whitespace-nowrap btn-label text-foreground-950 transition-colors hover:text-primary-700 md:inline-flex"
            >
              View All
              <i className="ri-arrow-right-line text-sm" />
            </Link>
          }
        />

        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProperties.map((property, index) => (
            <Reveal key={property.id} index={index} step={120} y={40} className="h-full">
              <Link
                to={`/properties/${property.id}`}
                className="group flex h-full cursor-pointer flex-col"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <img
                    src={property.image}
                    alt={`${property.name} — ${property.address} luxury home listed by Team Medved`}
                    title={`${property.name}, ${property.address}`}
                    className="h-full w-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                  <span className="absolute left-0 top-0 bg-foreground-950/75 px-3 py-1.5 font-label text-[9px] text-background-50">
                    {property.tag}
                  </span>

                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-foreground-950/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-2 border border-background-50/60 px-5 py-2.5 btn-label text-background-50">
                      View Property
                      <i className="ri-arrow-right-line text-sm" />
                    </span>
                  </div>
                </div>

                <h3 className="mt-5 font-heading text-xl leading-snug text-foreground-950">
                  {property.name}
                </h3>
                <p className="mt-2 font-body text-xs leading-relaxed text-foreground-500">
                  {property.address}
                  {property.meta ? ` · ${property.meta}` : ""}
                </p>

                <div className="mt-auto flex items-center justify-between gap-3 border-t border-foreground-950/10 pt-4 md:mt-5">
                  <span className="font-heading text-lg font-medium text-primary-700">
                    {property.price}
                  </span>
                  <i className="ri-arrow-right-line text-foreground-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary-700" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 md:hidden">
          <Link
            to="/properties/sale"
            className="link-underline inline-flex cursor-pointer items-center gap-2 whitespace-nowrap btn-label text-foreground-950"
          >
            View All Properties
            <i className="ri-arrow-right-line text-sm" />
          </Link>
        </div>
      </div>
    </section>
  );
}