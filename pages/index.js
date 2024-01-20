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
			<section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
                <h2>Next.jsの学習用blogです</h2>
                <div className={styles.grid}>
                    <article>
                        <Link href="/">
                            <img src="images/thumbnail01.jpg" className={styles.thumbnailImage}></img>
                        </Link>
                        <Link href="/">
                            <a className={utilStyle.boldText}>Next.jsとは？</a>
                        </Link>
                        <br />
                        <small className={utilStyle.lightText}>January 16, 2024</small>
                    </article>
					<article>
                        <Link href="/">
                            <img src="images/thumbnail01.jpg" className={styles.thumbnailImage}></img>
                        </Link>
                        <Link href="/">
                            <a className={utilStyle.boldText}>Next.jsとは？</a>
                        </Link>
                        <br />
                        <small className={utilStyle.lightText}>January 16, 2024</small>
                    </article>
					<article>
                        <Link href="/">
                            <img src="images/thumbnail01.jpg" className={styles.thumbnailImage}></img>
                        </Link>
                        <Link href="/">
                            <a className={utilStyle.boldText}>Next.jsとは？</a>
                        </Link>
                        <br />
                        <small className={utilStyle.lightText}>January 16, 2024</small>
                    </article>
					<article>
                        <Link href="/">
                            <img src="images/thumbnail01.jpg" className={styles.thumbnailImage}></img>
                        </Link>
                        <Link href="/">
                            <a className={utilStyle.boldText}>Next.jsとは？</a>
                        </Link>
                        <br />
                        <small className={utilStyle.lightText}>January 16, 2024</small>
                    </article>
                </div>
            </section>
        </Layout>
    )
}
