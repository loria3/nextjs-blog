import React, { useState } from "react";
import Link from "next/link";
import { BrowserView, MobileView } from "react-device-detect";

import useSWR from "swr";
import fetchHelper from "../utils/fetcher";
// components

import Navbar from "../components/Navbars/AuthNavbar.js";
import Footer from "../components/Footers/Footer.js";
const imageUrl = {
  url: "https://niche.ink",
};

export default function Categories() {
  const { data: cats } = useSWR("getCategories", fetchHelper);
  const [shuffled, setShuffeled] = useState(null);
  const [isShuffeled, setIsShuffeled] = useState(false);

  const shuffle = (array) => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    setIsShuffeled(true);
    setShuffeled(array);
  };
  if (!cats) return <div></div>;

  !isShuffeled ? shuffle(cats) : null;

  if (!isShuffeled || !cats) return <div></div>;

  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    הסיפור מתחיל בשיחת הכרות
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    כל התחלה הוא סוף של משהו אחר
                  </p>
                </div>
              </div>
            </div>
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
        </div>

        <section className="pt-20 pb-48 w-full">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-8">
              <div className="">
                <h2 className="text-4xl font-semibold">הכתבות שלנו</h2>

                <p className="text-lg bold leading-relaxed m-4 text-blueGray-500">
                   לחץ על כתבה
                </p>
              </div>
            </div>
            <ul>
              {shuffled.map((cat) => {
                return (
                  <>
                    <lh>
                      <div className="flex flex-wrap justify-center text-center mb-24">
                        <div className="">
                          <h2 className="text-4xl font-semibold underline">
                            {cat.categoryName}
                          </h2>
                        </div>
                      </div>
                    </lh>
                    <Articles item={cat.id} />
                  </>
                );
              })}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

const Articles = ({ item }) => {
  const { data: articles } = useSWR(
    ["getCategoryArticlesHome", item],
    (url, item) => fetchHelper(url, { item: item })
  );
  const [shuffled, setShuffeled] = useState(null);
  const [isShuffeled, setIsShuffeled] = useState(false);

  const shuffle = (array) => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    setIsShuffeled(true);
    setShuffeled(array);
  };

  if (!articles) return <div></div>;

  !isShuffeled ? shuffle(articles) : null;

  if (!isShuffeled && !articles) return <div></div>;

  return (
    <>
      <BrowserView>
        <div className="grid grid-rows-3 grid-cols-4 gap-4">
          {shuffled?.map((art) => {
            let imgUrl = `${imageUrl.url}${
              art.Article.thumbnail?.formats?.medium
                ? art.Article.thumbnail.formats.medium.url
                : art.Article.thumbnail.url
            }`;

            return (
              <Link
                href={{
                  pathname: "/article/",
                  query: { item: art.id },
                }}
              >
                <a key={art.Article.id} className="m-1" href="/article/">
                  <div className="flex flex-wrap justify-center text-center mb-16">
                    <div className="w-full lg:w-6/12 px-4">
                      {imgUrl ? (
                        <img
                          alt="..."
                          src={imgUrl}
                          className="shadow-lg min-h-150-px max-h-150-px max-w-150-px min-w-150-px"
                        />
                      ) : null}

                      <p className="text-lg bold leading-relaxed text-blueGray-500">
                        {art.Article.Header}
                      </p>
                      <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                        {art.authors?.WriterName}
                      </p>
                    </div>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </BrowserView>
      <MobileView>
        <div className="flex flex-wrap justify-center text-center my-6">
          <div className="justify-center text-center">
            {articles.map((art) => {
              let imgUrl = `${imageUrl.url}${
                art.Article.thumbnail?.formats?.medium
                  ? art.Article.thumbnail.formats.medium.url
                  : art.Article.thumbnail.url
              }`;

              return (
                <Link
                  href={{
                    pathname: "/article/",
                    query: { item: art.id },
                  }}
                >
                  <a key={art.Article.id} href="/article/">
                    <div className="my-6">
                      <div className="px-6">
                        {imgUrl ? (
                          <img
                            alt="..."
                            src={imgUrl}
                            className="shadow-lg max-w-150-px inline-block"
                          />
                        ) : null}
                      </div>
                      <div className="pt-6 text-center ">
                        <h5 className="text-xl font-bold">
                          {art.Article.Header}
                        </h5>
                        <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                          {`${art.authors?.WriterName}`}
                        </p>
                      </div>
                    </div>
                    <hr />
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </MobileView>
    </>
  );
};
