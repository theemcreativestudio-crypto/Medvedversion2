import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { instagramPosts } from "@/mocks/home";
import ButtonLabel from "@/components/base/ButtonLabel";

const tileSpans = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1 lg:col-span-1",
];

export default function InstagramFeed() {
  return (
    <section className="bg-background-50">
      <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-24">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            index="07"
            label="Follow Our Journey"
            title="@team_medved"
            description="New listings, neighborhood stories, and behind-the-scenes moments from across Los Angeles — fresh on the feed every week."
            className="max-w-xl"
          />

          <div className="flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-6">
              <div>
                <p className="font-heading text-2xl font-medium text-foreground-950">12.4K</p>
                <p className="mt-1 font-label text-[9px] text-foreground-500">Followers</p>
              </div>
              <span className="h-10 w-px bg-foreground-950/15" aria-hidden="true" />
              <div>
                <p className="font-heading text-2xl font-medium text-foreground-950">890</p>
                <p className="mt-1 font-label text-[9px] text-foreground-500">Posts</p>
              </div>
            </div>
            <a
              href="https://www.instagram.com/team_medved/"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="btn inline-flex items-center gap-2 whitespace-nowrap rounded-[4px] border border-foreground-950/25 px-7 py-3.5 btn-label text-foreground-950 hover:border-primary-600 hover:bg-primary-600 hover:text-foreground-950"
            >
              <ButtonLabel>Follow Us</ButtonLabel>
              <i className="ri-instagram-line text-base" />
            </a>
          </div>
        </div>

        <div className="mt-12 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[180px] md:gap-4 lg:auto-rows-[230px] lg:grid-cols-3">
          {instagramPosts.map((post, index) => (
            <Reveal
              key={post.image}
              index={index}
              step={100}
              y={34}
              className={`${tileSpans[index]}`}
            >
              <a
                href="https://www.instagram.com/team_medved/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={`${post.caption} — ${post.location}`}
                className="group relative block h-full w-full overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={`${post.caption} in ${post.location} by Team Medved`}
                  title={`Team Medved — ${post.location}`}
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />

                <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center border border-background-50/40 text-background-50 transition-colors duration-300 group-hover:border-primary-400 group-hover:bg-primary-500 group-hover:text-foreground-950">
                  <i className="ri-instagram-line text-base" />
                </span>

                <span className="absolute inset-0 bg-gradient-to-t from-foreground-950/85 via-foreground-950/15 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-95" />
                <span className="absolute inset-x-0 bottom-0 flex translate-y-3 flex-col gap-1 p-4 opacity-90 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:p-5">
                  <span className="flex items-center gap-1.5 font-label text-[9px] text-background-50/85">
                    <i className="ri-map-pin-2-line text-sm" />
                    {post.location}
                  </span>
                  <span className="text-sm font-medium leading-snug text-background-50 md:text-base">
                    {post.caption}
                  </span>
                  <span className="mt-1 flex items-center gap-1.5 text-xs text-background-50/80">
                    <i className="ri-heart-3-fill text-sm text-primary-300" />
                    {post.likes}
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}