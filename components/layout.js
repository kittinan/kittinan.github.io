import Head from 'next/head';

import utilStyles from '../styles/utils.module.css'
import styles from './layout.module.css'
import Link from 'next/link'
import { Menu, Breadcrumb, Avatar } from 'antd'
import profilePic from '../public/images/kittinan.png'
import { useRouter } from 'next/router';

import Breadcrumbs from 'nextjs-breadcrumbs'

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



const name = 'Kittinan'
export const siteTitle = 'Kittinan'

const Example = () => {
  return <Breadcrumbs useDefaultStyle rootLabel='Home' />;
};

export default function Layout({ children, home }) {



  return (
    <div>
      <Head>

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="72x72" href="/android-icon-72x72.png"></link>

        <meta name="description" content="Kittinan" />

        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />

        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;400;700&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/themes/prism-okaidia.min.css" integrity="sha512-mIs9kKbaw6JZFfSuo+MovjU+Ntggfoj8RwAmJbVXQ5mkAX5LlgETQEweFPI18humSPHymTb5iikEOKWF7I8ncQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />

      </Head>
      <body>
        <AntLayout className="layout">
          <Header className={styles.headerContainer}>


            <div className="logo" />

            {useIsClient && (<Menu mode="horizontal">

              <Menu.Item key="home">
                <Link href="/"><span className="nav-text">Home</span></Link>
              </Menu.Item>

              <Menu.Item key="blog">
                <Link href="/blog/"><span className="nav-text">Blog</span></Link>
              </Menu.Item>

            </Menu>
            )}

          </Header>
          <Content>

            {/*
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              {!home && (
                <Breadcrumb.Item>Blog</Breadcrumb.Item>
              )}

            </Breadcrumb>
             */}

            <div className="container">
              <main>{children}</main>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Kittinan ©2021</Footer>
        </AntLayout>
      </body>
    </div >
  )
}
