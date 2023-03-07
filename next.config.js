/** @type {import('next').NextConfig} */
const nextConfig = {
  cssModules: true,
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
            
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'Permissions-Policy',
              value: "camera=(); battery=(self); geolocation=(); microphone=('https://a-domain.com')",
            },
            {
              key: 'Referrer-Policy',
              value: 'origin-when-cross-origin',
            },
            {
              key: "Cache-Control",
              value : 'public, s-maxage=31536000, stale-while-revalidate=59'
            }
          ],
        },
      ];
  },   
}

const withCSS = require("@zeit/next-css")
module.exports = withCSS({
  reactStrictMode:true,
  cssLoaderOptions: {
    importLoaders: 2,
    localIdentName: "[local]___[hash:base64:5]",
  },

})

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({})

const withVideos = require('next-videos')
module.exports = withVideos()


module.exports = nextConfig
