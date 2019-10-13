const Koa = require('koa');
// const Router = require('koa-router');
const serve = require('koa-static');
// var KoaBody = require('koa-body');
// var getData = require('./server/hdb').getData;

const app = new Koa();
// const router = new Router();
// koaBody = convert(KoaBody());

app.use(serve('./dist/my-dream-app'));


// router
//     .get('/getData', async (ctx, next) => {
//         ctx.body = await getData(1);
//     })


// app.use(router.routes());

app.listen(3000, () => {
    console.log('server started!')
})