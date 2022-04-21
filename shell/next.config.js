const { SHOPPING_URL, MARKETING_URL } = process.env;


const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      {
        source: "/shopping",
        destination: `${SHOPPING_URL}/shopping`,
      },
      {
        source: "/shopping/:path*",
        destination: `${SHOPPING_URL}/shopping/:path*`,
      },
      {
        source: "/marketing",
        destination: `${MARKETING_URL}/marketing`,
      },
      {
        source: "/marketing/:path*",
        destination: `${MARKETING_URL}/marketing/:path*`,
      },
      {
        source: "/external",
        destination: `https://google.com`,
      },
      {
        source: "/external/:path*",
        destination: `https://google.com`,
      },
    ];
  },
}

module.exports = nextConfig
