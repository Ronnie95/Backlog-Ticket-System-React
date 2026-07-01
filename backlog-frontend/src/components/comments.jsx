import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import api from "../services/api";

function Comments() {

    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const getComments = async () => {

            try {

                const response = await api.get("comments/");

                setComments(response.data);

            } catch (err) {

                setError("Unable to load Comments.");

                console.log(err);

            } finally {

                setLoading(false);

            }

        };

        getComments();

    }, []);

    if (loading) {
        return <h3>Loading Comments...</h3>;
    }

    if (error) {
        return <h3>{error}</h3>;
    }

    return (

        <div className="container mt-4">

            <div className="d-flex justify-content-between mb-4">

                <h2>Comments</h2>

                <Link to="/comments/new">
                    <Button>Create a Comment</Button>
                </Link>

            </div>

            {comments.length === 0 ? (

                <p>No Comments found.</p>

            ) : (

                comments.map((comment) => (

                    <Card
                        className="mb-3"
                        key={comment.id}
                    >

                        <Card.Body>

                            <Card.Title>
                                {comment.ticket_submission}
                            </Card.Title>

                            <Card.Text>
                                {comment.authors}
                            </Card.Text>

                            <Card.Text>
                                {comment.text}
                            </Card.Text>

                            <Link to={`/comments/${comment.id}`}>

                                <Button
                                    variant="outline-primary"
                                >
                                    View comment
                                </Button>

                            </Link>

                        </Card.Body>

                    </Card>

                ))

            )}

        </div>

    );

}

export default Comments;