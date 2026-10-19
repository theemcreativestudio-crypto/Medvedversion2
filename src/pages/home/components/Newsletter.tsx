import Reveal from "@/components/base/Reveal";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import ButtonLabel from "@/components/base/ButtonLabel";

const FORM_ADDR = "https://readdy.ai/api/form/dahcu0bp14a1h3mr6j20";

export default function Newsletter() {
  const { status, message, submit } = useFormSubmit(FORM_ADDR);

  return (
    <section className="border-t border-foreground-950/10 bg-primary-50">
      <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal y={22}>
              <span className="font-label text-[10px] text-primary-700">Newsletter</span>
              <h2 className="mt-5 font-heading text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-foreground-950 md:text-5xl">
                Receive Exclusive Listings in Your Inbox
              </h2>
              <p className="mt-6 max-w-md font-body text-base leading-relaxed text-foreground-700">
                Are you interested in buying a home? Look no further than working with real estate
                experts.
              </p>
            </Reveal>
          </div>

          <Reveal y={26} delay={120} className="w-full">
            <form data-readdy-form id="newsletter-form" onSubmit={submit} className="w-full">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="newsletter-name" className="font-label text-[9px] text-foreground-600">
                    Name
                  </label>
                  <input
                    id="newsletter-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Jane Doe"
                    className="mt-2 w-full border-b border-foreground-950/25 bg-transparent py-3 font-body text-sm text-foreground-950 outline-none transition-colors placeholder:text-secondary-500 focus:border-primary-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="newsletter-email"
                    className="font-label text-[9px] text-foreground-600"
                  >
                    Email
                  </label>
                  <input
                    id="newsletter-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@email.com"
                    className="mt-2 w-full border-b border-foreground-950/25 bg-transparent py-3 font-body text-sm text-foreground-950 outline-none transition-colors placeholder:text-secondary-500 focus:border-primary-600"
                  />
                </div>
              </div>

              <input
                className="form-field-alt"
                type="text"
                name="website_alt"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                readOnly
              />

              <label className="mt-6 flex items-start gap-3 font-body text-xs leading-relaxed text-foreground-700">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-primary-600"
                />
                I agree to be contacted by Karen Medved via call, email, and text for real estate
                services. To opt out, you can reply &apos;stop&apos; at any time or reply
                &apos;help&apos; for assistance. Message and data rates may apply. Message frequency
                may vary.
              </label>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="btn btn-fill mt-7 inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-[4px] bg-primary-500 px-9 py-4 btn-label text-foreground-950 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <ButtonLabel>{status === "submitting" ? "Submitting..." : "Submit"}</ButtonLabel>
                <i className="ri-arrow-right-line btn-arrow text-sm" />
              </button>

              {status !== "idle" && message && (
                <p
                  className={`mt-4 font-body text-sm ${
                    status === "error" ? "text-accent-700" : "text-primary-700"
                  }`}
                >
                  {message}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}