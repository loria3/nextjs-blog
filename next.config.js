module.exports = {
  trailingSlash: true,
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/privacy": { page: "/privacy" },
      "/deeplink": { page: "/deeplink" },
    };
  },
};
