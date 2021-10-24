import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>US.LY</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Us.ly</h1>
        <img src="static/images/logo1024.png" style={{ width: "10em" }} />

        <p className="description">
          הינה אפליקציה חברתית המהווה ערוץ מרכזי בפלטפורמה המספקת תוכן ממוקד
          ותרגילים מעשיים להתפתחות אישית על ידי אימון ופיתוח של הרגלים חדשים
          ומיטיבים בהתאמה אישית. • אנחנו מאמינים שהפרט שואף להתפתח במטרה להגשים
          את עצמו ולשפר את איכות חייו • אנחנו מאמינים שקבוצה העושה צעדים יחדו
          מאפשרת לפרט לפתח הרגלים רבים יותר במהירות גבוהה יותר • אנו מאמינים
          שחיבור והעצמה של נותני השירותים וצורכי התוכן יפתח קהילה תומכת ומשתפרת
          המשפיעה לטובה על החברה והעולם לימדו הגשימו ומצו את הפוטנציאל הגדול
          והאמיתי הטמון בכם בעזרת תכנים ייעודים ותרגילים אמיתיים ממיטב הכותבים
          ובעלי המקצוע. Usly מביאה לכם מגוון תכנים ושיעורי חיים ישימים שמטרתם
          שיפור עצמי. כל התכנים שלנו נועדו לעזור לך להשיג את מלוא הפוטנציאל
          המוחי שלך, הגוף, הנשמה והקריירה שלך. עם נושאים מרכזיים כמו מנהיגות,
          ביטחון, יזמות, פרודוקטיביות, בריאות וכושר, מערכות יחסים, אושר, רוחניות
          ועוד, Usly היא התחנה המרכזית והיחידה שלך להתפתחות אישית בכל תחומי
          החיים
        </p>
        <div style={{ float: "right" }}>
          <a href={"https://apps.apple.com/us/app/usly/id1546418617"}>
            <img src="/static/images/appstore.svg" style={{ width: "100%" }} />
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
        <div className="grid">
          <div className="card">
            <Link href="/privacy">
              <a>Privacy</a>
            </Link>
          </div>

          {/* <div className="card">
            <Link href="/deeplink">
              <a>Deeplinks</a>
            </Link>
          </div> */}
        </div>
      </main>

      <footer>
        <p>Powered by us.ly v2.0</p>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
