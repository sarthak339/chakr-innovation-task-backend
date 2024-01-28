const { func } = require('joi')

module.exports = {
  testing: async (req) => {
    try {
      let data = { message: 'ok' }
      return data
    } catch (error) {
      console.error(error)
      throw error
    }
  },
}
