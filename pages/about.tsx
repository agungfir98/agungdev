import React from "react";
import Link from "next/link";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { LinkBtn } from "../components/downloadBtn";

const Posts = () => {
  return (
    <div className="min-h-screen flex flex-col gap-y-16">
      <Navbar />
      <div className="h-fit px-6 md:px-0">
        <div className="md:w-6/12 mx-auto flex flex-col gap-y-10">
          <h1 className="text-3xl font-semibold">About</h1>
          <p className="leading-7 tracking-wide">
            Indonesian-based Electrical Engineer, burning passion in Software
            Development, ReactJS Developer, UI/UX enthusiast, and Graphic
            Designer sometimes. I enjoy doing code, solving problem and
            designing. Currently learning everything. <br />I started my serious
            software development not long ago, I already very familiar with
            computer, networking since I was a kid. for more story about that
            you can read it{" "}
            <Link href="/posts/post/my-life-into-software-development-journey">
              <a className="text-imperial font-semibold underline underline-offset-1">
                here
              </a>
            </Link>{" "}
            In my spare time I like to play game or listening to science stuff
            on YouTube especially when it come to astronomy.
          </p>
          <LinkBtn accentColor="black" href={"https://google.com"}>
            <p className="font-semibold">Download My CV</p>
          </LinkBtn>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Posts;
