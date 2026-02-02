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
  redirects: () => [
    {
      source: "/lets(-)?dance",
      destination:
        "https://kdrive.infomaniak.com/app/share/115560/f4d0696f-76b2-46f4-a8c9-4e1a92ed055b",
      permanent: false,
    },
  ],
}

module.exports = withMDX(nextConfig)
