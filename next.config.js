const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages({
  trailingSlash: false,
  handleImages: ["png", "svg"],
  exportPathMap: function () {
    return {
      "/": { page: "/" },
    };
  },
});
