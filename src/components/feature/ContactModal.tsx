import { useEffect } from "react";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import ButtonLabel from "@/components/base/ButtonLabel";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const FORM_ADDR = "https://readdy.ai/api/form/dahcu0bp14a1h3mr6j1g";

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const { status, message, submit } = useFormSubmit(FORM_ADDR);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const inputClass =
    "w-full rounded-md border border-foreground-950/15 bg-background-50 px-4 py-3 font-body text-sm text-foreground-950 outline-none transition-colors placeholder:text-secondary-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-200";

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Contact Us"
    >
      <button
        type="button"
        aria-label="Close contact form"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-pointer bg-foreground-950/60"
      />
      <div className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-lg border border-background-200 bg-background-50 p-6 md:p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-[4px] border border-foreground-950/15 text-foreground-950 transition-colors hover:border-foreground-950/40"
        >
          <i className="ri-close-line text-lg" />
        </button>

        <span className="font-label text-[11px] text-primary-700">Get In Touch</span>
        <h2 className="mt-3 font-heading text-3xl text-foreground-950">Contact Us</h2>
        <p className="mt-2 font-body text-sm leading-relaxed text-foreground-700">
          Tell us a little about what you are looking for and Karen or a member of the team will be
          in touch shortly.
        </p>

        <form
          data-readdy-form
          id="contact-us-form"
          onSubmit={submit}
          className="mt-6 flex flex-col gap-4"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-name" className="font-label text-[10px] text-secondary-600">
              Full Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Your full name"
              className={inputClass}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-phone" className="font-label text-[10px] text-secondary-600">
                Phone
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="(000) 000-0000"
                className={inputClass}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-email" className="font-label text-[10px] text-secondary-600">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@email.com"
                className={inputClass}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="contact-message" className="font-label text-[10px] text-secondary-600">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              maxLength={500}
              placeholder="How can we help?"
              className={`${inputClass} resize-none`}
            />
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

          <label className="flex items-start gap-3 font-body text-xs leading-relaxed text-foreground-700">
            <input
              type="checkbox"
              name="consent"
              required
              className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-primary-500"
            />
            I consent to being contacted by Team Medved by phone, email, or text message regarding
            my real estate inquiry.
          </label>

          {status !== "idle" && message && (
            <p
              className={`rounded-md px-4 py-3 font-body text-sm ${
                status === "error"
                  ? "bg-accent-100 text-accent-900"
                  : "bg-primary-100 text-primary-900"
              }`}
            >
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="btn btn-fill mt-1 inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-[4px] bg-primary-500 px-6 py-3 btn-label text-foreground-950 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <ButtonLabel>{status === "submitting" ? "Sending..." : "Submit"}</ButtonLabel>
          </button>
        </form>
      </div>
    </div>
  );
}