module.exports = {
  siteUrl: process.env.SITE_URL || "http://localhost:3000",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [
      `${process.env.SITE_URL || "http://localhost:3000"}/sitemap-0.xml`,
    ],
  },
};
