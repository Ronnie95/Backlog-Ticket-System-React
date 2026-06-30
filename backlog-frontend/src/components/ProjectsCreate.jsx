import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import api from "../services/api";


function CreateProject() {

    const navigate = useNavigate();

    const [projectForm, setProjectForm] = useState({
        date: "",
        project_name: "",
        description: "",
        dueDate: "",
        status: ""
    });


    const handleChange = (e) => {

        setProjectForm({
            ...projectForm,
            [e.target.name]: e.target.value
        });

    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await api.post("projects/", projectForm);

            navigate("/projects");

        } catch (error) {

            console.log(error.response?.data || error.message);

        }

    };


    return (

        <div className="container mt-4">

            <Card>

                <Card.Body>

                    <Card.Title>
                        Create Project
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
                                required
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
                                required
                            />

                        </Form.Group>



                        <Form.Group className="mb-3">

                            <Form.Label>
                                Start Date
                            </Form.Label>

                            <Form.Control
                                type="date"
                                name="date"
                                value={projectForm.date}
                                onChange={handleChange}
                                required
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
                                required
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
                                required
                            >

                                <option value="">
                                    Select Status
                                </option>

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
                            variant="primary" 
                            type="submit"
                        >
                            Create Project
                        </Button>


                    </Form>


                </Card.Body>

            </Card>

        </div>

    );

}


export default CreateProject;