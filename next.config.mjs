/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        // port: "",
        // Allow any image URL that starts with /my-bucket/
        // pathname: "/my-bucket/**",
        pathname: "/**",
        // search: "",
      },
    ],
  },
};

export default nextConfig;
