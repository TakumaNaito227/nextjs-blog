import Layout from '@/components/layout'
import { getAllPostIds, getPostData } from '@/lib/post'
import utilStyle from '../../styles/utils.module.css'
import Head from 'next/head'

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        // getStaticPaths によって返されなかったパスは 404 を返す
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData,
        },
    }
}

export default function Post({ postData }) {
    return (
        <div>
            <Layout>
				<Head><title>{postData.title}</title></Head>
                <article>
                    <h1 className={utilStyle.headingX1}>{postData.title}</h1>
                    <div className={utilStyle.lightText}>{postData.date}</div>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: postData.blogContentHtml,
                        }}
                    />
                </article>
            </Layout>
        </div>
    )
}
