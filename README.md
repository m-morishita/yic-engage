# YIC Engage Project

山口県の若者の地元企業へのエンゲージメント向上事業プロジェクト

## プロジェクト構造

```
engage/
├── work/
│   ├── tsunabee/      # Next.jsアプリケーション（現在管理対象）
│   ├── mockup/        # モックアップ（将来管理予定）
│   └── ツール/         # 各種ツール（将来管理予定）
├── コンテキスト/       # プロジェクト資料
└── 提案素案整理/       # 提案関連ドキュメント
```

## 現在の管理対象

- `work/tsunabee/` - Next.jsで構築されたWebアプリケーション

## セットアップ

```bash
# リポジトリのクローン
git clone [repository-url]
cd engage

# tsunabeeアプリケーションの起動
cd work/tsunabee
npm install
npm run dev
```

## 今後の予定

将来的にモノレポ構造への移行を検討中。その際は以下のディレクトリも管理対象に追加予定：
- `work/mockup/`
- `work/ツール/`
- 共通パッケージ用の`packages/`ディレクトリ