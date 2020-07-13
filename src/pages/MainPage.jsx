import React from 'react';
import {Link} from 'react-router-dom';
import { Container, Row, Col, Button, Figure } from 'react-bootstrap';
import image1 from '../assets/image1.png';

function MainPage(){
    return(
        <Container className="mt-4">
            <Row className="justify-content-center">
                <Col xs="auto">
                    <h1>KUMO CRAFT</h1>
                </Col>
            </Row>
            <Row className="justify-content-center mt-5">
                <Col xs={11} md={10} className="text-center">
                    <Figure>
                        <Figure.Image
                            alt="minCraftImage"
                            src={image1}/>
                    </Figure>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs={11} md={5} className="mb-2 mb-md-0">
                    <Link style={{ textDecoration:'none'}} className='Link' to="/signup">
                        <Button variant="success" block size="lg">Sign Up</Button>
                    </Link>
                </Col>
                <Col xs={11} md={5}>
                    <Link style={{ textDecoration:'none'}} to="/notice">
                        <Button variant="warning" block size="lg">Notice</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default MainPage;