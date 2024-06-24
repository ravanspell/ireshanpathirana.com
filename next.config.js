/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        //TODO: temporarly provitioned
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
