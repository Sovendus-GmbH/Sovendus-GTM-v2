import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable CORS for ngrok
  // eslint-disable-next-line @typescript-eslint/require-await
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
        ],
      },
    ];
  },

  // Make sure Next.js accepts the ngrok host
  // eslint-disable-next-line @typescript-eslint/require-await
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/:path*",
          has: [
            {
              type: "host",
              // Updated pattern to match modern ngrok URLs (both free and paid tiers)
              value: "(.*).ngrok.io|(.*).ngrok-free.app",
            },
          ],
          destination: "/:path*",
        },
      ],
    };
  },
};

export default nextConfig;
