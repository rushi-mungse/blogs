/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost"],
  },
  env: {
    APP_BASE_URL: "http://localhost:1337",
    AUTHORIZATION_KEY:
      "e494bfe57bb3b3a4953f7b6d2a4127338637f46ff42224d900882d04a789e592597d73487021fd14162df02617665a87daed5367487564451a3ddf01834964f663568587efab2a9c6cfb61b31406e701136a94c2013dfde3c90dd65159657f5577bb8554c78881525656244b18957a819c833a6f8416d223343baa766386cd8b",
  },
};

module.exports = nextConfig;
