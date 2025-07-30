import { useState } from 'react';
import './SideLinks.css';

function SideLinks({showGithub, setShowGithub, showSpotify, setShowSpotify, showDiscord, setShowDiscord, showInsta, setShowInsta}) {

    return (
        <div className="sideLinks">

            <div className="social-btns">
                <a onMouseEnter={() => setShowGithub(true)} onMouseLeave={() => setShowGithub(false)} className="btn github" href="https://github.com/Jmjmorelli"><i className="fab fa-github"></i></a>
                <a onMouseEnter={() => setShowDiscord(true)} onMouseLeave={() => setShowDiscord(false)} className="btn discord" href=""><i className="fab fa-discord"></i></a>
                <a onMouseEnter={() => setShowSpotify(true)} onMouseLeave={() => setShowSpotify(false)} className="btn spotify" href="https://open.spotify.com/playlist/5fMZ23w1j3eWnIFwFMkWBQ?si=Zm-kkPezSJGKSxLmVR8szw"><i className="fab fa-spotify"></i></a>
                <a onMouseEnter={() => setShowInsta(true)} onMouseLeave={()=> setShowInsta(false)} className="btn instagram" href="https://www.instagram.com/jj_tookthat/"><i className="fab fa-instagram"></i></a>
            </div>
        </div>

    );
}
export default SideLinks;
