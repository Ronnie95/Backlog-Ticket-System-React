import React, { useEffect, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";


function EditProject() {

    const { id } = useParams();
    const navigate = useNavigate();


    const [projectForm, setProjectForm] = useState({
        date: "",
        project_name: "",
        description: "",
        dueDate: "",
        status: ""
    });


    useEffect(() => {

        const getProject = async () => {

            try {

                const response = await API.get(`projects/${id}/`);

                setProjectForm(response.data);

            } catch (error) {

                console.log(error.response?.data || error.message);

            }

        };


        getProject();

    }, [id]);



    const handleChange = (e) => {

        setProjectForm({

            ...projectForm,

            [e.target.name]: e.target.value

        });

    };



    const handleSubmit = async (e) => {

        e.preventDefault();


        try {

            await api.put(
                `projects/${id}/`,
                projectForm
            );


            navigate(`/projects/${id}`);


        } catch (error) {

            console.log(error.response?.data || error.message);

        }

    };



    return (

        <div className="container mt-4">

            <Card>

                <Card.Body>

                    <Card.Title>
                        Edit Project
                    </Card.Title>


                    <Form onSubmit={handleSubmit}>


                        <Form.Group className="mb-3">

                            <Form.Label>
                                Project Name
                            </Form.Label>

                            <Form.Control

                                type="text"

                                name="project_name"

                                value={projectForm.project_name}

                                onChange={handleChange}

                            />

                        </Form.Group>



                        <Form.Group className="mb-3">

                            <Form.Label>
                                Description
                            </Form.Label>

                            <Form.Control

                                as="textarea"

                                rows={3}

                                name="description"

                                value={projectForm.description}

                                onChange={handleChange}

                            />

                        </Form.Group>



                        <Form.Group className="mb-3">

                            <Form.Label>
                                Date
                            </Form.Label>

                            <Form.Control

                                type="date"

                                name="date"

                                value={projectForm.date}

                                onChange={handleChange}

                            />

                        </Form.Group>



                        <Form.Group className="mb-3">

                            <Form.Label>
                                Due Date
                            </Form.Label>

                            <Form.Control

                                type="date"

                                name="dueDate"

                                value={projectForm.dueDate}

                                onChange={handleChange}

                            />

                        </Form.Group>



                        <Form.Group className="mb-3">

                            <Form.Label>
                                Status
                            </Form.Label>

                            <Form.Select

                                name="status"

                                value={projectForm.status}

                                onChange={handleChange}

                            >

                                <option value="not_complete">
                                    Not Complete
                                </option>

                                <option value="in_progress">
                                    In Progress
                                </option>

                                <option value="complete">
                                    Complete
                                </option>


                            </Form.Select>

                        </Form.Group>



                        <Button 
                            type="submit"
                            variant="primary"
                        >
                            Save Changes
                        </Button>


                    </Form>


                </Card.Body>

            </Card>

        </div>

    );

}


export default EditProject;