import Koa from 'koa';
import fetch from 'node-fetch';

const app = new Koa();

app.use(async ctx => {
  const { dsns, code } = ctx.query;

  if(!dsns || !code) { 
    ctx.body = `<h1>缺少參數: dsns、code</h1>`;
    return;
  }

  // https://dsaproxy.1campus.net/dev.sh_d/identity/b2ddafd4-1825-474f-b390-8796bed4d790
  const grsp = await fetch(`https://dsaproxy.1campus.net/${dsns}/identity/${code}`);
  const userInfo = await grsp.json();

  ctx.set({ 'Content-Type': 'text/html; charset=utf-8' });
  ctx.body = `
  <h1>帳號: ${userInfo.Account}</h1>
  <h1>角色: ${userInfo.RoleType}</h1>
  <h3>原始內容</h3>
  <pre>${JSON.stringify(userInfo, undefined, '\t')}</pre>
  `;
});

app.listen(3000);
console.log('1Campus App web server at port 3000 is running..')
