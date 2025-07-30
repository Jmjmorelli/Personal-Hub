import projects from '../data/projects';

function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((p, index) => (
          <div key={index} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <a href={p.github} target="_blank">GitHub</a>
            {p.demo && <a href={p.demo} target="_blank">Live Demo</a>}
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
