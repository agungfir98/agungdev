import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Head from "next/head";

const Posts: React.FC = () => {
  const router = useRouter();
  const route = router.pathname;
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <div className="min-h-screen flex flex-col gap-y-16">
        <Navbar activeRoute={route} />
        <main className="h-fit px-6 md:px-0">
          <div className="md:w-6/12 mx-auto flex flex-col gap-y-10">
            <h1 className="text-3xl font-semibold">Agung Firmansyah</h1>
            <p className="leading-7 tracking-wide">
              Indonesian-based Electrical Engineer, burning passion in Software
              Development, ReactJS Developer, UI/UX enthusiast, and Graphic
              Designer sometimes. I enjoy doing code, solving problem and
              designing. Currently learning everything. <br />I started my
              serious software development not long ago, I already very familiar
              with computer, networking since I was a kid. for more story about
              that you can read it{" "}
              <Link href="/posts/post/my-journey-into-software-development">
                <a className="text-imperial font-semibold underline underline-offset-1">
                  here.
                </a>
              </Link>{" "}
              In my spare time I like to play game or listening to science stuff
              on YouTube especially when it come to astronomy.
            </p>
            <Link
              href={
                "https://drive.google.com/file/d/1xPxBpOgB0Gs6IuD9NBBmsFoeaELRxdsF/view?usp=sharing"
              }
            >
              <a target="_blank">
                <p className="border-2 border-black w-fit p-3 rounded-lg text-black mx-auto font-bold hover:bg-black hover:text-white/95">
                  Download My Resume
                </p>
              </a>
            </Link>
            <h2 className="text-3xl font-semibold">Social</h2>
            <ul className="ml-5 flex flex-col gap-y-2" style={{ listStyle: "disc" }}>
              <li>
                <p className="font-semibold">
                  Full Name: Agung Firmansyah
                </p>
              </li>
              <li>
                <p className="font-semibold">
                  Email:{" "}
                  <Link href="mailto:agungfir98@gmail.com">
                    <a
                      target="_blank"
                      className="text-imperial font-semibold underline underline-offset-1"
                    >
                      agungfir98@gmail.com
                    </a>
                  </Link>
                </p>
              </li>
              <li>
                <p className="font-semibold">
                  Github:{" "}
                  <Link href="https://github.com/agungfir98">
                    <a
                      target="_blank"
                      className="text-imperial font-semibold underline underline-offset-1"
                    >
                      @agungfir98
                    </a>
                  </Link>
                </p>
              </li>
              <li>
                <p className="font-semibold">
                  Twitter:{" "}
                  <Link href="https://twitter.com/agung_firm">
                    <a
                      target="_blank"
                      className="text-imperial font-semibold underline underline-offset-1"
                    >
                      @agung_firm
                    </a>
                  </Link>
                </p>
              </li>
              <li>
                <p className="font-semibold">
                  LinkedIn:{" "}
                  <Link href="https://linkedin.com/in/agung-firmansyah98">
                    <a
                      target="_blank"
                      className="text-imperial font-semibold underline underline-offset-1"
                    >
                      agung-firmansyah98
                    </a>
                  </Link>
                </p>
              </li>
            </ul>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Posts;
