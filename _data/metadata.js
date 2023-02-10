module.exports = {
  commit: {
    ref: process.env.COMMIT_REF || null,
    url: process.env.REPOSITORY_URL
  },
  title: "Hyperlink Cafe",
  description: "A curated list of websites that have a links page akin to the blogrolls of old.",
  url: "https://hyperlink.cafe",
}