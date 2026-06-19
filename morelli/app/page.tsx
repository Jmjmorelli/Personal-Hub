'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "./components/Header";


const backgrounds = [
  'cat1.webp',
  'cat2.webp',
  'cat3.webp',
  'cat4.webp',
  'cat5.webp',
]


export default function Home() {

  const [bgIndex, setBgIndex] = useState<number>(0);
  const [nowPlaying, setNowPlaying] = useState(null);
  const [dailyFunFact, setDailyFunFact] = useState<String>("");
  const [nowPlayingLoaded, setNowPlayingLoaded] = useState(false);
  const headerName = "JOSEPH MORELLI";




  useEffect(() => {
    const delay = backgrounds[bgIndex].includes('cat5') ? 14500 : 10000;

    const timeout = setTimeout(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, delay);

    return () => clearTimeout(timeout); // cleanup on unmount or re-run
  }, [bgIndex]);

  useEffect(() => {
    const fetchDailyFunFact = () => {
      fetch('https://uselessfacts.jsph.pl/api/v2/facts/today') // fun fact API lol
        .then((res) => {
          // console.log('Response status:', res.status);

          return res.json();
        })
        .then((data) => {
          console.log('Daily Fun Fact API data: ', JSON.stringify(data.text));
          setDailyFunFact(data.text);
        })
        .catch((err) => console.error('Failed to fetch the Daily Fun Fact:', err));

    }
    fetchDailyFunFact();

    const interval = setInterval(fetchDailyFunFact, 1800000); // every 30s
    return () => clearInterval(interval);
  }, []);

  //TODO: revamp spotify API



  return (
    // <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    //   <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={100}
    //       height={20}
    //       priority
    //     />
    //     <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
    //       <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
    //         To get started, edit the page.tsx file.
    //       </h1>
    //       <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
    //         Looking for a starting point or more instructions? Head over to{" "}
    //         <a
    //           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //           className="font-medium text-zinc-950 dark:text-zinc-50"
    //         >
    //           Templates
    //         </a>{" "}
    //         or the{" "}
    //         <a
    //           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //           className="font-medium text-zinc-950 dark:text-zinc-50"
    //         >
    //           Learning
    //         </a>{" "}
    //         center.
    //       </p>
    //     </div>
    //     <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
    //       <a
    //         className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={16}
    //           height={16}
    //         />
    //         Deploy Now
    //       </a>
    //       <a
    //         className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Documentation
    //       </a>
    //     </div>
    //   </main>
    // </div>
    <div style={{

      backgroundImage: `url(${backgrounds[bgIndex]})`,
      backgroundPosition: 'center',
      backgroundAttachment: "fixed",
      // backgroundColor:"green", // lol
      backgroundRepeat: 'no-repeat',
      backgroundSize: '25%',
      height: '70vh',
      margin: 0,
      transition: 'background-image .5s ease-in-out'

    }} className="homePage">
      <Header />
      <h3 style={{ display: "flex", gap: ".5rem" }}>
        {/* {headerName.toLowerCase().includes("joseph") ? <> <span style={{ fontWeight: "bold" }}>JOSEPH</span> <span style={{ color: "#ae774fff", fontWeight: "bold" }}>MORELLI</span> </> : ""} */}
        {/* {showInsta ? <span style={{ color: "#ff34b1" }}>@jj_tookthat</span> : ""} */}
        {/* {showSpotify ? <span style={{ color: "#1ca315" }}>E S P E N P T</span> : ""} */}
        {/* {showGithub ? <span> 010010100100111100001010</span> : ""} */}
        {/* {showDiscord ? <span style={{ color: "#487ae7ff" }}>@jmjmorelli</span> : ""} */}

      </h3>


      {/* <p> I'm probably eating right now!?</p> */}
      <p style={{ paddingTop: "1rem" }}><strong>Fact of the Day</strong></p>
      <p style={{ width: "200px" }}> {dailyFunFact}</p>
      <p style={{ paddingTop: "1rem" }}>Last Updated<p style={{fontWeight: "bold"}}>6/19/26</p></p>





      {/* 
      <div
        style={{
          backgroundImage: `url(${backgrounds[bgIndex]})`,
          backgroundPosition: 'center',
          backgroundAttachment: "fixed",
          backgroundColor:"green", // lol
          backgroundRepeat: 'no-repeat',
          backgroundSize: '25%', 
          height: '70vh',
          margin: 0,             
          transition: 'background-image .5s ease-in-out'
        }}>
      </div> */}
      {/* shout out https://mynameiseno.tumblr.com/ */}

    </div>
  );
}
