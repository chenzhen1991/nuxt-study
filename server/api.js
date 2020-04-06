const Koa = require('koa')

const bodyparser = require('koa-bodyparser')
const router = require('koa-router')({ prefix: '/api' })

const app = new Koa()

//设置cookie加密钥匙
app.keys = ['some secret', 'another secret']

const titles = [
    { id: 1, text: "喜欢春天的五彩缤纷与色彩斑斓", price: 2 },
    { id: 2, text: "喜欢冬天的银装素裹", price: 4 }
]

router.get('/titles', ctx => {
    ctx.body = {
        ok: 1,
        titles
    }
})

//文章详情页面
router.get('/title/detail', ctx => {
    ctx.body = {
        ok: 1,
        data: titles.find(title => title.id == ctx.query.id)
    }
})

//登录
router.post('/login', ctx => {
    const user = ctx.request.body
    console.log(user);

    if (user.username === 'zzz' && user.password === '123') {
        console.log(90)
        //将token存入cookie
        const token = 'success';
        ctx.cookies.set('token', token)
        ctx.body = { ok: 1, token }
    } else {
        ctx.body = { ok: 0 }
    }
})

app.use(bodyparser());   /*解析post数据并注册路由*/
app.use(router.routes());   /*启动路由*/
// app.use(router.allowedMethods());
/*
 * router.allowedMethods()作用： 这是官方文档的推荐用法,我们可以
 * 看到 router.allowedMethods()用在了路由匹配 router.routes()之后,所以在当所有
 * 路由中间件最后调用.此时根据 ctx.status 设置 response 响应头 
 *
 */
app.listen(8080, function () {
    console.log(8080);

});