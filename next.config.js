/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // https://nextjs.org/docs/advanced-features/i18n-routing#getting-started
  i18n: {
    locales: ['ko', 'en'],
    defaultLocale: 'ko',
  },
};

module.exports = nextConfig;
