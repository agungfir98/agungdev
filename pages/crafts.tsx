import React from "react";
import { CodeCraftCard, GraphicDesignCard } from "../components/cards";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const projectData = [
  {
    title: "Poke Not Go",
    shortDesc:
      "A frontend mini project to experiment with Apollo Client GraphQL to create a web app about Pokemon.",
    link: "https://pokenotgoapi.vercel.app",
  },
  {
    title: "Old Portfolio Website",
    shortDesc: "A single page portfolio to brand myself as web developer (never finished it).",
    link: "https://agungfir98.netlify.app",
  },
  {
    title: "Price Checker",
    shortDesc: "A scripting project. experimenting with python's library named beautifoulSoup to scrape data from website and smtplib to send mail.",
    link: "https://github.com/agungfir98/TokopediaPriceChecker",
  },
];
const Posts = () => {
  return (
    <div className="min-h-screen flex flex-col gap-y-16">
      <Navbar />
      <div className="h-fit px-6 md:px-0">
        <div className="md:w-6/12 mx-auto flex flex-col gap-y-10">
          <h1 className="text-3xl font-bold">Crafts</h1>

          <div className=" gap-y-4 flex flex-col">
            <h2 className="text-2xl font-bold underline-offset-4 underline">Code Project</h2>
            <div className="grid grid-cols-2 gap-4">
              {projectData.map((data, i) => (
                <CodeCraftCard key={i} {...data} />
              ))}
            </div>
          </div>
          <div className="gap-y-4 flex flex-col">
            <h1 className="text-2xl font-bold underline-offset-4 underline">Graphic Design</h1>
            <div className="grid grid-cols-2 gap-4 font-semibold tracking-wide">
              <div className="relative w-full h-full group">
                <GraphicDesignCard
                  src={"/asset/designGraphic/cactus.png"}
                  width={3020}
                  height={3020}
                />
                <div className="h-full w-full rounded-lg absolute top-0 hidden group-hover:block bg-gradient-to-t from-black via-transparent to-transparent">
                  <p className="text-white absolute bottom-0 p-2 py-3">
                    Cactus Vector Design
                  </p>
                </div>
              </div>
              <div className="relative w-full h-full group">
                <GraphicDesignCard
                  src={"/asset/designGraphic/pencilgirl.png"}
                  width={3467}
                  height={3467}
                />
                <div className="h-full w-full rounded-lg absolute top-0 hidden group-hover:block bg-gradient-to-t from-black via-transparent to-transparent">
                  <p className="text-white absolute bottom-0 p-2 py-3">
                    Pencil Girl Coloring
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Posts;