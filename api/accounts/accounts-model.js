const database = require('../../data/db-config.js');

const subj = 'accounts';

const getAll = () => {
  // DO YOUR MAGIC
  // const max = 4;

  const results =
    database
      .select()
      .table(subj)
  // .limit(max);
  return results;
};

const getById = id => {
  // DO YOUR MAGIC
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

const updateById = (id, account) => {
  // DO YOUR MAGIC
  return Promise.resolve('PUT wired');

};

const deleteById = id => {
  // DO YOUR MAGIC
  return Promise.resolve('DELETE wired');

};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
