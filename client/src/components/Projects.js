import projects from '../data/projects';
import './Projects.css';


const projectImages = [
  'media/download.png'
];

function Projects() {
  return (
    <section>
      <h2 style={{
        position: "relative",
        left: "180px",
        top: "0px",
        marginTop: "10%",
        fontSize: "20px",
        padding: "1rem"
      }}>Coming Soon!</h2>
      <div className="project-list">
        {/* <h1 style={{ fontSize: "40px", marginLeft: "40px", padding : "1rem" }}>01</h1>
        <article className="card">
          <figure className="card-image">
            <img src='media/download.png' alt="An orange painted blue, cut in half laying on a blue background" />
          </figure>
          <a className='card-link-wrapper' href='youtube.com'>
          <div className="card-header" href='#'>
            <a href="#">Project 1 </a>
            <div className='projectTop'></div>
            <div className='projectBottom'></div>
            <div class="arrow">
              <div class="arrow-top"></div>
              <div class="arrow-bottom"></div>
            </div>
          </div>
          </a>
          <div className="card-footer">
            <div className="card-meta card-meta--views">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" display="block" id="EyeOpen">
                <path d="M21.257 10.962c.474.62.474 1.457 0 2.076C19.764 14.987 16.182 19 12 19c-4.182 0-7.764-4.013-9.257-5.962a1.692 1.692 0 0 1 0-2.076C4.236 9.013 7.818 5 12 5c4.182 0 7.764 4.013 9.257 5.962z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              2,465
            </div>
            <div className="card-meta card-meta--date">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" display="block" id="Calendar">
                <rect x="2" y="4" width="20" height="18" rx="4" />
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <path d="M2 10h20" />
              </svg>
              Jul 26, 2019
            </div>
          </div>
        </article> */}

      </div>
    </section>
  );
}
export default Projects;
