const router = require('express').Router();
const Accounts = require('./accounts-model');

router.get('/', async (req, res, next) => {
  try {
    const data = await Accounts.getAll();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const data = await Accounts.getById(req.params.id);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const data = await Accounts.create(req.body);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const data = await Accounts.updateById(req.params.id,req.body);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const data = await Accounts.deleteById(req.params.id);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.use((err, req, res, next) => {
  res.status(500).json({ message: err.message, stack: err.stack });
});

module.exports = router;