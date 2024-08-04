# Vue 3 練習プロジェクト

このリポジトリは、個人的なVue 3学習と練習を目的として作成されました。主に「[Vue.js超入門 最初に手にしてよかった本](https://www.amazon.co.jp/Vue-js-%E8%B6%85%E5%85%A5%E9%96%80-%E6%9C%80%E5%88%9D%E3%81%AB%E6%89%8B%E3%81%AB%E3%81%97%E3%81%A6%E3%82%88%E3%81%8B%E3%81%A3%E3%81%9F%E6%9C%AC-%E3%81%A1%E3%82%87%E3%81%84%E3%81%BE%E3%82%8B/dp/B0CX5L35LM)」を参考に、Vue 3、TypeScript、Vite、およびVue Routerを使用したシンプルなSingle Page Application (SPA)の開発過程を含んでいます。

## プロジェクトの目的

- Vue 3の基本概念と使用方法の理解
- Composition APIの活用と理解
- TypeScriptとVue 3の統合の学習
- Viteを使用した開発環境の構築と理解
- Vue Routerを用いたSPAのナビゲーション実装の練習
- 外部APIとの連携方法の学習
- Vueのライフサイクルフックの理解と活用

## 「Vue.js超入門」から学んだ主なポイント

1. Vue 3の基本構文とテンプレート構文
2. コンポーネントの作成と利用
3. プロパティ（props）とイベントの扱い方
4. Composition APIを使用したロジックの整理
5. `ref`と`reactive`を使用したリアクティブなデータ管理
6. `computed`プロパティと`watch`の使用方法
7. Vue Routerを使用したSPAの構築
8. Viteを活用した高速な開発環境の構築

## 実装した機能

- JSONPlaceholderを使用したブログ記事一覧の表示
- 個別の記事詳細ページの実装
- Vue Routerを使用したページ間のナビゲーション
- Composition APIを活用したデータ取得ロジックの実装
- TypeScriptを使用した型安全なコード記述

## 使用技術

- Vue 3
- TypeScript
- Vite
- Vue Router
- Fetch API

## プロジェクトのセットアップ（ローカル環境での実行）

1. リポジトリをクローンします：

   ```
   git clone https://github.com/next-ishihara-yuta/vue-practice.git
   ```

2. プロジェクトディレクトリに移動します：

   ```
   cd vue-practice
   ```

3. 依存関係をインストールします：

   ```
   npm install
   ```

4. 開発サーバーを起動します：

   ```
   npm run dev
   ```

5. ブラウザで `http://localhost:5173` を開いてアプリケーションを確認します。

## プロジェクト構造

- `src/`: ソースコードのルートディレクトリ
  - `components/`: Vueコンポーネントファイル
  - `router/`: Vue Routerの設定
  - `views/`: ページコンポーネント
  - `App.vue`: メインアプリケーションコンポーネント
  - `main.ts`: アプリケーションのエントリーポイント
- `public/`: 静的アセット
- `index.html`: エントリーポイントのHTMLファイル
- `vite.config.ts`: Viteの設定ファイル
- `tsconfig.json`: TypeScriptの設定ファイル
- `package.json`: プロジェクトの依存関係とスクリプト

## 注意事項

このプロジェクトは学習目的で作成されたものであり、実際の製品やサービスとして使用することは意図されていません。コードの品質や最適化については、学習過程の一部として継続的に改善していく予定です。
