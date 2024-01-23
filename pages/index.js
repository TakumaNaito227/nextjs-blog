import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/layout'
import utilStyle from '../styles/utils.module.css'
import { getPostsData } from '../lib/post'

// SSGの場合
export async function getStaticProps() {
    const allPostsData = getPostsData()
    console.log(allPostsData)
    return {
        props: {
            allPostsData,
        },
    }
}

export default function Home({ allPostsData }) {
    return (
        <Layout>
            <section className={utilStyle.headingMd}>
                <p>私はスタートアップ企業でエンジニアをしています</p>
            </section>
            <section
                className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}
            >
                <h2>Next.jsの学習用blogです</h2>
                <div className={styles.grid}>
                    {allPostsData.map(({ id, date, title, thumbnail }) => (
                        <article key={id}>
                            <Link href={`/posts/${id}`}>
                                <img
                                    src={`${thumbnail}`}
                                    className={styles.thumbnailImage}
                                ></img>
                            </Link>
                            <Link href={`/posts/${id}`}>
                                <a className={utilStyle.boldText}>{title}</a>
                            </Link>
                            <br />
                            <small className={utilStyle.lightText}>
                                {date}
                            </small>
                        </article>
                    ))}
                </div>
            </section>
        </Layout>
    )
}
