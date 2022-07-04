import React, { ReactNode } from "react";
import Link from "next/link";

export const LinkBtn: React.FC<{
  href: string;
  accentColor: string;
  children: ReactNode;
}> = ({ href, accentColor, children }) => {
  return (
    <Link href={href}>
      <p
        style={{ cursor: "pointer" }}
        className={` border border-${accentColor} w-fit p-3 rounded-lg text-${accentColor} mx-auto`}
      >
        {children}
      </p>
    </Link>
  );
};
