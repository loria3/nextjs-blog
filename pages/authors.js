import React from "react";
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

export default function Authors() {
  const { data: writers } = useSWR("getWriters", fetchHelper);

  if (!writers) return <div></div>;

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

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">המומחים שלנו</h2>

                <p className="text-lg bold leading-relaxed m-4 text-blueGray-500">
                   לחץ על מומחה כדי להכיר קצת יותר ולראות איך ניתן ליצור עמם קשר
                </p>
              </div>
            </div>
            <BrowserView>
              <div className="h-512 grid grid-rows-3 grid-flow-col gap-4">
                {writers.map((rit) => {
                  let imgUrlWriter = `${imageUrl.url}${
                    rit.WriterPic.formats.medium
                      ? rit.WriterPic.formats.medium.url
                      : rit.WriterPic.url
                  }`;

                  return (
                    <Link
                      href={{
                        pathname: "/authorBio/",
                        query: { id: rit.id },
                      }}
                    >
                      <a key={rit.id} className="m-5" href="/authorBio/">
                        <div>
                          <div className="px-6">
                            {imgUrlWriter !== "none" ? (
                              <img
                                alt="..."
                                src={imgUrlWriter}
                                className="shadow-lg rounded-full min-h-120-px max-h-120-px max-w-120-px min-w-120-px"
                              />
                            ) : null}
                            <div className="pt-6 text-center">
                              <h5 className="text-xl font-bold">
                                {rit.WriterName}
                              </h5>
                              <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                {rit.WriterShortDescription}
                              </p>
                            </div>
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
                  {writers.map((rit) => {
                    let imgUrlWriter = `${imageUrl.url}${
                      rit.WriterPic.formats.medium
                        ? rit.WriterPic.formats.medium.url
                        : rit.WriterPic.url
                    }`;

                    return (
                      <Link
                        href={{
                          pathname: "/authorBio/",
                          query: { id: rit.id },
                        }}
                      >
                        <a key={rit.id} className="m-5" href="/authorBio/">
                          <div className="my-6">
                            <div className="px-6">
                              {imgUrlWriter !== "none" ? (
                                <img
                                  alt="..."
                                  src={imgUrlWriter}
                                  className="shadow-lg rounded-full min-h-120-px max-h-120-px max-w-120-px min-w-120-px inline-block"
                                />
                              ) : null}
                              <div className="pt-6 text-center">
                                <h5 className="text-xl font-bold">
                                  {rit.WriterName}
                                </h5>
                                <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                  {rit.WriterShortDescription}
                                </p>
                              </div>
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
          </div>
        </section>
        {/* 
        <section className="pb-20 relative block bg-blueGray-800">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Build something
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                  Put the potentially record low maximum sea ice extent tihs
                  year down to low ice. According to the National Oceanic and
                  Atmospheric Administration, Ted, Scambos.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Excelent Services
                </h6>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Grow your market
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Launch time
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Want to work with us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </>
  );
}
