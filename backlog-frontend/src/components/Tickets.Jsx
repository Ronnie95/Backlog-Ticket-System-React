import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import api from "../services/api";

function Tickets() {

    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const getTickets = async () => {

            try {

                const response = await api.get("tickets/");

                setTickets(response.data);

            } catch (err) {

                setError("Unable to load projects.");

                console.log(err);

            } finally {

                setLoading(false);

            }

        };

        getTickets();

    }, []);

    if (loading) {
        return <h3>Loading Tickets...</h3>;
    }

    if (error) {
        return <h3>{error}</h3>;
    }

    return (

        <div className="container mt-4">

            <div className="d-flex justify-content-between mb-4">

                <h2>Tickets</h2>

                <Link to="/tickets/new">
                    <Button>Create a Ticket</Button>
                </Link>

            </div>

            {tickets.length === 0 ? (

                <p>No Tickets found.</p>

            ) : (

                tickets.map((ticket) => (

                    <Card
                        className="mb-3"
                        key={ticket.id}
                    >

                        <Card.Body>

                            <Card.Title>
                                {ticket.ticket_name}
                            </Card.Title>

                            <Card.Text>
                                {ticket.description}
                            </Card.Text>

                            <Card.Text>
                                Status: {ticket.status}
                            </Card.Text>

                            <Link to={`/tickets/${ticket.id}`}>

                                <Button
                                    variant="outline-primary"
                                >
                                    View Ticket
                                </Button>

                            </Link>

                        </Card.Body>

                    </Card>

                ))

            )}

        </div>

    );

}

export default Tickets;