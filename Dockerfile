# 這個檔案在 RUN 的時後是 dist 目錄中。

FROM keymetrics/pm2:16-alpine

# Bundle APP files
WORKDIR "/opt/app"
COPY ./package.json ./package.json
RUN npm install --production
COPY ./ .

#ENV
# DBHOST、DBNAME、DBUSER、DBPASSWORD、DBPORT
# 套用 deployment.yaml
# kubectl apply -f Deployment.yaml 

# Create PM2 Log Folder
RUN mkdir pm2; exit 0

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn

# Show current folder structure in logs
RUN ls -al

CMD [ "pm2-runtime", "start", "ecosystem.config.js", "--only=appwebview"]
# RUN apk add --no-cache bash
# docker exec -it xxx /bin/sh

# 要存到 google 需要標示存放位置。
# docker tag web3:beta-0.0.1 asia.gcr.io/ischool-compiler-800/web3:beta-0.0.1
# 推上去
# docker push asia.gcr.io/ischool-compiler-800/web3:beta-0.0.1
# 執行，並對應 port，外部：內部 port。
# docker run -d -p 3000:3000 web3:beta-0.0.1

# docker ps -a | grep -v CONTAINER | awk '{print $1}'

# 程式會抓「PORT」環境變數或是跑在「3000」port。
# docker build -t web3:beta-0.0.1 .
# docker run -d -p 3001:3000 asia.gcr.io/ischool-kube/web3:beta-0.0.1

# 進到指定的 k8s container。
# kubectl exec -it console-5f9f75c4f7-5ttxw -c console-container -- /bin/ash

# 從 container 呼叫 api server
# KUBE_TOKEN=$(cat /var/run/secrets/kubernetes.io/serviceaccount/token)
# curl -sSk -H "Authorization: Bearer $KUBE_TOKEN" https://$KUBERNETES_SERVICE_HOST:$KUBERNETES_PORT_443_TCP_PORT/api/v1/namespaces/default/pods/$HOSTNAME
