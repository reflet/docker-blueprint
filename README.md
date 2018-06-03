# BluePrint
オフィシャルのnodeにgulpをインストール。

### 使い方 ###

下記のコマンドにてコンテナを起動します

```
$ docker pull reflet/docker-blueprint
$ docker run -d -v ./public:/blueprint/public -v ./docs:/blueprint/docs --name blueprint reflet/docker-blueprint
$ docker exec -it blueprint bash
```

### メンテナンス ###

下記のコマンドにてソースのダウンロードとイメージの構築を実行します。

```
$ git clone git@github.com:reflet/docker-blueprint.git .
$ docker build -t reflet/docker-blueprint:{タグ} .
$ vi docker-compose.yml
$ docker-compose up -d
$ git commit -m "{メッセージ}"
$ git push origin master
```

