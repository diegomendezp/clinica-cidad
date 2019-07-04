import Head from "next/head";

const Meta = ({ title }) => {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{"Clínica Cidad"}</title>
      </Head>
      <style jsx global>{`
        @font-face {
          font-family: "Avenir";
          src: url(/static/fonts/avenir.ttf) format("truetype");
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: "AvenirB";
          src: url(/static/fonts/Avenir-bold.ttf) format("truetype");
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: "AvenirL";
          src: url(/static/fonts/Avenir-Light-07.ttf) format("truetype");
          font-weight: normal;
          font-style: normal;
        }

        body {
          margin: 0;
          padding: 0;
          max-width: 100%;
          position: relative;
          overflow-x: hidden;
        }

        .center {
          width: 100vw;
          height: auto;
          display: flex;
          justify-content: center;
          text-align: center;
        }

        .backLink {
          font-family: AvenirL;
          text-decoration: underline;
          align-self: flex-start;
          color: black;
      }
      `}</style>
    </React.Fragment>
  );
};

export default Meta;
