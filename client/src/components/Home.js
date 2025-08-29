import { useEffect, useState } from "react";

const backgrounds = [
  'media/cat1.webp',
  'media/cat2.webp',
  'media/cat3.webp',
  'media/cat4.webp',
  'media/cat5.webp'
];


function Home({ showGithub, showDiscord, showSpotify, showInsta }) {
  const [bgIndex, setBgIndex] = useState(0);
  const [nowPlaying, setNowPlaying] = useState(null);
  const [dailyFunFact, setDailyFunFact] = useState({});
  const [nowPlayingLoaded, setNowPlayingLoaded] = useState(false);




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
          // console.log('Daily Fun Fact API data: ', data);
          setDailyFunFact(data);
        })
        .catch((err) => console.error('Failed to fetch the Daily Fun Fact:', err));

    }
    fetchDailyFunFact();

    const interval = setInterval(fetchDailyFunFact, 1800000); // every 30s
    return () => clearInterval(interval);
  }, []);



  useEffect(() => {
    const fetchNowPlaying = () => {

      fetch('/api/sy/now-playing')
        .then((res) => {
          // console.log('Response status:', res.status);
          if (res.status === 204) {
            throw new Error("No song playing");
          }
          else if (!res.ok) {
            throw new Error("Connection to backend failed");
          }
          return res.json();
        })
        .then((data) => {
          // console.log('Now Playing API data:', data);
          setNowPlaying(data);
        })
        .catch((err) => {
          console.log('Song not playing or error:', err.message);
          setNowPlaying(null);
          setNowPlayingLoaded(true);
        });

    }
    fetchNowPlaying(); // run once

    const interval = setInterval(fetchNowPlaying, 20000); // every 20s
    return () => clearInterval(interval);
  }, []);



  let headerName;
  if (showInsta)
    headerName = "@jj_tookthat"; // my ig handle
  else if (showDiscord)
    headerName = "@jmjmorelli"; // discord handle
  else if (showSpotify)
    headerName = "E S P E N P T" // my main spotify playlist
  else if (showGithub)
    headerName = "010010100100111100001010" // ? curios what to put here.. maybe some morse code or binary
  else
    headerName = "JOSEPH MORELLI";

  return (
    <div className="homePage"
      style={{
        backgroundImage: `url(${backgrounds[bgIndex]})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '40%',
        height: '100vh',
        transition: 'background-image .5s ease-in-out'
      }}>
      {/* shout out https://mynameiseno.tumblr.com/ */}


      <div style={{}}>
        <h3>
          {headerName.toLowerCase().includes("joseph") ? <> <span>JOSEPH</span> <span style={{ color: "#ae774fff" }}>MORELLI</span> </> : ""}
          {showInsta ? <span style={{ color: "#ff34b1" }}>@jj_tookthat</span> : ""}
          {showSpotify ? <span style={{ color: "#1ca315" }}>E S P E N P T</span> : ""}
          {showGithub ? <span> 010010100100111100001010</span> : ""}
          {showDiscord ? <span style={{ color: "#487ae7ff" }}>@jmjmorelli</span> : ""}

        </h3>


        <p style={{
          alignContent: 'center',
          left: '20px'
        }}> I'm probably eating right now!?</p>

        {!nowPlaying && nowPlayingLoaded && (

          <div style={{
            paddingTop: "50px",
            position: "fixed"
          }}>

            <p><strong>Fact of the Day</strong></p>
            <p style={{width : "400px"}}> {dailyFunFact.text}</p>
          </div>
        )}


      </div>
      <div className="currentlyPlayingBox">
        <div className="glassBox" style={{
        }}>
          {nowPlaying && (
            <>
              <img
                src={nowPlaying.image}
                alt="Album Art"
                width="100"
                height="100"
              />
              <div>
                <p style={{ fontWeight: "bold", color: "#967259" }}>listening to...</p>
                <p><strong>{nowPlaying.song}</strong></p>
                <p style={{ fontSize: "14px" }} >{nowPlaying.artist}</p>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
}
export default Home;