module.exports = function (eleventyConfig) {

  eleventyConfig.addCollection('all-links', (collection) =>{
    const l = collection.links
    return [];
  })

  return {
    dir: {
      input: "src",
      data: "../_data",          // default: "_data"
      output: "_site"
    },
  }
}