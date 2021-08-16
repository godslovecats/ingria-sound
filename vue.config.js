module.exports = {
  lintOnSave: false,
  css: {
    //sourceMap: true,
    extract: false,
    loaderOptions: {
      sass: {
        prependData: `
        @import "@/assets/styles/_variables.scss";
        @import "@/assets/styles/_mixins.scss";
        `,
      },
    },
  },
}
