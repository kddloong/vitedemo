module.exports={
    alias: {
        '/@/': path.resolve(__dirname, './src'),
        '/@views/': path.resolve(__dirname, './src/views'),
        '/@components/': path.resolve(__dirname, './src/components'),
        '/@utils/': path.resolve(__dirname, './src/utils'),
    },
    proxy: {
        //参考https://github.com/vitejs/vite#dev-server-proxy
        "/api": {
            target:'http://xxxxxxx',
            changeOrigin: true,
            rewrite: path => path.replace(/^\/api/, '')
        }
    },

}