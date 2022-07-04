import React from "react";
import Link from "next/link";
import Image from "next/image";

export const CodeCraftCard: React.FC<{
  link: string;
  title: string;
  shortDesc: string;
}> = ({ link, title, shortDesc }) => {
  return (
    <Link href={link}>
      <a className="border border-black rounded-lg" rel={`noreferrer`}>
        <div className="px-3 pt-4 py-3 flex flex-col gap-y-2" id="card">
          <h3 className="font-bold text-2xl">{title}</h3>
          <p>{shortDesc}</p>
        </div>
      </a>
    </Link>
  );
};

export const GraphicDesignCard: React.FC<{
  src: string;
  width: number;
  height: number;
}> = ({ src, width, height }) => {
  return (
    <div className="border-2 border-black rounded-lg">
      <Image
        className="rounded-lg"
        alt="image1"
        layout="responsive"
        src={src}
        width={width}
        height={height}
      />
    </div>
  );
};
