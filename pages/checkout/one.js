import Head from 'next/head';
import Link from 'next/link';
import { useCheckoutWrapper } from '../../src/components/CheckoutWrapper';

export default function One() {
  const { setThing } = useCheckoutWrapper();
  return (
    <div className="container">
      <Head>
        <title>One</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          One
        </h1>

        <p>
          <Link href="/checkout/two">
            <a>-Two-</a>
          </Link>
          <Link href="/">
            <a>-Home-</a>
          </Link>
        </p>

        <button onClick={() => setThing("Checkout One")}>Submit</button>
      </main>

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
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      wrapWithCheckout: true,
    }, // will be passed to the page component as props
  }
}
