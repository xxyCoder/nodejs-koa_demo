module.exports = {
    userFormatError: {
        code: '10001',
        message: '用户名或密码为空',
        result: ''
    },
    userAlreadyExists: {
        code: '10002',
        message:'用户已经存在',
        result:''
    },
    userRegisterError: {
        code: '10003',
        message: '用户注册错误',
        result: ''
    },
    userDoesNotExist: {
        code: '10004',
        message: '用户不存在',
        result: ''
    },
    userLoginFail: {
        code: '10005',
        message: '登录失败',
        result: ''
    },
    userPasswordInvalid: {
        code: '10006',
        message: '密码错误',
        result: ''
    },
    tokenExpiredError: {
        code: '10101',
        message: 'token过期',
        result: ''
    },
    invalidToken: {
        code: '10102',
        message: '无效的token',
        result: ''
    },
    hasNotAdminPermission: {
        code: '10103',
        message: '没有管理员权限',
        result:''
    },
    fileUploadError: {
        code: '10201',
        message: '商品图片上传失败',
        result: ''
    },
    goodsFormatError: {
        code: '10203',
        message: '参数不匹配',
        result: ''
    },
    publishGoodsError: {
        code: '10204',
        message: '发布商品失败',
        result: ''
    },
    removeGoodsError: {
        code: '10204',
        message: '下架商品失败',
        result: ''
    },
    invalidGoodsId: {
        code: '10206',
        message: '无效的商品id',
        result: ''
    },
    restoreGoodsError: {
        code: '10207',
        message: '商品上线失败',
        result: ''
    }
}