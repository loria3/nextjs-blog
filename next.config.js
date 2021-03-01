module.exports = {
  trailingSlash: false,
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/privacy": { page: "/privacy" },
      "/deeplink": { page: "/deeplink" },
    };
  },
};
