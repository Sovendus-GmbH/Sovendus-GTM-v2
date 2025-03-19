/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable CORS for ngrok
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'Access-Control-Allow-Origin',
              value: '*',
            },
          ],
        },
      ]
    },
    
    // Make sure Next.js accepts the ngrok host
    async rewrites() {
      return {
        beforeFiles: [
          {
            source: '/:path*',
            has: [
              {
                type: 'host',
                // Updated pattern to match modern ngrok URLs (both free and paid tiers)
                value: '(.*).ngrok.io|(.*)\.ngrok-free\.app',
              },
            ],
            destination: '/:path*',
          },
        ],
      }
    }
  }
  
  export default nextConfig