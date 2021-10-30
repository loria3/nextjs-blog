import React from "react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbars/AuthNavbar.js";
import Footer from "../components/Footers/Footer.js";
import useSWR from "swr";
import fetchHelper from "../utils/fetcher";
import Link from "next/link";

const imageUrl = {
  url: "https://niche.ink",
};
export default function Article() {
  const router = useRouter();

  const { item } = router.query;
  if (!item) return <div></div>;


 const {data: mainArt} = useSWR(['getOneArticles', item], (url, item) =>
    fetchHelper(url, {item: item}),
  );

  if (!mainArt) return <div></div>;

 const imgUrl = `${imageUrl.url}${
    mainArt.Article.thumbnail?.formats?.medium
      ? mainArt.Article.thumbnail.formats.medium.url
      : mainArt.Article.thumbnail.url
  }`;
console.log({mainArt})
  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                `url(${imgUrl})`,
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
               
                <div className="text-center mt-24">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    {mainArt.Article.Header}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    {` דקות קריאה :${mainArt.Article.minutes}`}
                  </div>
                
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                  <Link
                        href={{
                          pathname: "/authorBio/",
                          query: { id: mainArt.authors?.id },
                        }}
                      >
                        <a className="m-5 underline" href="/authorBio/">
                            {mainArt.authors?.WriterName}
                        </a>
                      </Link>
                 
                  </div>
                
                </div>

                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                       {mainArt.Article.Content}
                      </p>
                      <Link
                        href={{
                          pathname: "/articles/",
                        }}
                      >
                        <a
                          href="/articles"
                          className="font-normal text-lightBlue-500"
                        >
                          חזרה
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
