import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

import { Avatar } from 'antd';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section class="main-profile">

        <div><Avatar size={125} src="/images/kittinan.png" /></div>
        <p class="main-profile-text">
          Hello, I’m <strong>Kittinan</strong>.
        </p>

      </section>

    </Layout >
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
