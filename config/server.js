module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['ca838791daa284dff1f75b0535dd5e6b610ce0616bae3b48ecd30c5aa1739ea7', 'y067bf506e9ea50bd4adbc03a4fad265f3b62f13a55bd372009f99da5eca29bd4']),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});     
