module.exports = {
  // chainWebpack: config => {
  //   config.plugin('html')
  //     .tap(args => {
  //       args[0].title = "易临云";
  //       return args;
  //     })
  // }
  pages: {
    index: {
      entry: 'src/main.js',
      title: '易临云', //放要改的title名
    },
  },
}