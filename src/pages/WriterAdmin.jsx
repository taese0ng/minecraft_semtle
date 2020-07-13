import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function WriterAdmin(){

    function onWrite(){
        console.log("글작성");
    }

    return(
        <Container>
            <Row className="justify-content-center mt-4">
                <Col xs="auto">
                    <h1>Admin Write</h1>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <Form>
                        <Form.Group>
                            <Form.Row>
                                <Col xs={2}>
                                    <h2 className="text-center">title : </h2>
                                </Col>
                                <Col>
                                    <Form.Control/>                            
                                </Col>
                            </Form.Row>
                        </Form.Group>

                        <Form.Group>
                            <Form.Row>
                                <Col xs={12}>
                                    <h2>Contents</h2>
                                </Col>
                            </Form.Row>
                            <Form.Row className="justify-content-center">
                                <Col>
                                    <Form.Control 
                                    as="textarea" 
                                    rows="10"
                                    style={{ resize:'none' }}/>
                                </Col>
                            </Form.Row>
                        </Form.Group>

                        <Button 
                        size="lg"
                        variant="outline-success"
                        block
                        onClick={onWrite}>Write</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default WriterAdmin;