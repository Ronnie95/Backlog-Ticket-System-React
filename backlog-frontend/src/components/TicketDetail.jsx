import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useParams, useNavigate, Link } from "react-router-dom";
import api from "../services/api";


function TicketDetail() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [ticket, setTicket] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const getTicket = async () => {

            try {

                const response = await api.get(`tickets/${id}/`);

                setTicket(response.data);

            } catch (error) {

                console.log(error.response?.data || error.message);

            } finally {

                setLoading(false);

            }

        };


        getTicket();

    }, [id]);



    const deleteTicket = async () => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this ticket?"
        );


        if (!confirmDelete) {
            return;
        }


        try {

            await api.delete(`tickets/${id}/`);

            navigate("/tickets");

        } catch (error) {

            console.log(error.response?.data || error.message);

        }

    };



    if (loading) {
        return <h3>Loading ticket...</h3>;
    }


    if (!ticket) {
        return <h3>Ticket not found</h3>;
    }



    return (

        <div className="container mt-4">

            <Card>

                <Card.Body>

                    <Card.Title>
                        {ticket.title}
                    </Card.Title>


                    <Card.Text>

                        <strong>Description:</strong>
                        <p>
                            {ticket.description}
                        </p>


                        <strong>Priority:</strong>
                        <p>
                            {ticket.priority}
                        </p>


                        <strong>Date:</strong>
                        <p>
                            {ticket.date}
                        </p>


                        <strong>Project:</strong>
                        <p>
                            {ticket.project_name}
                        </p>


                    </Card.Text>



                    <Link to={`/tickets/${id}/edit`}>

                        <Button 
                            variant="warning"
                            className="me-2"
                        >
                            Edit
                        </Button>

                    </Link>



                    <Button
                        variant="danger"
                        onClick={deleteTicket}
                        className="me-2"
                    >
                        Delete
                    </Button>



                    <Button
                        variant="secondary"
                        onClick={() => navigate("/tickets")}
                    >
                        Back
                    </Button>


                </Card.Body>

            </Card>

        </div>

    );

}


export default TicketDetail;