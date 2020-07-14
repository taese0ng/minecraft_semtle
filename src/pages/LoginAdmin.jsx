import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {useHistory} from 'react-router';

function LoginAdmin(){
    const history = useHistory();

    function login(){
        history.push({
            pathname: '/admin/write',
            state:{

            }
        })    
    }

    return(
        <Container className="mt-4">
            <Row className="justify-content-center">
                <Col xs="auto">
                    <h1>Admin Login</h1>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col>
                    <Form>
                        <Form.Group>
                            <Form.Row className="justify-content-center">
                                <Col xs={1} className="text-center">
                                    <Form.Label>
                                        <h2>ID</h2>
                                    </Form.Label>
                                </Col>
                                <Col xs={5}>
                                    <Form.Control placeholder="ID"/>
                                </Col>
                            </Form.Row>

                            <Form.Row className="justify-content-center">
                                <Col xs={1}>
                                    <Form.Label>
                                        <h2>P/W</h2>
                                    </Form.Label>
                                </Col>
                                <Col xs={5}>
                                    <Form.Control placeholder="P/W"/>
                                </Col>
                            </Form.Row>

                            <Form.Row className="justify-content-center">
                                <Col xs={6}>
                                    <Button 
                                    variant="success"
                                    block
                                    onClick={login}>Login</Button>
                                </Col>
                            </Form.Row>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginAdmin;