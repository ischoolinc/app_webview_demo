import Koa from 'koa';
import fetch from 'node-fetch';

const app = new Koa();

app.use(async ctx => {
  /** 從網址中取得 1Campus App 傳遞過來的「dsns、code」兩個參數。
   * 其中 code 由 1Campus App 即時產生，存活期只有數秒。
  */
  const { dsns, code } = ctx.query;

  // 理應不會缺少參數，但需要防止手動呼叫測試時缺少參數的狀況。
  if(!dsns || !code) { 
    ctx.body = `<h1>缺少參數: dsns、code</h1>`;
    return;
  }

  // 呼叫 1Campus 中央 API 取得身份資料，可進行身份授權判斷。
  const grsp = await fetch(`https://dsaproxy.1campus.net/${dsns}/identity/${code}`);
  const userInfo = await grsp.json();

  /**
   * 此範例只是將 API 回傳資料進行簡單解析後顯示在 Client 端
   * 一般狀況應該是進行身份授權判斷後，進入系統的主頁面。
   */
  ctx.set({ 'Content-Type': 'text/html; charset=utf-8' });
  ctx.body = `
  <h4>檢視原始碼請到這裡: <a href='https://github.com/ischoolinc/app_webview_demo'>https://github.com/ischoolinc/app_webview_demo</a></h4>
  <h1>帳號: ${userInfo.Account}</h1>
  <h1>角色: ${userInfo.RoleType}</h1>
  <h3>API 原始內容</h3>
  <pre>${JSON.stringify(userInfo, undefined, '\t')}</pre>
  `;
});

app.listen(3000);
console.log('1campus app webview demo server at port 3000 is running..');

