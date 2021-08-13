import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import styles from './layout.module.css'
import Link from 'next/link'
import { Menu, Breadcrumb } from 'antd'
import profilePic from '../public/images/kittinan.png'
import { useRouter } from 'next/router';

import { Layout as AntLayout } from 'antd';

import { React, useState, useEffect } from "react";

//const useEnhancedEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

function useIsClient() {
  const [isClient, setIsClient] = React.useState(false);
  // The following effect will be ignored on server, 
  // but run on the browser to set the flag true
  useEffect(() => setIsClient(true), []);
  return isClient
}



const { Header, Footer, Sider, Content } = AntLayout;

import 'antd/dist/antd.css';

const name = 'Kittinan'
export const siteTitle = 'Kittinan'

export default function Layout({ children, home }) {



  return (
    <div>
      <AntLayout className="layout">
        <Header>

          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="72x72" href="/android-icon-72x72.png"></link>

          <meta name="description" content="Kittinan" />

          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />


          <div className="logo" />

          {useIsClient && (<Menu theme="dark" mode="horizontal">

            <Menu.Item key="0">
              <span className="nav-text">Home</span>
            </Menu.Item>

          </Menu>
          )}

        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            {!home && (
              <Breadcrumb.Item>Post</Breadcrumb.Item>
            )}

          </Breadcrumb>
          <div className="site-layout-content">

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

            <main>{children}</main>


            {!home && (
              <div className={styles.backToHome}>
                <Link href="/">
                  <a>← Back to home</a>
                </Link>
              </div>
            )}

          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </AntLayout>

    </div >
  )
}
