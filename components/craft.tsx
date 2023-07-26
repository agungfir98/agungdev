import React, { ReactNode } from "react";
import Link from "next/link";

export const WorkContainer: React.FC<any> = ({ children }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
    {children}
  </div>
);

export const WorkBackground: React.FC = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen top-0 sticky">
    <div className="bg-black h-[33vh] lg:h-auto"></div>
    <div className="bg-white h-[67vh] lg:min-h-screen"></div>
  </div>
);

export const WorkLeft: React.FC<{
  progress: number;
  children: React.ReactNode;
}> = ({ progress, children }) => {
  let translateY = Math.max(0, 50 - progress * 3 * 50);
  if (progress > 0.8) {
    translateY = Math.max(-50, -(progress - 0.8) * 2 * 50);
  }
  return (
    <div
      className="flex flex-col items-center justify-center text-3xl pt-28 lg:pt-16 lg:text-3xl h-[30vh] lg:h-auto"
      style={{
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div className="leading-10">{children}</div>
    </div>
  );
};

export const WorkRight: React.FC<{ children: ReactNode; progress: number }> = ({
  children,
  progress,
}) => {
  let translateY = Math.max(-50, -(progress - 0.5) * 50);
  return (
    <div
      className="flex felx-1 lg:items-center justify-center h-screen"
      style={{
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div className="w-full max-w-xs pt-10 md:pt-24 px10 md:px-0">
        {children}
      </div>
    </div>
  );
};

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export const WorkLink: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <Link href={href}>
      <a
        target="_blank"
        rel="noreferrer"
        className="underline underline-offset-2 decoration-1"
      >
        {children}
      </a>
    </Link>
  );
};
