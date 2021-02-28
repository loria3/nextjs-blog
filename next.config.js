module.exports = {
  trailingSlash: true,
  images: {
    loader: "imgix",
  },
  exportPathMap: function () {
    return {
      "/": { page: "/" },
    };
  },
};
