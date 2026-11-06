/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      { source: "/index-one-page", destination: "/", permanent: true },
      { source: "/intro", destination: "/", permanent: true },
      { source: "/blog_details", destination: "/blog", permanent: true },
      { source: "/portfolio_single", destination: "/portfolio", permanent: true },
      { source: "/service_single", destination: "/service", permanent: true },
    ];
  },
};

export default nextConfig;
