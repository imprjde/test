/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cdn.iconscout.com",
      "www.chitkara.edu.in",
      "source.unsplash.com",
      "images.unsplash.com",
      "lh3.googleusercontent.com",
      "res.cloudinary.com",
    ],
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(mp3)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/audio",
          outputPath: `${isServer ? "../" : ""}static/audio/`,
          name: "[name].[ext]",
          esModule: false,
        },
      },
    });

    return config;
  },
};

export default nextConfig;
