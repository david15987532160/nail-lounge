/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  i18n: {
    /**
     * Provide the locales you want to support in your application
     */
    locales: ["en", "vi"],
    /**
     * This is the default locale you want to be used when visiting
     * a non-locale prefixed path.
     */
    defaultLocale: "en",
  },
}
