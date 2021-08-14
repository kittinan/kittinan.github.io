import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { Button } from 'antd';
import { GithubOutlined, HeartFilled } from '@ant-design/icons';

import { Avatar, Divider } from 'antd';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section class="main-profile">

        <div><Avatar size={125} src="/images/kittinan.png" /></div>
        <p class="main-profile-text">
          I’m <strong>Kittinan</strong>.
        </p>

        <Divider />

        <div>

          <div>Follow me</div>

          <a href="https://github.com/kittinan" target="_blank">
            <GithubOutlined style={{ fontSize: '30px', color: '#000' }} />
          </a>


        </div>

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
