---
name: lolipop-cli
description: LOLIPOP! Deploy Now の lolipop CLI でアプリをデプロイする手順。CLI の準備 → login → project 作成 → deploy までを通す。「lolipop でデプロイ」「deploy now にデプロイ」「lolipop CLI を使いたい」等で使う。
---

# lolipop CLI でデプロイする

LOLIPOP! Deploy Now のコマンドラインツール `lolipop` で、ローカルのアプリを公開する手順。

## 1. CLI を入れる

```bash
npm install -g lolipop
```

導入できたら稼働確認する:

```bash
lolipop health   # 稼働していれば OK
```

## 2. デプロイする

アプリのディレクトリで `lolipop deploy` を実行するだけで、ログイン → project 作成 → デプロイまで通る。

```bash
cd <アプリのディレクトリ>
lolipop deploy
```

- 未ログインなら自動でブラウザが開いて認証する (`lolipop login` で先にログインしてもよい)。
- 対象 project が未指定なら、一覧から選ぶか「新しい project を作成」を選んでその場で作れる。
- 完了すると deploy の詳細を確認できる URL が表示される。
- `--dir` 省略時はカレントディレクトリが対象。
- git 管理下なら `.gitignore` を尊重し、`.env` などの秘密情報は同梱しない。git 管理外でも `.git` / `node_modules` は除外する。

非対話 (CI / スクリプト) や初回からまとめて指定したいときは、project を新規作成しながらデプロイできる:

```bash
lolipop deploy --name <name> --framework <framework>
```

framework の一覧は `lolipop frameworks list` で確認する (静的サイトは static)。新規作成時はビルド設定 (BuildConfig) も framework の既定値で一緒に作られ、変えたいときだけ次を足す:

- `--install <cmd>` 依存インストールコマンド
- `--build <cmd>` ビルドコマンド
- `--output <dir>` ビルド成果物の出力ディレクトリ
- `--root <dir>` ビルドのルート (monorepo のサブディレクトリを指すとき)

### 既存 project にデプロイ

作成済みの project には `--project` で指定するか、ディレクトリを link しておく:

```bash
lolipop project link <name>       # cwd を project に紐付け (以降 --project 省略で解決)
lolipop deploy                    # link 済みなら指定不要

lolipop deploy --project <name>   # link せず直接指定
```

## project を個別に用意する

デプロイ前に project だけ先に作ることもできる:

```bash
lolipop frameworks list
lolipop project create --name <name> --framework <framework>
```

`project create` でデフォルトドメインとビルド設定もまとめて作られる。作成済みの設定は後から `lolipop build-config update` で変更できる。

## よく使うコマンド

| コマンド | 用途 |
| --- | --- |
| `lolipop project list` | 自分の project 一覧 |
| `lolipop project show` | project の詳細 (ドメイン / ビルド設定 / 最新 deploy) |
| `lolipop project status` | 現在対象になっている project の確認 |
| `lolipop project logs --latest` | 直近 deploy のビルドログ |
| `lolipop build-config update` | ビルド設定の変更 |

`--json` を付けると機械処理しやすい JSON 1 行で返る。

## アプリ側の要件

- **Next.js は `next.config` で `output: 'standalone'` が必須**。これが無いとビルド成果物が公開できない。
- 静的サイトはビルド成果物の出力ディレクトリ (`--output`) を framework / ビルド設定に合わせる。

## 困ったとき

- `lolipop health` が OK にならない → 一時的に応答していない可能性。少し待って再実行する。
- 認証エラー → `lolipop login` でログインし直す。
- deploy がしばらく QUEUED のまま → ビルドの順番待ち。表示された URL から進行を確認できる。
