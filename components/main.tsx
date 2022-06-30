import React, { useRef, useContext, useState, useCallback } from "react";
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
        className="md:w-6/12 mx-auto px-6 md:px-0 py-24 sticky top-0 -z-10"
        // style={{
        //   transform: `translateY(-${progress * 20}vh)`
        // }}
      >
        <h1 className="text-4xl font-bold leading-snug">
          Hi! 👋 <br /> I&apos;m Agung Firmansyah
        </h1>
        <p className="leading-relaxed pt-8 text-xl">
          Indonesian based Electrical Engineer, burning passion in Software
          Development, ReactJS Developer, UI/UX enthusiast, and Graphic Designer
          sometimes. I enjoy doing code, solving problem and designing.
          Currently learning everything.
        </p>
        <p>{progress}</p>
        <p>{scrollY}</p>
      </main>
    </>
  );
};
export default Main;
