const database = require('../../data/db-config.js');

const subj = 'accounts';

const getAll = () => {
  const results =
    database
      .select()
      .table(subj);
  return results;
};

const getById = id => {
  if (!id)
    throw new Error('something has gone wrong');
  const results =
    database
      .select()
      .table(subj)
      .where('id', id)
      .first();
  return results;
};

const create = async (reqBody) => {
  const [id] = await
    database(subj)
      .insert({
        name: reqBody.name,
        budget: reqBody.budget,
      });
  const results = await getById(id);
  return results;
};

const updateById = async (id, account) => {
  const updated = await database(subj).where('id', id).update(account);
  if (updated === 1) {
    return getById(id);
  } else {
    return 'invalid id';
  }
};

const deleteById = async (id) => {
    const deleted = await database(subj).where('id',id).del();
    if (deleted === 1 ) {
      return getById(id);
    } else {
      return 'invalid id';
    }
  };

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
