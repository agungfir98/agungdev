import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import path from "path";
import fsPromise from "fs/promises";
import matter from "gray-matter";
import { marked } from "marked";

import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import { getFileData } from "../../../lib/mdx";
import { getFormatedDate, getReadTime, toTitleCase } from "../../../utils";
import Head from "next/head";

export const Post: React.FC<{
  frontMatter: { title: string; createdAt: Date };
  slug: string;
  content: string;
}> = ({ frontMatter: { title, createdAt }, slug, content }) => {
  // const router = useRouter();
  // const route = router.pathname.match(/\/[a-z]*/)[0];
  const route = "/posts";

  return (
    <>
      <Head>
        <title>Agung Firmansyah | {title}</title>
        <meta name="keywords" content="Software Development Journey, " />
        <meta name="author" content="Agung Firmansyah" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="h-screen flex flex-col gap-y-16">
        <Navbar activeRoute={route} />
        <div className="h-fit px-6 md:px-0">
          <div className="md:w-6/12 mx-auto flex flex-col justify-center gap-y-10">
            <div id="headerPost">
              <h1 className="text-3xl md:text-5xl font-extrabold text-imperial">
                {toTitleCase(title)}
              </h1>
              <p className="pt-5">
                {getFormatedDate(createdAt)} &#183; {getReadTime(content)} min
                read
              </p>
            </div>
            <article
              className="text-xl leading-9"
              dangerouslySetInnerHTML={{
                __html: marked(content),
              }}
            ></article>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const fileData = await getFileData("data/blog");

  const paths = fileData.map((data) => ({
    params: {
      slug: data.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params: { slug },
}: any) => {
  const fileData = await fsPromise.readFile(
    path.join("data/blog", slug.replace(/-/g, "") + ".md"),
    "utf-8"
  );
  const { data: frontMatter, content } = matter(fileData);
  return {
    props: {
      slug,
      frontMatter,
      content,
    },
  };
};
