module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '+3iYzkGgy6qwZKVVgkDiuQ=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'gzbEzM31i2+Iuwadif4shA=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
