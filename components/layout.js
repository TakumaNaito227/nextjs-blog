import Head from "next/head";


const profileName = 'Takupelon'
export const siteTitle = 'Next.js BLOG'

function Layout ({ children }) {
	return (
		<div>
			<Head>
				<link rel="icon" href="images/favicon.ico" />
			</Head>
			<header>
				<img src="/images/profile.jpg"></img>
				<h1>{profileName}</h1>
			</header>
			<main>{children}</main>
		</div>
	);
}

export default Layout;