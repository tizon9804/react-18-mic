module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'react-18-mic',
      externals: {
        react: 'React'
      }
    }
  }
}
