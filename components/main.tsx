import React, {
  useRef,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import Link from "next/link";
import { scrollContext } from "../utils/scrollObserver";

const Main = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(scrollContext);

  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  return (
    <>
      <main
        ref={refContainer}
        className="md:w-6/12 mx-auto px-6 md:px-0 py-24"
        style={{
          transform: `translateY(-${progress * 30}vh)`,
        }}
      >
        <h1 className="text-4xl font-bold leading-snug">
          Hi! 👋 <br /> I&apos;m Agung Firmansyah
        </h1>
        <p className="leading-normal pt-8 text-xl">
          Indonesian based Electrical Engineer, burning passion in Software
          Development, ReactJS Developer, UI/UX enthusiast, and Graphic Designer
          sometimes. I enjoy doing code, solving problem and designing.
          Currently learning everything,{"  "}
          <Link href="/about">
            <a className="text-imperial font-semibold underline underline-offset-1">
              Read About Me &rsaquo;&rsaquo;.
            </a>
          </Link>
        </p>
      </main>
    </>
  );
};
export default Main;
