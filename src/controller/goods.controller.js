const path = require('path');
const { fileUploadError, publishGoodsError } = require('../constant/err.types')
const  { createGoods,updateGoods } = require('../service/goods.service')

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
    async create(ctx) {
        try {
            const res = await createGoods(ctx.request.body);
            ctx.body = {
                code: 0,
                message: '发布商品成功',
                result: res
            };
        } catch(err) {
            console.error(err);
            ctx.body = publishGoodsError;
        }
    }
    async update(ctx) {
        try {
            const res = await updateGoods(ctx.params.id,ctx.request.body);
            if(res) {
                ctx.body = {
                    code: 0,
                    message: '修改成功',
                    result: ''
                }
            } else {
                throw new Error('无效商品信息');
            }
              
        } catch(err) {
            console.log(err);
            if(!err.message) {
                err.message = '修改失败';
            }
            ctx.body = err.message;
        }
    }
}

module.exports = new GoodsController();