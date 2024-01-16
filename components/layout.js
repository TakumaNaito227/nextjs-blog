import Head from "next/head";
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'


const profileName = 'Tapelon'
export const siteTitle = 'Next.js BLOG'

function Layout ({ children }) {
	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="images/favicon.ico" />
			</Head>
			<header className={styles.header}>
			<img src="/images/profile.jpg" className={`${utilStyles.borderCircle} ${utilStyles.profileImgSize}`} alt="ProfileImage" />
				<h1 className={utilStyles.heading2Xl}>{profileName}</h1>
			</header>
			<main>{children}</main>
		</div>
	);
}

export default Layout;