module.exports = (ctx) => {
  const { msg } = ctx.query;
  return `hello ${msg} test`;
};
