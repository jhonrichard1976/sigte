/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    trailingSlash: true,
    basePath: process.env.NODE_ENV === 'production' ? '' : '',
    publicRuntimeConfig: {
        contextPath: process.env.NODE_ENV === 'production' ? '' : '',
        uploadPath: process.env.NODE_ENV === 'production' ? '/upload.php' : '/api/upload'
    },
    output: 'standalone',
    env: {
        // Agrega tus variables de entorno aquí
        NEXTAUTH_URL: 'http://localhost:3000',
        NEXTAUTH_SECRET: 'my-secret-key',
        GITHUB_ID: 'my-github-app-id',
        GITHUB_SECRET: 'my-github-app-secret',
        FACEBOOK_ID: 'my-facebook-app-id',
        FACEBOOK_SECRET: 'my-facebook-app-secret',
        TWITTER_ID: 'my-twitter-app-id',
        TWITTER_SECRET: 'my-twitter-app-secret',
        GOOGLE_ID: 'my-google-app-id',
        GOOGLE_SECRET: 'my-google-app-secret',
        AUTH0_ID: '1',
        AUTH0_SECRET: 'test',
        NEXT_PUBLIC_BASE_PATH: 'http://10.6.26.152:3000'
    },
    images: {
        domains: ['10.6.26.152']
        //domains: ['10.6.22.135']
    }
};

module.exports = nextConfig;
