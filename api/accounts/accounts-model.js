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
  await database(subj).where('id', id).update(account);
  return getById(id);

};

const deleteById = async (id) => {
  await database(subj).where('id', id).del();
  return getById(id);

};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
