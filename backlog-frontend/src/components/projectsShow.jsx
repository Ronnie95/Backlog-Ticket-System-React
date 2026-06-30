import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useParams, useNavigate, Link } from "react-router-dom";
import api from "../services/api";


function ProjectDetail() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const getProject = async () => {

            try {

                const response = await api.get(`projects/${id}/`);

                setProject(response.data);

            } catch (error) {

                console.log(error.response?.data || error.message);

            } finally {

                setLoading(false);

            }

        };


        getProject();

    }, [id]);



    const deleteProject = async () => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this project?"
        );


        if (!confirmDelete) {
            return;
        }


        try {

            await api.delete(`projects/${id}/`);

            navigate("/projects");

        } catch (error) {

            console.log(error.response?.data || error.message);

        }

    };



    if (loading) {
        return <h3>Loading project...</h3>;
    }


    if (!project) {
        return <h3>Project not found</h3>;
    }



    return (

        <div className="container mt-4">

            <Card>

                <Card.Body>

                    <Card.Title>
                        {project.project_name}
                    </Card.Title>


                    <Card.Text>

                        <strong>Description:</strong>
                        <p>
                            {project.description}
                        </p>


                        <strong>Status:</strong>
                        <p>
                            {project.status}
                        </p>


                        <strong>Created:</strong>
                        <p>
                            {project.date}
                        </p>


                        <strong>Due Date:</strong>
                        <p>
                            {project.dueDate}
                        </p>

                    </Card.Text>



                    <Link to={`/projects/${id}/edit`}>

                        <Button 
                            variant="warning"
                            className="me-2"
                        >
                            Edit
                        </Button>

                    </Link>



                    <Button
                        variant="danger"
                        onClick={deleteProject}
                        className="me-2"
                    >
                        Delete
                    </Button>



                    <Button
                        variant="secondary"
                        onClick={() => navigate("/projects")}
                    >
                        Back
                    </Button>


                </Card.Body>

            </Card>

        </div>

    );

}


export default ProjectDetail;