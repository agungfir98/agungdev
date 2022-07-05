import Link from "next/link";
import { getFormatedDate } from "../utils";

const MainPost = ({ data }: any) => {
  return (
    <>
      <div className="h-fit  bg-black py-10 px-6 md:px-0">
        <div className="md:w-6/12 mx-auto flex flex-col justify-center gap-y-10">
          <h1 className="text-white text-2xl font-semibold">Latest Posts</h1>
          <section className=" flex flex-col justify-between text-white gap-y-8">
            <ul>
              {!data.length && "No Post Yet"}
              {data.map((v: any, i: any) => (
                <li key={i}>
                  <Link href={v.slug}>
                    <a rel="noreferrer">
                      <article className="flex flex-col justify-between gap-y-2">
                        <h1 className="text-imperial text-2xl font-bold">
                          {v.title}
                        </h1>
                        <p className="font-extralight">
                          {getFormatedDate(v.createdAt)} &#183; {v.readTime} min
                          read
                        </p>
                        <p className="leading-9 text-base">{v.truncate} ...</p>
                      </article>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <Link href={"/posts"}>
            <p
              style={{ cursor: "pointer" }}
              className="border-2 border-white w-fit p-3 rounded-lg text-white mx-auto font-bold"
            >
              See more...
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MainPost;
