const get = (req, res) => res.send(`I get user ${req.params._id}`);

module.exports = {
  get,
  validate,
};
