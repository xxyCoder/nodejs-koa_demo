const Cart = require('../model/cart.model')
const { Op } = require('sequelize');
const Goods = require('../model/goods.model');

class CartService {
    async createOrUpdate(user_id,goods_id) {
        let res = await Cart.findOne({ 
            where: {
                [Op.and]: {
                    user_id,
                    goods_id
                }
            }
        });

        if(res) {   // 已经存在了
            await res.increment('number');
            return await res.reload();
        } else {
            return await Cart.create({
                user_id,
                goods_id
            });
        }
    }
    async findCarts(pageNum,pageSize) {
        const offset = (pageNum - 1) * pageSize;
        const { count,rows } = await Cart.findAndCountAll({
            attributes: ['id','number','selected'],
            offset: offset,
            limit: pageSize * 1,
            include: {
                model: Goods,
                as: 'goods_info',
                attributes: ['id','goods_name','goods_price','goods_img']
            }
        });

        return  {
            pageNum,
            pageSize,
            total: count,
            list: rows
        }
    }
}

module.exports = new CartService();