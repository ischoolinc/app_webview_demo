module.exports = {
  apps: [{
    name: "appwebview_dev",
    script: "./index.mjs",
    cwd: './',
    watch: ["./"], // cwd 在 ./dist 了，就只要 watch 目前目錄就行了。
    ignore_watch: ['./log'],
    node_args: [
      "--inspect"
    ],
    out_file: './log/out.log',
    error_file: './log/error.log',
    log_date_format: 'YYYY-MM-DD HH:mm Z'
  }, {
    name: "appwebview",
    script: "./index.mjs",
    cwd: './',
    watch: false,
    out_file: './log/out.log',
    error_file: './log/error.log',
    log_date_format: 'YYYY-MM-DD HH:mm Z'
  }]
}