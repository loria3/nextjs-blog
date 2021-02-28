module.exports = {
  trailingSlash: false,
  images: {
    loader: "imgix",
  },
  exportPathMap: function () {
    return {
      "/": { page: "/" },
    };
  },
};
