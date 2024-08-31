/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dtshoodlzowznesvjxpi.supabase.co",
        port: "",
        pathname: "/storage/v1/object/sign/projects/**",
      },
      // "dtshoodlzowznesvjxpi.supabase.co",
    ], // Add your Supabase hostname here
  },
};

module.exports = nextConfig;
