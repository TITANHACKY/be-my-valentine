"use client";
import { useState } from "react";
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";
import { Helmet } from "react-helmet-async";


const title = "Be my valentine?";
const description = "Be my valentine?";
const keywords = "Be my valentine?";
const pageURL = "";
const imageURL = "";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 30;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Hey Gundooos",
      "What if I asked really nicely?",
      "Chloo please",
      "En chloo la",
      "PLEASE GUNDOOOS",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to boongawin's ghost",
      "please babzzz",
      "Strictly No",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <>
      <MetaTags />
      <img
        src={lovesvg}
        className="fixed animate-pulse -z-10 top-10 md:left-24 left-6 md:w-40 w-28"
      />
      <img
        src={lovesvg2}
        className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32"
      />
      <div className="overflow-scroll flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
        {yesPressed ? (
          <>
            <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
            <div className="text-4xl md:text-6xl font-bold my-4">
              I love you chloo!!
            </div>
          </>
        ) : (
          <>
            <img
              className="h-[230px] rounded-lg shadow-lg"
              src="https://gifdb.com/images/high/cute-Love-bear-roses-ou7zho5oosxnpo6k.gif"
            />
            <h1 className="text-4xl md:text-6xl my-4 text-center">
              Will you be my Valentine?
            </h1>
            <div className="flex flex-wrap justify-center gap-2 items-center">
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>
              <button
                onClick={handleNoClick}
                className="bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
                style={{ fontSize: 30 }}
              >
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
        {/* <Footer /> */}
      </div>
    </>
  );
}


const MetaTags = () => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageURL} />
      <meta property="og:url" content={pageURL} />
    </Helmet>
  );
};