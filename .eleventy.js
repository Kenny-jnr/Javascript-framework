// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("random", function() {
    return `
    <div x-data="{ names: ['Kenny', 'Mike', 'Tom', 'Jerry', 'Nicole', 'Oumy', 'Jenessa', 'Ndiaga', 'Andre', 'Princess'], randomName: '' }">
      <button @click="randomName = names[Math.floor(Math.random() * names.length)]">Generate Name</button>
      <h1 x-text="randomName"></h1>
    </div>
    `
  })
};