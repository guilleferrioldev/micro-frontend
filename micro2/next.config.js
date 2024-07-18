/** @type {import('next').NextConfig} */
const NextFederationPlugin = require("@module-federation/nextjs-mf");
const { FederatedTypesPlugin } = require("@module-federation/typescript");

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    federationConfig = {
      name: 'remote',
      filename: 'static/chunks/remoteEntry.js',
      exposes: {
        "./form": './components/ui/form.tsx'
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
