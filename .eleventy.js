module.exports = function (eleventyConfig) {

  // TODO: Parse descriptions to add tags via hashtag usage

  return {
    dir: {
      input: "src",
      data: "../_data",
      output: "_site"
    },
  }
}