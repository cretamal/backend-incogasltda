module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 3002),
  // url: 'https://backend.incogasltda.cl',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '15d33275587229fb020931322aae63f8'),
    },
  },
});
