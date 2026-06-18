"use client";

import { useEffect, useState } from "react";

// Presence-based query flag, read client-side after hydration.
// Used to let a page be embedded chrome-free inside another app, e.g. via
// iframe: `?hideHeader`, `?hideFooter`, `?hideCta`. Returns false on the
// server and on first client render, so statically rendered pages keep their
// normal markup and only drop the flagged element after hydration.
export function useQueryFlag(param: string) {
  const [present, setPresent] = useState(false);
  useEffect(() => {
    setPresent(new URLSearchParams(window.location.search).has(param));
  }, [param]);
  return present;
}
