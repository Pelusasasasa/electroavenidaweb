/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '**'
            }
        ]
    },
    env:{
        IMAGEN_URL: process.env.IMAGEN_URL,
    }
}

module.exports = nextConfig
