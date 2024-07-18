/** @type {import('next').NextConfig} */
const NextFederationPlugin = require("@module-federation/nextjs-mf");
const { FederatedTypesPlugin } = require("@module-federation/typescript");

const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    remote: `remote@http://localhost:3001/_next/static/${location}/remoteEntry.js`
  };
};

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    federationConfig = {
      name: 'host',
      filename: 'static/chunks/remoteEntry.js',
      remotes: remotes(options.isServer),
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
