"use client";

import NextTopLoader from "nextjs-toploader";

export default function TopLoader() {
  return (
    <NextTopLoader
      color="#0355A5"
      initialPosition={0.18}
      crawlSpeed={180}
      height={3}
      crawl
      showSpinner={false}
      easing="ease"
      speed={220}
      shadow="0 0 10px rgba(3,85,165,0.35),0 0 5px rgba(3,85,165,0.25)"
      zIndex={9999}
    />
  );
}

