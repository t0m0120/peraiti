module.exports = {
  plugins: [
    require("autoprefixer")({ browsers: "last 6 versions" }),
    require("postcss-import")(),
    require("postcss-simple-vars")(),
    require("postcss-nested")()
  ]
};
