import React from "react";

import Navbar from "../components/Navbars/AuthNavbar.js";
import Footer from "../components/Footers/Footer.js";

export default function Profile() {
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
        <section className="relative py-16 bg-blueGray-200 ">
          <div className="container mx-auto px-4 ">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-24 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center mb-24">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src="/static/images/logo1024.png"
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px mb-8"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        אפליקציה חברתית המהווה ערוץ מרכזי בפלטפורמה המספקת תוכן
                        ממוקד ותרגילים מעשיים להתפתחות אישית על ידי אימון ופיתוח
                        של הרגלים חדשים ומיטיבים בהתאמה אישית. • אנחנו מאמינים
                        שהפרט שואף להתפתח במטרה להגשים את עצמו ולשפר את איכות
                        חייו • אנחנו מאמינים שקבוצה העושה צעדים יחדו מאפשרת לפרט
                        לפתח הרגלים רבים יותר במהירות גבוהה יותר • אנו מאמינים
                        שחיבור והעצמה של נותני השירותים וצורכי התוכן יפתח קהילה
                        תומכת ומשתפרת המשפיעה לטובה על החברה והעולם לימדו הגשימו
                        ומצו את הפוטנציאל הגדול והאמיתי הטמון בכם בעזרת תכנים
                        ייעודים ותרגילים אמיתיים ממיטב הכותבים ובעלי המקצוע.
                        Usly מביאה לכם מגוון תכנים ושיעורי חיים ישימים שמטרתם
                        שיפור עצמי. כל התכנים שלנו נועדו לעזור לך להשיג את מלוא
                        הפוטנציאל המוחי שלך, הגוף, הנשמה והקריירה שלך. עם נושאים
                        מרכזיים כמו מנהיגות, ביטחון, יזמות, פרודוקטיביות, בריאות
                        וכושר, מערכות יחסים, אושר, רוחניות ועוד, Usly היא התחנה
                        המרכזית והיחידה שלך להתפתחות אישית בכל תחומי החיים
                      </p>
                      <div style={{ float: "right" }}>
                        <a
                          href={
                            "https://apps.apple.com/us/app/usly/id1546418617"
                          }
                        >
                          <img
                            src="/static/images/appstore.svg"
                            style={{ width: "100%" }}
                          />
                        </a>
                      </div>
                      <div>
                        <a
                          href={
                            "https://play.google.com/store/apps/details?id=com.magicgrowth"
                          }
                        >
                          <img
                            src="/static/images/google-play-badge.png"
                            style={{ width: "8em" }}
                          />
                        </a>
                      </div>
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
