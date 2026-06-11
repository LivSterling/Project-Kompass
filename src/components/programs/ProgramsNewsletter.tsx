"use client";

import { useState } from "react";
import { storyblokEditable, type SbBlokData } from "@storyblok/react";
import GrowingDottedConnector from "@/components/about/GrowingDottedConnector";

interface ProgramsNewsletterProps {
  blok: {
    headline?: string;
    subtitle?: string;
    placeholder?: string;
    button_label?: string;
    action_url?: string;
    _uid: string;
  };
}

export default function ProgramsNewsletter({ blok }: ProgramsNewsletterProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const headline = blok.headline || "Stay Connected";
  const subtitle =
    blok.subtitle ||
    "Join Our Mailing List for Updates and Stories of Transformation";
  const placeholder = blok.placeholder || "Email Address";
  const label = blok.button_label || "Submit";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (blok.action_url) return; // let the browser post to the configured endpoint
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section
      {...storyblokEditable(blok as SbBlokData)}
      className="relative w-full overflow-x-clip"
    >
      <GrowingDottedConnector variant="green" />
      <div className="section-shell px-4 pb-10 md:px-6 md:pb-14">
        <h2 className="font-heading text-center text-[clamp(2.75rem,8vw,6.2rem)] leading-[1.1] tracking-[0.01em] text-green uppercase">
          {headline}
        </h2>

        <p className="mx-auto mt-6 max-w-[864px] text-center text-base font-medium leading-[26px] tracking-[0.01em] text-white">
          {subtitle}
        </p>

        {submitted ? (
          <p className="mt-8 text-center text-base font-semibold text-green">
            Thanks for subscribing!
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            action={blok.action_url || undefined}
            method={blok.action_url ? "post" : undefined}
            className="mx-auto mt-8 flex w-full max-w-[620px] items-stretch justify-center gap-3"
          >
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              aria-label={placeholder}
              className="h-[45px] w-full max-w-[440px] bg-[#d9d9d9] px-4 text-center text-[16px] font-medium leading-[26px] tracking-[0.01em] text-navy-dark placeholder:text-navy-dark/80 focus:outline-none"
            />
            <button
              type="submit"
              className="font-heading inline-flex h-[45px] w-[165px] shrink-0 items-center justify-center bg-orange px-5 py-[10px] text-center text-[20px] leading-[28px] tracking-[0.01em] text-black transition hover:brightness-105"
            >
              {label}
            </button>
          </form>
        )}
      </div>
      <GrowingDottedConnector variant="green" />
    </section>
  );
}
