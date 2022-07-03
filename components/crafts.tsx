import React from "react";
import Image from "next/image";

import { WorkBackground, WorkContainer, WorkLeft, WorkLink, WorkRight } from "./craft";
import { Tile, TileBackground, TileContent, TileWrapper } from "./tile";

const Crafts = () => {
  const topThreeCraft = [
    {
      name: "PokeNotGo",
      type: "Web App",
      url: "https://pokenotgoapi.vercel.app/",
      img: "/asset/pokenotgo.png",
    },
    {
      name: "Old Portfolio Web",
      type: "Web",
      url: "https://agungfir98.netlify.app",
      img: "/asset/oldportfolio.png",
    },    
  ];

  return (
    <TileWrapper numOfPages={topThreeCraft.length}>
      <TileBackground>
        <WorkBackground />
      </TileBackground>
      <TileContent>
        {topThreeCraft.map((v, i) => {
          return (
            <Tile
              key={i}
              page={i}
              renderContent={({ progress }) => (
                <WorkContainer>
                  <WorkLeft progress={progress}>
                    I&lsquo;ve Build <br />
                    <WorkLink href={v.url}>
                      {v.name}
                    </WorkLink>
                  </WorkLeft>
                  <WorkRight progress={progress}>
                    <Image className="absolute mt-28" layout="responsive" src={v.img} alt={v.name} width={840} height={1620} />
                  </WorkRight>
                </WorkContainer>
              )}
            />
          );
        })}
        
      </TileContent>
    </TileWrapper>
  );
};

export default Crafts;
