module.exports = (ctx) => {
  const { msg } = ctx.query;
  return `let me see the ci ${msg}`;
};
