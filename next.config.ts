import type { NextConfig } from "next";
import nextMDX from "@next/mdx";

const nextConfig: NextConfig = {
  experimental: {
    mdxRs: true,
  },
  async redirects() {
    return [
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
