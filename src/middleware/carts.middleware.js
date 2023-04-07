const { invalidGoodsId } = require('../constant/err.types')

const validator = async(ctx,next) => {
    try {
        ctx.verifyParams({
            goods_id: 'number'
        })
        await next();
    } catch(err) {
        console.log(err);
        invalidGoodsId.result = err;
        ctx.body = invalidGoodsId;
    }

}


module.exports = {
    validator
}