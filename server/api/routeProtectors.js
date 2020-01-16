function isAdmin(req, res, next) {
  req.user.isAdmin ? next() : res.redirect('/')
}

function isLoggedInOrIsAdmin(req, res, next) {
  req.params.id === req.user.id || req.user.isAdmin ? next() : res.redirect('/')
}

function duplicateUsers(req, res, next) {
  if (User.findOne({where: {email: req.body.email}})) {
    res.redirect('/')
  } else {
    next()
  }
}

module.exports = {isAdmin, isLoggedInOrIsAdmin}