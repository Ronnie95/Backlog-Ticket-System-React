import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import api from "../services/api";

function Projects() {

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const getProjects = async () => {

            try {

                const response = await api.get("projects/");

                setProjects(response.data);

            } catch (err) {

                setError("Unable to load projects.");

                console.log(err);

            } finally {

                setLoading(false);

            }

        };

        getProjects();

    }, []);

    if (loading) {
        return <h3>Loading Projects...</h3>;
    }

    if (error) {
        return <h3>{error}</h3>;
    }

    return (

        <div className="container mt-4">

            <div className="d-flex justify-content-between mb-4">

                <h2>Projects</h2>

                <Link to="/projects/new">
                    <Button>Create Project</Button>
                </Link>

            </div>

            {projects.length === 0 ? (

                <p>No projects found.</p>

            ) : (

                projects.map((project) => (

                    <Card
                        className="mb-3"
                        key={project.id}
                    >

                        <Card.Body>

                            <Card.Title>
                                {project.project_name}
                            </Card.Title>

                            <Card.Text>
                                {project.description}
                            </Card.Text>

                            <Card.Text>
                                Status: {project.status}
                            </Card.Text>

                            <Link to={`/projects/${project.id}`}>

                                <Button
                                    variant="outline-primary"
                                >
                                    View Project
                                </Button>

                            </Link>

                        </Card.Body>

                    </Card>

                ))

            )}

        </div>

    );

}

export default Projects;