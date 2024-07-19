/** @type {import('next').NextConfig} */
const NextFederationPlugin = require("@module-federation/nextjs-mf");
const { FederatedTypesPlugin } = require("@module-federation/typescript");

const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: "http://localhost:3001"
  },
  async headers() {
    return [
        {
          source: "/api/:path*",
          headers: [
                { key: "Access-Control-Allow-Credentials", value: "true" },
                { key: "Access-Control-Allow-Origin", value: "*" },
                { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
            ]
        }
    ]
  },
  webpack: (config, _) => {
    federationConfig = {
      name: 'remote',
      filename: 'static/chunks/remoteEntry.js',
      exposes: {
        "./form": './components/ui/form.tsx',
        './table': './components/ui/table.tsx',
        './link': './components/ui/linkAsButton.tsx'
      },
      shared: {},
    }
    config.plugins.push(
      new NextFederationPlugin(federationConfig),
      new FederatedTypesPlugin({ federationConfig })
    );

    // Additional configuration for Babel
    config.module.rules.push({
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['next/babel', '@babel/preset-env'],
          plugins: [
            [
              '@babel/plugin-transform-runtime',
              {
                regenerator: true,
              },
            ],
          ],
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig
