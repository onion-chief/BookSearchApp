# BookSearchApp
株式会社シグナイト様の技術課題です

# 開発環境
OS：MacOS Ventura13.2
ツール：DockerDesktop

# デプロイ方法

1.PC内にDockerDesktopをインストールしておきます。
2.Dockerの設定の「FileSharing」から「BookSearchApp」フォルダ全体をファイルシェアしておきます。
3.「src/app」配下にある「.env.example」をコピーして「.env」にリネームします。
4.ターミナルを開き、docker-compose.ymlがあるフォルダまで移動して下記コマンドを実行します。
`docker-compose up -d`
5.コマンドが実行し終わった後で、下記コマンドを実行し、phpコンテナ内に入ります。
`docker-compose exec php /bin/sh`
6.コンテナ内に入り、プロンプトが表示されたら、下記コマンドを実行して、PHPのライブラリをインストールします。
`composer install`
7.インストール終了後、下記コマンドでjavascriptのライブラリをインストールします。
`npm install`
8.インストール終了後、下記コマンドでlaravelのAPIキーを生成します。
`php artisan key:generate`
9.APIキー生成後、下記コマンドでlaravelのマイグレーションを実行します。
`php artisan migrate`
10.環境構築完了です。
11.下記にアクセスして、動作確認をお願い致します。
書籍検索アプリ：http://localhost:8000

DB：http://localhost:3306
ユーザ：root
パスワード：root


#アプリの動作
最上部にタブがあり、「書籍検索」タブで書籍検索を「検索履歴」タブで検索履歴を見れます。