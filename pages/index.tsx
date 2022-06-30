import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Main from "../components/main";
import Crafts from "../components/mainCraft";

import ScrollObserver from "../utils/scrollObserver";

const Home: NextPage = () => {
  return (
    <>
      <ScrollObserver>
        <Main />
        <div className="h-fit  bg-black py-10 px-6 md:px-0">
          <div className="md:w-6/12 mx-auto flex flex-col justify-center gap-y-10">
            <h1 className="text-white text-2xl font-semibold">Posts</h1>
            <section className=" flex flex-col justify-between text-white gap-y-8">
              <article className="flex flex-col justify-between gap-y-2">
                <h1 className="text-imperial text-2xl font-bold">
                  I Tried Android Development For The First Time
                </h1>
                <p className="font-extralight">Jul21 &#183; 6 min read</p>
                <p className="leading-9 text-base">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam amet numquam, nam, error architecto ratione
                  quisquam labore voluptatibus recusandae velit sit ...
                </p>
              </article>
              <article className="flex flex-col justify-between gap-y-2">
                <h1 className="text-imperial text-2xl font-bold">
                  I Tried Android Development For The First Time
                </h1>
                <p className="font-extralight">Jul21 &#183; 6 min read</p>
                <p className="leading-9 text-base">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam amet numquam, nam, error architecto ratione
                  quisquam labore voluptatibus recusandae velit sit ...
                </p>
              </article>
              <article className="flex flex-col justify-between gap-y-2">
                <h1 className="text-imperial text-2xl font-bold">
                  I Tried Android Development For The First Time
                </h1>
                <p className="font-extralight">Jul21 &#183; 6 min read</p>
                <p className="leading-9 text-base">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam amet numquam, nam, error architecto ratione
                  quisquam labore voluptatibus recusandae velit sit ...
                </p>
              </article>
            </section>
            <Link href={"/posts"}>
              <p style={{cursor: "pointer"}} className=" border border-white w-fit p-3 rounded-lg text-white mx-auto">
                See more...
              </p>
            </Link>
          </div>
        </div>
        <Crafts />
      </ScrollObserver>
    </>
  );
};

export default Home;
