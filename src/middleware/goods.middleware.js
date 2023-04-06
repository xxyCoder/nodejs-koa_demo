const { goodsFormatError } = require('../constant/err.types')

const validator = async (cxt,next) => {
    try {
        cxt.verifyParams({
            goods_name: {
                type: 'string',
                required: true
            },
            good_price: {
                type: 'number',
                required: true
            },
            goods_num: {
                type: 'number',
                required: true
            },
            goods_img: {
                type: 'string',
                required: true
            }
        });
    } catch(err) {
        goodsFormatError.result = err;
        cxt.body = goodsFormatError;
    }
    await next();
};

module.exports = {
    validator
};