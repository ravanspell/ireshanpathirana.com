/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        //TODO: temporary provisioned
        unoptimized: true,
        // remotePatterns: [
        //     {
        //         protocol: 'https',
        //         hostname: 'via.placeholder.com',
        //     },
        // ],
    },
}

module.exports = nextConfig
