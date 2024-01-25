---
title: 'プリレンダリングの2つの形態'
date: '2024-01-21'
thumbnail: '/images/thumbnail02.jpg'
---

Next.js では、プリレンダリングの 2 つの主要な形態があります：静的生成（Static Generation）とサーバーサイドレンダリング（Server-Side Rendering）です。この 2 つの形態の違いは、ページの HTML をいつ生成するかに関連しています。

-   静的生成（Static Generation）:
    -   ビルド時に HTML を生成します。ページは事前にビルドされ、事前に生成された HTML が静的なまま配信されます。
    -   生成された HTML は、各リクエストごとに再生成されるのではなく、ビルド時に一度だけ生成されます。
    -   静的生成は、ページが頻繁に変更されないスタティックなコンテンツに適しています。


```
// 例: getStaticPropsとgetStaticPathsを使用した静的生成
import { getStaticProps } from 'next'

export async function getStaticProps() {
    // ページのデータを取得するロジック
    return {
        props: {
            // ページに渡すデータ
        },
    }
}
```

-   サーバーサイドレンダリング（Server-Side Rendering）:
    -   リクエストごとにサーバーサイドで HTML を生成します。毎回リクエストがあるたびにサーバーでページが生成され、動的なコンテンツが含まれるページに適しています。
    -   サーバーサイドレンダリングは、リアルタイムのデータが必要な場合や、ページの内容が頻繁に変更される場合に有用です。


```
// 例: getServerSidePropsを使用したサーバーサイドレンダリング
import { getServerSideProps } from 'next';

export async function getServerSideProps() {
  // ページのデータを取得するロジック
	return {
		props: {
		// ページに渡すデータ
   		},
  	};
}
```


どちらのアプローチを選択するかは、プロジェクトの要件や性質に依存します。一部のページは静的生成、一部はサーバーサイドレンダリングといったように、プロジェクト全体で異なるプリレンダリング形態を混在させることも可能です。
