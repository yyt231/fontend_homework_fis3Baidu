

// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
    spriter: fis.plugin('csssprites'),
    postpackager: fis.plugin('loader')
});

fis.match('*.{css,sass}', {
    packTo: 'aio.css',
    // fis-optimizer-clean-css 插件进行压缩，已内置
    optimizer: fis.plugin('clean-css')

});

fis.match('*.js', {
    packTo: 'aio.js',
    // fis-optimizer-uglify-js 插件进行压缩，已内置
    optimizer: fis.plugin('uglify-js')

});
//压缩HTML
fis.match('*.html',{
    optimizer:fis.plugin('htmlmin')
})



fis.match('*.{png,jpg}', {
    // fis-optimizer-png-compressor 插件进行压缩，已内置
    optimizer: fis.plugin('png-compressor')
});

// 加 md5,定位到static下
fis.match('*.{js,jpg,css,png}', {
    useHash: true,
    release:'static/$0'
});