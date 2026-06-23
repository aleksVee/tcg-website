import { useEffect } from "react";
import { Link } from "wouter";

export default function ThankYou() {
  // Push a conversion event to GTM dataLayer on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "quote_form_submission",
        page: "/thank-you",
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
      {/* Header bar */}
      <header className="w-full bg-[#222222] py-4 px-8 flex items-center justify-between">
        <Link href="/">
          <span className="font-['Playfair_Display'] text-white text-xl font-semibold tracking-wide cursor-pointer">
            The Concrete Guyz
          </span>
        </Link>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-2xl w-full text-center">
          {/* Gold checkmark */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full bg-[#C9A84C] flex items-center justify-center shadow-lg">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          {/* Heading */}
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#222222] mb-4 leading-tight">
            Quote Request{" "}
            <span className="italic text-[#C9A84C]">Received.</span>
          </h1>

          {/* Subheading */}
          <p className="text-[#555555] text-lg leading-relaxed mb-12 font-['Lato']">
            Thanks for reaching out to The Concrete Guyz. We will review your
            request and be in touch soon.
          </p>

          {/* Divider */}
          <div className="w-16 h-px bg-[#C9A84C] mx-auto mb-12" />

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <button className="px-8 py-3 bg-[#222222] text-white font-['Lato'] font-semibold tracking-widest text-sm uppercase hover:bg-[#C9A84C] transition-colors duration-300 cursor-pointer">
                Back to Home
              </button>
            </Link>
            <Link href="/#services">
              <button className="px-8 py-3 border border-[#222222] text-[#222222] font-['Lato'] font-semibold tracking-widest text-sm uppercase hover:bg-[#222222] hover:text-white transition-colors duration-300 cursor-pointer">
                Our Services
              </button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer strip */}
      <footer className="w-full bg-[#222222] py-4 px-8 text-center">
        <p className="text-[#888888] text-xs font-['Lato'] tracking-widest uppercase">
          The Concrete Guyz &mdash; Canberra, ACT &mdash;{" "}
          <a
            href="mailto:zac@theconcreteguyz.com.au"
            className="text-[#C9A84C] hover:underline"
          >
            zac@theconcreteguyz.com.au
          </a>
        </p>
      </footer>
    </div>
  );
}
