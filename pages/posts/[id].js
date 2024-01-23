import Layout from '@/components/layout'
import { getAllPostIds, getPostData } from '@/lib/post'

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
                {postData.title}
                <br />
                {postData.date}
                <br />
                {postData.blogContentHtml}
            </Layout>
        </div>
    )
}
