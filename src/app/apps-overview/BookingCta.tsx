"use client";

import { useEffect, useState } from "react";

export default function BookingCta({ bookUrl }: { bookUrl: string }) {
  const [open, setOpen] = useState(false);
  const embedUrl = `${bookUrl}?embed=1`;

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="btn btn-primary"
      >
        Schedule your onboarding
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Book a meeting"
          className="fixed inset-0 z-[1100] flex items-center justify-center px-4 py-6"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpen(false)}
            className="absolute inset-0 cursor-default bg-black/70 backdrop-blur-sm"
          />
          <div className="relative w-full max-w-2xl overflow-hidden rounded-sm border border-[#334155] bg-[#0f172a] shadow-2xl shadow-black/50">
            <div className="flex items-center justify-between border-b border-[#334155] px-5 py-3">
              <span className="font-mono text-[11px] font-semibold tracking-[0.16em] uppercase text-[#94a3b8]">
                Schedule your onboarding
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="grid h-8 w-8 place-items-center rounded-sm text-[#94a3b8] transition-colors hover:bg-[#1e293b] hover:text-white"
              >
                ✕
              </button>
            </div>
            <iframe
              src={embedUrl}
              title="Book a meeting"
              width="100%"
              height={600}
              style={{ border: "none", display: "block" }}
              className="w-full bg-white"
            />
          </div>
        </div>
      )}
    </>
  );
}
