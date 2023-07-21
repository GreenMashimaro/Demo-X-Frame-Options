const Koa = require('koa');
const app = new Koa();
const fs = require('fs')

app.use(async ctx => {
  const fileContent = fs.readFileSync(`${__dirname}/index.html`, {
    encoding: 'utf-8'
  })
  ctx.set('X-Frame-Options', 'deny');
  ctx.body = fileContent;
});

const port = 3000

app.listen(port);
