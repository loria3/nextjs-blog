import Head from "next/head";
import Image from "next/image";
import { BrowserView, MobileView } from "react-device-detect";
import { useRouter } from "next/router";
import redirect from "nextjs-redirect";

export default function DeepLinks() {
  const router = useRouter();
  const { articleid } = router.query;
  let fulladress = "ibetterMe://article/" + articleid;

  //redirect(fulladress, { statusCode: 301 });

  return (
    <div className="container">
      <Head>
        <title>USLY - Deeplinks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">קישורים</h1>
        <Image
          src="/images/logo1024.png" // Route of the image file
          height={300} // Desired size with correct aspect ratio
          width={300} // Desired size with correct aspect ratio
          alt="Your Name"
        />

        <MobileView>
          <div className="grid">
            <a href={fulladress} className="card">
              <Image
                src="/images/google-play-badge.png" // Route of the image file
                height={144} // Desired size with correct aspect ratio
                width={288} // Desired size with correct aspect ratio
                alt="google play store"
              />
            </a>
            <a href={fulladress} className="card">
              <Image
                src="/images/appstore.svg" // Route of the image file
                height={144} // Desired size with correct aspect ratio
                width={288} // Desired size with correct aspect ratio
                alt="Apple store"
              />
            </a>
          </div>
        </MobileView>

        <BrowserView>
          <div className="grid">
            <a href={"https://google.com"} className="card">
              <Image
                src="/images/google-play-badge.png" // Route of the image file
                height={144} // Desired size with correct aspect ratio
                width={288} // Desired size with correct aspect ratio
                alt="google play store"
              />
            </a>
            <a href={"https://itunes.com"} className="card">
              <Image
                src="/images/appstore.svg" // Route of the image file
                height={144} // Desired size with correct aspect ratio
                width={288} // Desired size with correct aspect ratio
                alt="Apple store"
              />
            </a>
          </div>
        </BrowserView>
      </main>

      <footer>Powered by USLY</footer>

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
          margin: 3rem;
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
          text-align: right;
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
          text-align: center;
          color: inherit;
          text-decoration: none;

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
