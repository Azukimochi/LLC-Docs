# LLC-Docs

[Light Limit Changer for MA](https://mochis-factory.booth.pm/items/4864776) の公式ドキュメントサイトです。
[Docusaurus 3](https://docusaurus.io/) で構築しています。

公開URL: https://azukimochi.github.io/LLC-Docs/

## 必要環境

- Node.js 20 以上（CIでは Node.js 22 を使用）

## セットアップ

```
npm install
```

## ローカル開発

```
npm start
```

ローカル開発サーバーが起動し、ブラウザが開きます。ほとんどの変更はサーバーを再起動せずに反映されます。

## ビルド

```
npm run build
```

`build` ディレクトリに静的ファイルが生成され、任意の静的ホスティングで配信できます。

## デプロイ

`main` ブランチへの push をトリガーに、GitHub Actions（[.github/workflows/deploy.yml](.github/workflows/deploy.yml)）が
自動でビルドし GitHub Pages へデプロイします。
