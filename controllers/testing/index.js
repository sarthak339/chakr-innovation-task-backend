const Service = require('../../services')

module.exports = {
  testing: async (req, res, next) => {
    try {
      let response = await Service.testing.testing(req)
      if (Object.keys(response).length > 0) {
        return res.status(200).json(response)
      }
      return res.status(204).json()
    } catch (error) {
      console.error(error)
      return res.status(500).json({ status: 'INTERNAL SERVER ERROR' })
    }
  },
}
