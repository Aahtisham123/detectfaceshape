import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  images: { unoptimized: true },
  async redirects() {
    return [
      // One canonical host: non-www.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.detectfaceshape.cc" }],
        destination: "https://detectfaceshape.cc/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    // Keep Vercel preview deployments (and any non-production build) out of search results.
    const isProduction = !process.env.VERCEL_ENV || process.env.VERCEL_ENV === "production";
    return [
      ...(isProduction ? [] : [{ source: "/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }]),
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(self), microphone=(), geolocation=()" },
        ],
      },
      {
        source: "/(mediapipe|models)/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        // The quiz widget is meant to be embedded on other sites.
        source: "/embed/:path*",
        headers: [{ key: "Content-Security-Policy", value: "frame-ancestors *" }],
      },
    ];
  },
};

export default nextConfig;
