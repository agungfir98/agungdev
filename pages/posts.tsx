import { GetStaticProps } from "next";
import React from "react";
import Link from "next/link";

import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { getFormatedDate } from "../utils";
import { getFileData, getFrontPostData, getMetaData } from "../lib/mdx";

interface PostObj {
  posts: [
    {
      readTime: number;
      slug: string;
      title: string;
      truncate: string;
      createdAt: Date;
      updatedAt: Date;
    }
  ];
}

const Posts: React.FC<PostObj> = ({ posts }) => {
  return (
    <div className="h-screen flex flex-col gap-y-16">
      <Navbar />
      <div className="h-fit px-6 md:px-0">
        <div className="md:w-6/12 mx-auto flex flex-col justify-center gap-y-10">
          <h1 className="text-3xl font-bold">Posts</h1>

          <section className=" flex flex-col justify-between gap-y-8">
            <ul className="flex flex-col justify-between gap-y-2">
              {posts.map((v, i) => (
                <li key={i}>
                  <Link href={v.slug}>
                    <a rel="noreferrer">
                      <h1 className="text-imperial text-2xl font-bold">
                        {v.title}
                      </h1>
                      <p className="">
                        {" "}
                        {getFormatedDate(v.createdAt)} &#183; {v.readTime} min
                        read
                      </p>
                      <p className="leading-9">{v.truncate}...</p>
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
  );
};
export default Posts;

// get Static Props ==================

export const getStaticProps: GetStaticProps = async () => {
  const fileData = await getFileData("data/blog");
  const metaData = await getMetaData("data/blog");
  const posts = getFrontPostData(fileData, metaData);

  return {
    props: {
      posts,
    },
  };
};