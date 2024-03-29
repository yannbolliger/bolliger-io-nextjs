const withMDX = require("@next/mdx")({
  options: {
    providerImportSource: "@mdx-js/react",
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  i18n: {
    locales: ["en", "de"],
    defaultLocale: "en",
  },
  rewrites: () => ({
    beforeFiles: [
      {
        source: "/:path*",
        has: [{ type: "host", value: "yann\\..*" }],
        destination: "/yann/:path*",
      },
    ],
  }),
}

module.exports = withMDX(nextConfig)
