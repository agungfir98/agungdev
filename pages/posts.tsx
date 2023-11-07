import { GetStaticProps } from 'next'
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Footer from '../components/footer'
import Navbar from '../components/navbar'
import { getFormatedDate } from '../utils'
import { getFileData, getFrontPostData } from '../lib/mdx'

interface PostObj {
  posts: [
    {
      readTime: number
      slug: string
      title: string
      truncate: string
      createdAt: Date
      updatedAt: Date
    }
  ]
}

const Posts: React.FC<PostObj> = ({ posts }) => {
  const router = useRouter()
  const route = router.pathname
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <div className="h-screen flex flex-col gap-y-16">
        <Navbar activeRoute={route} />
        <div className="h-fit px-6 md:px-0">
          <div className="md:w-6/12 mx-auto flex flex-col justify-center gap-y-12">
            <h1 className="text-3xl font-bold">Posts</h1>

            <section className=" flex flex-col justify-between gap-y-8">
              <ul className="flex flex-col justify-between gap-y-7">
                {posts.map((v, i) => (
                  <li key={i}>
                    <Link href={v.slug}>
                      <a rel="noreferrer">
                        <h1 className="text-imperial text-2xl font-bold">
                          {v.title}
                        </h1>
                        <p className="py-2">
                          {' '}
                          {getFormatedDate(v.createdAt)} &#183; {v.readTime} min
                          read
                        </p>
                        <p className="leading-7">{v.truncate}...</p>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
export default Posts

// get Static Props ==================

export const getStaticProps: GetStaticProps = async () => {
  const fileData = await getFileData('data/blog')
  const posts = getFrontPostData(fileData).sort(
    (a: { createdAt: number }, b: { createdAt: number }) =>
      b.createdAt - a.createdAt
  )

  return {
    props: {
      posts,
    },
  }
}
