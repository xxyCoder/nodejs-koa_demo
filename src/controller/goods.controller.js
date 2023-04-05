const path = require('path');
const { fileUploadError } = require('../constant/err.types')

class GoodsController {
    async upload(ctx,next) {
        const { file } = ctx.request.files;
        if(file) {
            ctx.body = {
                code: 0,
                message: '商品图片上传成功',
                result: {
                    goods_img: path.basename(file.filepath)
                }
            }
        } else {
            console.error('没有图片');
            ctx.body = fileUploadError;
        }
    }
}

module.exports = new GoodsController();