import React, { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import api from "../services/api";


function CreateComments() {

    const navigate = useNavigate();

    const [commentForm, setCommentForm] = useState({
        ticket_submission: "",
        authors: "",
        text: "",
        created_at: "",
        
    });

    const [tickets, setTickets] = useState([]);

    useEffect(() => {

        const getTickets = async () => {
    
            try {
    
                const response = await api.get("tickets/");
    
                setTickets(response.data);
    
            } catch (error) {
    
                console.log(error.response?.data || error.message);
    
            }
    
        };
    
        getTickets();
    
    }, []);


    const handleChange = (e) => {

        setCommentForm({
            ...commentForm,
            [e.target.name]: e.target.value
        });

    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await api.post("comments/", commentForm);

            navigate("/comments");

        } catch (error) {

            console.log(error.response?.data || error.message);

        }

    };


    return (

        <div className="container mt-4">

            <Card>

                <Card.Body>

                    <Card.Title>
                        Create a comment
                    </Card.Title>


                    <Form onSubmit={handleSubmit}>


                        <Form.Group className="mb-3">

                            <Form.Label>
                                Ticket Name
                            </Form.Label>

                            <Form.Control
                                type="text"
                                name="text"
                                value={commentForm.text}
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
                                value={ticketForm.priority}
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

                        <Form.Select
                            name="project"
                            value={ticketForm.project}
                            onChange={handleChange}
                            required
                        >
                            <option value="">
                                Submit Ticket
                            </option>

                            {tickets.map((ticket) => (
                                <option key={comment.id} value={ticket.id}>
                                    {ticket.title}
                                </option>
                            ))}

                        </Form.Select>

                        </Form.Group>


                        <Button 
                            variant="primary" 
                            type="submit"
                        >
                            Submit Comment
                        </Button>


                    </Form>


                </Card.Body>

            </Card>

        </div>

    );

}


export default CreateComments;