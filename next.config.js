/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.licdn.com',
                port: '',
                // pathname: '/account123/**',
            },
        ],
    },
}

module.exports = nextConfig
