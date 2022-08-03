/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    uri :"mongodb+srv://noobtuber:noobtuber@cluster0.lynapyy.mongodb.net/?retryWrites=true&w=majority"
  }
}

module.exports = nextConfig
