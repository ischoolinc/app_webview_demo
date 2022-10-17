# App Webview Server Demo
1Campus App 擴充WebView功能介接 Server 端展示

本範例使用 node 展示 Server 端如何接收 1Campus App 傳遞的參數，並呼叫 API 取得身份相關資料。

App WebView 整體概念說明文件：https://docs.google.com/document/d/1jpa59S-987NNBzMK7gSLjQkZeWFP7E3_xONN57bGY4Q/edit#

Server 端線上展示網址：https://appwebview-service-4twhrljvua-de.a.run.app/?dsns=dev.sh_d&code=b2ddafd4-1825-474f-b390-8796bed4d790

## 開發環境前置需求
- [NodeJS] 16

[NodeJS]:https://nodejs.org/en/

## 檔案結構說明
- index.mjs 範例完整主程式。
- Dockerfile、ecosystem.config.js、package.json 非本範例重點，可略過。

## 本機開發測試流程
- 下載程式碼後，在目錄中執行「npm install」。
- 執行「npm start」啟動 node server。
- 打開「http://localhost:3000」並傳入必要參數。
  - 例：http://localhost:3000/?dsns=dev.sh_d&code=b2ddafd4-1825-474f-b390-8796bed4d790
