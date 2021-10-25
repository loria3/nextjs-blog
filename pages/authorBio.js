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
export default function AuthorBio() {
  const router = useRouter();

  const { id } = router.query;
  if (!id) return <div></div>;

  const { data: writer } = useSWR(["getWriter", id], (url, writer) =>
    fetchHelper(url, { id: writer })
  );

  if (!writer) return <div></div>;

  let imgUrlWriter = `${imageUrl.url}${
    writer.WriterPic.formats.medium
      ? writer.WriterPic.formats.medium.url
      : writer.WriterPic.url
  }`;

  //   WriterEmail: "aricha.noam@gmail.com"
  // WriterFacebook: "https://www.facebook.com/noam.aricha"
  // WriterLinkedIn: "https://www.linkedin.com/in/noamaricha/"
  // WriterLongDescription: "שלום לכםן:)\n\nאני נועם אריכא, בן, אח, בן זוג, חבר ואב לשניים. \nמדריך ומלווה צעירים ביצירת חיים שמחים, מרגשים ומשמעותיים.\n\nהחיים הם מסע של התפתחות, למידה ותרגול ביצירת בהירות ומיקוד בהגשמת חיים שאנחנו מייחלים לעצמנו. \n\nהתכנים שמושכים אותי הם  מעולמות המיינדפולנס, הפסיכולוגיה החיובית והתעסוקתית, תיאוריות על אושר, מנהיגות והעצמה, לאורך השנים צברתי ניסיון רב בלווי צעירים בשלבי החיים השונים, הכוונה והכשרות מקצועיות, תפקידי ניהול והובלת קבוצות ותהליכים במסגרות מגוונות, תארים אקדמיים בניהול והתמחות במנהיגות חברתית, הכשרות, הדרכה והעצמה.\n\nאני מאמין שבכל אחד מאתנו קיים פוטנציאל ייחודי, ושעלינו להביאו לידי ביטוי כדי לחיות חיים מרגשים ומספקים. \nאני גם מאמין שככל שיהיו יותר אנשים שמגשימים את עצמם בחיים כך יהפוך העולם שלנו למקום טוב יותר עבורנו ועבור הדורות הבאים.\n"
  // WriterName: "נועם אריכא"
  // WriterPhone: "+13012223168"
  // WriterPic: {_id: '5fb9e2ed1054347fe6670ea9', name: '114806375_10158310954377199_987255163248939613_o.jpg', alternativeText: '', caption: '', hash: '114806375_10158310954377199_987255163248939613_o_5e4bee0cd6', …}
  // WriterShortDescription: "מדריך ומלווה צעירים להגשמה עצמית בקריירה ובחיים"
  // WriterWebsite: "https://uslyapp.github.io/usly"
  // WriterWhatsApp: "+13012223168"
  // WriterYouTube: "https://www.youtube.com/channel/UCz6vGgW6Nh8QExJW1KX_pgg/featured"

  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
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
                <div className="flex flex-wrap justify-center mb-24">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt={writer.WriterName}
                        src={imgUrlWriter}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 min-h-120-px max-h-120-px max-w-120-px min-w-120-px"
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center mt-24">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    {writer.WriterName}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    {writer.WriterShortDescription}
                  </div>
                </div>
                <div className="flex flex-wrap justify-center m-8">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    {writer.WriterLinkedIn ? (
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i class="far fa-envelope"></i>
                      </button>
                    ) : null}
                    {writer.WriterEmail ? (
                      <button
                        className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i class="fab fa-linkedin-in"></i>
                      </button>
                    ) : null}
                    {writer.WriterYouTube ? (
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-youtube"></i>
                      </button>
                    ) : null}
                    {writer.WriterWebsite ? (
                      <button
                        className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fas fa-globe"></i>
                      </button>
                    ) : null}
                    {writer.WriterFacebook ? (
                      <button
                        className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    ) : null}
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        {writer.WriterLongDescription}
                      </p>
                      <Link
                        href={{
                          pathname: "/authors/",
                        }}
                      >
                        <a
                          href="/authors"
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
