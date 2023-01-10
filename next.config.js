// next.config.js
const withTM = require("next-transpile-modules")([
  "babel-plugin-module-resolver",
  "eslint-plugin-import",
  "eslint-import-resolver-babel-module",
  "babel-preset-react-app",
]); // pass the modules you would like to see transpiled

module.exports = withTM({
  reactStrictMode: true,
  // Prefer loading of ES Modules over CommonJS
  experimental: { esmExternals: "loose" },
  images: {
    domains: [
      "munchiesprod.s3.ap-southeast-1.amazonaws.com",
      "munchiesprod.s3.amazonaws.com",
      "api.lorem.space",
      "i.ibb.co",
    ],
  },
  // pageExtensions: ["js", "jsx", "ts", "tsx"],
});
