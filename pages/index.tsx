import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Crafts from "../components/crafts";
import Footer from "../components/footer";
import MainPost from "../components/frontPost";
import Main from "../components/main";
import Navbar from "../components/navbar";
import { getFileData, getFrontPostData } from "../lib/mdx";

import ScrollObserver from "../utils/scrollObserver";

const Home: NextPage = ({ posts }: any) => {
  const router = useRouter();
  const route = router.pathname;
  return (
    <>
      <Head>
        <title>Agung Firmansyah</title>
      </Head>
      <Navbar activeRoute={route} />
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
  // const metaData = await getMetaData("data/blog");
  const posts = getFrontPostData(fileData).sort(
    (a: { createdAt: number }, b: { createdAt: number }) =>
      b.createdAt - a.createdAt
  );

  return {
    props: {
      posts,
    },
  };
};
