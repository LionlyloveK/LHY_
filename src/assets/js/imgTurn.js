var imgTurn = function(img) {
    return 'https://cube.elemecdn.com/' + img.substring(0,1) + '/' + img.substring(1,3) + '/' + img.substring(3, img.length) + '.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed'
}
export  {
    imgTurn
}