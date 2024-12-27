import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // images: {
  //   domains: ["surfcamp-strapi-images.s3.eu-central-1.amazonaws.com"], // Add your external hostname here
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "surfcamp-strapi-images.s3.eu-central-1.amazonaws.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
