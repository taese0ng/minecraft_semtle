import React,{useState} from 'react';
import {Form, Button, Container,Row, Col, InputGroup, FormControl} from 'react-bootstrap';

function SignUp(){
    const [email, setEmail] = useState('');
    const [emailCode, setEmailCode] = useState(null);
    const [nickName, setNickName] = useState('');


    function inputEmail(e){
        setEmail(e.target.value);
        console.log(email);
    }

    function inputEmailCode(e){
        setEmailCode(e.target.value);
        console.log(emailCode);
    }

    function inputNickName(e){
        setNickName(e.target.value);
        console.log(nickName);
    }

    function SignUp(form){
    }

    return(
        <Container>
            <Row className="justify-content-center">
                <Col xs="auto">
                    <h1>SignUp</h1>
                </Col>
            </Row>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>
                        <h4>Email Address</h4>
                    </Form.Label>
                    <Form.Row>
                        <Col xs={6}>
                            <Form.Control size="lg" type="email" placeholder="Enter email" onChange={inputEmail}/>
                        </Col>
                        <Col xs={6}>
                            <InputGroup size="lg">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>@</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl value="kumoh.ac.kr" disabled/>
                            </InputGroup>
                        </Col>
                    </Form.Row>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>
                        <h4>Email Confirm Code</h4>
                    </Form.Label>
                    <Form.Control type="number" placeholder="Email Confirm Code" size="lg" onChange={inputEmailCode}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>
                        <h4>Nick Name</h4>
                    </Form.Label>
                    <Form.Control type="text" placeholder="Nick Name" size="lg" onChange={inputNickName}/>
                </Form.Group>

                <Button variant="outline-success" size="lg" block onClick={SignUp}>
                    SignUp
                </Button>
            </Form>
        </Container>
    )
}

export default SignUp;