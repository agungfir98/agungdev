import React from "react";
import Image from "next/image";

import {
  WorkBackground,
  WorkContainer,
  WorkLeft,
  WorkLink,
  WorkRight,
} from "./craft";
import { Tile, TileBackground, TileContent, TileWrapper } from "./tile";

const Crafts = () => {
  return (
    <TileWrapper numOfPages={2}>
      <TileBackground>
        <WorkBackground />
      </TileBackground>
      <TileContent>
        <Tile
          page={0}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <p>I&lsquo;ve built&nbsp;</p>
                <WorkLink href="https://pokenotgoapi.vercel.app/">
                  Poke not go
                </WorkLink>{" "}
                Web App
              </WorkLeft>
              <WorkRight progress={progress}>
                <Image
                  className="absolute mt-28"
                  layout="responsive"
                  src={"/asset/pokenotgo.png"}
                  alt={"pokenotgo"}
                  width={335}
                  height={679}
                />
              </WorkRight>
            </WorkContainer>
          )}
        />
        <Tile
          page={1}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <p>I&lsquo;ve built&nbsp;</p>
                <WorkLink href="https://agungfir98.netlify.app">
                  My Old Portfolio
                </WorkLink>{" "}
                Web
              </WorkLeft>
              <WorkRight progress={progress}>
                <Image
                  className="absolute mt-28"
                  layout="responsive"
                  src={"/asset/oldportfolio.png"}
                  alt={"pokenotgo"}
                  width={840}
                  height={1620}
                />
              </WorkRight>
            </WorkContainer>
          )}
        />
      </TileContent>
    </TileWrapper>
  );
};

export default Crafts;
