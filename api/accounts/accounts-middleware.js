const Accounts = require('./accounts-model');

exports.checkAccountPayload = (req, res, next) => {
  const err = { status: 400 };
  const { name, budget } = req.body;
  
  if (name === undefined || budget === undefined) {
    err.message = 'name and budget are required';

    next(err);
  }
};

exports.checkAccountNameUnique = (req, res, next) => {
  //get account name; check that it doesnt match other account names, send an error message if account name matches something else

};

exports.checkAccountId = async (req, res, next) => {
  try {
    const account = await Accounts.getById(req.params.id);
    if(!account) {
      next({
        status: 404,
        message: 'account not found',
      });
    } else {
      req.account = account;
      next();
    }
  } catch (error) {
    next(error);
  }
}
