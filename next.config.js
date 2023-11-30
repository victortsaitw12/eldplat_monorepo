module.exports = {
  reactStrictMode: false,
  pageExtensions: ["tsx", "js"],
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};
