import type { NextPage } from "next";
import Head from "next/head";
import Crafts from "../components/crafts";
import Footer from "../components/footer";
import MainPost from "../components/frontPost";

import Main from "../components/main";
import Navbar from "../components/navbar";
import { getFileData, getFrontPostData, getMetaData } from "../lib/mdx";

import ScrollObserver from "../utils/scrollObserver";

const Home: NextPage = ({ posts }: any) => {
  return (
    <>
      <Navbar />
      <ScrollObserver>
        <Main />
        <MainPost data={posts} />
        <Crafts />
      </ScrollObserver>
      <Footer />
    </>
  );
};

export default Home;
export const getStaticProps = async () => {
  const fileData = await getFileData("data/blog");
  const metaData = await getMetaData("data/blog");
  const posts = await getFrontPostData(fileData, metaData);

  return {
    props: {
      posts,
    },
  };
};
