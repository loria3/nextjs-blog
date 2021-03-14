module.exports = {
  trailingSlash: true,
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/privacy": { page: "/privacy" },
      "/deeplink": { page: "/deeplink" },
      "/deeplink2": { page: "/deeplink2" },
    };
  },
};
