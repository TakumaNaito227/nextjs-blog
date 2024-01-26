import Link from 'next/link'

export default function Custom404() {
    return (
        <Link href="/">
            <a><h1>ページが見つかりませんでした。</h1></a>
        </Link>
    )
}
