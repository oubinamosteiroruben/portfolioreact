import React from 'react';
import './Projects.css';

function Projects() {
    return (
        <section id="projects" className="projects">
            <h2 className="projects-title">Proyectos</h2>
            <div className="project-card">
                <h3 className="project-title">Proyecto 1</h3>
                <p className="project-description">Descripción del proyecto 1.</p>
            </div>
            <div className="project-card">
                <h3 className="project-title">Proyecto 2</h3>
                <p className="project-description">Descripción del proyecto 2.</p>
            </div>
        </section>
    );
}

export default Projects;
