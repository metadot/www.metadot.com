import type { NextConfig } from "next";
import nextMDX from "@next/mdx";

const nextConfig: NextConfig = {
  experimental: {
    mdxRs: true,
  },
  async redirects() {
    return [
      // Canonicalize the apex (metadot.com) to www, EXCEPT the Microsoft identity
      // association file. Microsoft's publisher-domain verification fetches the apex
      // directly and rejects any redirect, so that one path must return 200 on the
      // apex while every other apex URL still funnels to www. This replaces the
      // platform-level apex->www redirect (removed in Vercel project domain config).
      {
        source: "/:path((?!\\.well-known/microsoft-identity-association\\.json).*)",
        has: [{ type: "host", value: "metadot.com" }],
        destination: "https://www.metadot.com/:path",
        permanent: true,
      },
      { source: "/beta", destination: "/apps-overview", permanent: true },
      { source: "/blog/globalteam/", destination: "/blog/2021/05/global", permanent: true },
      { source: "/blog/thesittingdisease/", destination: "/blog/2021/04/sittingdisease", permanent: true },
      { source: "/blog/zoomfatigue/", destination: "/blog/2021/04/zoomfatigue", permanent: true },
      { source: "/blog/360reviews/", destination: "/blog/2021/03/360reviews", permanent: true },
      { source: "/blog/thebuddysystem/", destination: "/blog/2021/03/buddysystem", permanent: true },
      { source: "/blog/fourattributes/", destination: "/blog/2021/03/fourattributes", permanent: true },
      { source: "/blog/deepwork/", destination: "/blog/2021/02/deepwork", permanent: true },
      { source: "/blog/coffeedates/", destination: "/blog/2021/02/coffeedates", permanent: true },
      { source: "/blog/dresscode/", destination: "/blog/2021/01/dresscode", permanent: true },
      { source: "/blog/meetings/", destination: "/blog/2021/01/meetings", permanent: true },
      { source: "/blog/remote-leadership/", destination: "/blog/2020/11/successremoteteam", permanent: true },
      { source: "/blog/onboarding-to-onboarded/", destination: "/blog/2020/10/firstweekremote", permanent: true },
    ];
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
