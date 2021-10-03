const IS_DEV = process.env.NODE_ENV === 'development';

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: '/', destination: '/auth/login' },
      {
        source: '/api/:slug*',
        destination: IS_DEV
          ? 'http://localhost:5001/hermes-4224e/europe-west1/:slug*'
          : 'https://europe-west1-hermes-4224e.cloudfunctions.net/:slug*',
      },
    ];
  },
};
