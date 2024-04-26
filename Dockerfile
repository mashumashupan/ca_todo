# 使用する Node.js のバージョンを指定
FROM node:18-alpine

# アプリケーションディレクトリを設定
WORKDIR /app

# 依存関係をインストール
RUN yarn install

# アプリケーションがリッスンするポートを指定
EXPOSE 3000

# アプリケーションを起動
CMD ["yarn", "run", "start:dev"]
