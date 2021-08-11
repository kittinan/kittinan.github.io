import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { Menu, Breadcrumb } from 'antd'
import profilePic from '../public/images/kittinan.png'

import 'antd/dist/antd.css';

const name = 'Kittinan'
export const siteTitle = 'Kittinan'

export default function Layout({ children, home }) {
  return (
    <div>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="72x72" href="/android-icon-72x72.png"></link>

          <meta name="description" content="Kittinan" />

          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <header className={styles.header}>

          {home ? (
            <>
              <img
                priority
                src="/images/kittinan.png"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt={name}
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <img
                    priority
                    src="/images/kittinan.png"
                    className={utilStyles.borderCircle}
                    height={108}
                    width={108}
                    alt={name}
                  />
                </a>
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
