import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { remark } from 'remark'
import { html } from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

// mdファイルのデータを取り出す
export function getPostsData() {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map((fileName) => {
        // idを取得するためにファイル名から".md"を削除する
        const id = fileName.replace(/\.md$/, '')

        // mdファイルを文字列として読み取る
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        const matterResult = matter(fileContents)
        // idとdateを返す
        return {
            id,
            ...matterResult.data,
        }
    })
    return allPostsData
}

// getStaticPathsで使用するpathを取得する（objectで返す)
export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            },
        }
    })
}

// idに基づくブログ投稿データをかえす
export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    // gray-matterを使用してメタデータ部分を解析する
    const matterResult = matter(fileContents)
    const blogContent = await remark().use(html).process(matterResult.content)
    const blogContentHtml = blogContent.toString()

    // idとdateを返す
    return {
        id,
        blogContentHtml,
        ...matterResult.data,
    }
}
