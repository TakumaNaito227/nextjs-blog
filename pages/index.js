import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/layout'
import utilStyle from '../styles/utils.module.css'

export default function Home() {
    return (
        <Layout>
            <section className={utilStyle.headingMd}>
                <p>私はスタートアップ企業でエンジニアをしています</p>
            </section>
            <section>
                <h2>Next.jsの学習用blogです</h2>
                <div>
                    <article>
                        <Link href="/">
                            <img src="images/thumbnail01.jpg"></img>
                        </Link>
                        <Link href="/">
                            <a>Next.jsとは？</a>
                        </Link>
                        <br />
                        <small>January 16, 2024</small>
                    </article>
                </div>
            </section>
        </Layout>
    )
}
