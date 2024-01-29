import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const profileName = 'pelon'
export const siteTitle = 'Next.js BLOG'

function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="images/favicon.ico" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <img
                            src="/images/profile.jpg"
                            className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`}
                            alt="ProfileImage"
                        />
                        <h1 className={utilStyles.heading2Xl}>{profileName}</h1>
                    </>
                ) : (
                    <>
                        <img
                            src="/images/profile.jpg"
                            className={`${utilStyles.borderCircle} ${utilStyles.profileImgSize}`}
                            alt="ProfileImage"
                        />
                        <h1 className={utilStyles.heading2Xl}>{profileName}</h1>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div>
                    <Link href="/">←ホームへ戻る</Link>
                </div>
            )}
        </div>
    )
}

export default Layout
