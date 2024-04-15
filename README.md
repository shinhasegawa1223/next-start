## 作成

```
npx create-next-app@14
```

Next js はルーティング機能が標準でサポート<br>
pages router<br>
★app router：今後主流<br>

## app router とは？

page.tsx にすること<br>

    /app
        -page.tsx("/")

        /task
            -page.tsx("/task")

            -/edit
                --page.tsx("/task/edit")

page.tsx の export は <br>
export default を使用すること<br>

### 動的ルーティング

    /app
        -page.tsx("/")

        /task
            page.tsx("/task")

            /edit
                page.tsx("/task/edit")
                /[id]
                    page.tsx("/task/edit/※任意の値")

## layout

共通レイアウト機能<br>
layout.tsx が定義されたディレクトリ配下すべて<br>
/app 直下に配置した場合全ページ共通のレイアウト適応<br>
ネストすることも可能

    /app
        page.tsx("/")
        layout.tsx

        /task
            page.tsx("/task")
            layout.tsx

            /edit
                page.tsx("/task/edit")
                /[id]
                    page.tsx("/task/edit/※任意の値")

よって /task 配下にある layout.tsx は以下全てで適応される/edit を含んでいる

### ※：データの fetch なども行える

## ルートテーブルについて

    グルーピングを行いたい
    ルーティングには影響せたくない


    /app
        /main
            pag.tsx("/main")
            layout.tsx

            /task
                page.tsx("/main/task")
                layout.tsx

                /edit
                    page.tsx("/main/task/edit")
                    /[id]
                        page.tsx("/main/task/edit/※任意の値")
        /admin

## 記載方法

(name)で作成するだけでよい<br>
グループごとに共通レイアウトを定義することもできる

    /app
        /(main)
            pag.tsx("/")
            layout.tsx

            /task
                page.tsx("/task")
                layout.tsx

                /edit
                    page.tsx("/task/edit")
                    /[id]
                        page.tsx("/task/edit/※任意の値")
        /(admin)

## エラーコンポーネント（追加する場合

    /app
    error.tsx
    not-found.tsx

error.tsx には"use client";を 1 行目に追加すること

```jsx
//  throw new Error();
"use client";
const ErrorPage = () => {
  return <div>ErrorPage</div>;
};

export default ErrorPage;
```

最も近い error.tsx が表示される<br>
ネストできる<br>

## コンポーネント

React:クライアントでレンダリング<br>
★NEXT:サーバーサイドレンダリング<br>
ver13〜<br>
デフォルト<br>

メリット

- パフォーマンス向上
- バンドルサイズ小さくできる
- 機密データをサーバー側で処理する
- SEO 強い

デメリット (クライアントコンポーネントでしか使えない)

- useState, useEffect などの Hooks
- onClick, onChange などのユーザーイベント
- ブラウザ API も使用できない

初期ベージのレンダリングが遅いときある<br>

- 基本的にはサーバー側
- 以下のケースでクライアントコンポーネント
  - useState, useEffect などの Hooks
  - onClick, onChange などのユーザーイベント
  - ブラウザ API

### 使用ケース

- Sever
  - Navbar
  - Sidebar
  - MainView
- Client
  - SearchButton
  - Button

## SC CC

基本的にログがブラウザで出るか、ターミナルで<br>

dev だと client は両方に出る　 2 回出るときもある<br>
server 側では state は使用できない<br>
onClick なんかもそう

## ルートハンドラー

api ディレクトリを作成すると良い<br>
決まり事 route.ts にすること
のように記載

異なる場合複数のハンドラ記載可能 restful

```ts
//http methodと対応
export const GET = async () => {};
export const PUT = async () => {};
export const POST = async () => {};
export const DELETE = async () => {};

// データが頻繁に表示される場合は....
// request事に動的に実施されるようにする
// ルートセグメントコンフィグ
export const dynamic = "force-dynamic";
```

## ローディングコンポーネント

loading.tsx<br>
load の際に呼ばれる

## server actions

form tag の action 属性にコンポーネントを呼び出す

```ts
<form action={createTask}>...</form>
```

可読性向上の為に分けて定義する必要することが<br>
別ファイルのみに定義されたものを呼び出す仕様となっている<br>

クライアント、サーバーどちらからも呼び出せるようにしておく<br>
任意の名前で OK<br>
'use server'という追記は必要<br>

## aaaa

## aaaa

## aaaa

## aaaa

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
