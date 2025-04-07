/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "hassanraza.net"
            },
            {
                hostname: "placehold.co"
            },
            {
                hostname: 'images.ctfassets.net'
            }
        ]
    }
};

export default nextConfig;
