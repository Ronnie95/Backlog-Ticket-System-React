import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import api from "../services/api";


function CreateTicket() {

    const navigate = useNavigate();

    const [ticketForm, setTicketForm] = useState({
        created_by: "",
        date: "",
        title: "",
        description: "",
        priority: "",
        project: ""
    });


    const handleChange = (e) => {

        setTicketForm({
            ...ticketForm,
            [e.target.name]: e.target.value
        });

    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await api.post("tickets/", ticketForm);

            navigate("/tickets");

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
                                Ticket Name
                            </Form.Label>

                            <Form.Control
                                type="text"
                                name="title"
                                value={ticketForm.title}
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
                                value={ticketForm.description}
                                onChange={handleChange}
                                required
                            />

                        </Form.Group>



                        <Form.Group className="mb-3">

                            <Form.Label>
                                 Date
                            </Form.Label>

                            <Form.Control
                                type="date"
                                name="date"
                                value={ticketForm.date}
                                onChange={handleChange}
                                required
                            />

                        </Form.Group>

                        <Form.Group className="mb-3">

                            <Form.Label>
                                priority
                            </Form.Label>

                            <Form.Select
                                name="priority"
                                value={projectForm.status}
                                onChange={handleChange}
                                required
                            >

                                <option value="">
                                    Select Status
                                </option>

                                <option value="not_complete">
                                    Low
                                </option>

                                <option value="in_progress">
                                    Medium
                                </option>

                                <option value="complete">
                                    High
                                </option>

                            </Form.Select>

                        </Form.Group>
                        <Form.Group className="mb-3">

                        <Form.Label>
                            Date
                        </Form.Label>

                        <Form.Control
                            type="text"
                            name="project"
                            value={ticketForm.project}
                            onChange={handleChange}
                            required
                        />

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