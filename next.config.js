module.exports = {
  trailingSlash: true,
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/privacy": { page: "/privacy" },
      "/deeplink": { page: "/deeplink" },
      "/authors": { page: "/authors" },
      "/products": { page: "/products" },
      "/profile": { page: "/profile" },
      "/authorBio": { page: "/authorBio" },
    };
  },
};
