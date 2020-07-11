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
                    <h1>계정 등록</h1>
                </Col>
            </Row>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>
                        <h4>이메일 주소</h4>
                    </Form.Label>
                    <Form.Row>
                        <Col md={5}>
                            <Form.Control size="lg" type="email" placeholder="이메일" onChange={inputEmail}/>
                        </Col>
                        <Col md={4} className='mt-2 mt-md-0'>
                            <InputGroup size="lg">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>@</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl value="kumoh.ac.kr" disabled/>
                            </InputGroup>
                        </Col>
                        <Col md={3} className='mt-2 mt-md-0'>
                            <Button variant="outline-primary" size="lg" block>인증번호 보내기</Button>
                        </Col>
                    </Form.Row>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>
                        <h4>인증번호 확인</h4>
                    </Form.Label>
                    <Form.Row>
                        <Col xs={6}>
                            <Form.Control type="number" placeholder="인증번호" size="lg" onChange={inputEmailCode}/>
                        </Col>
                        <Col xs={6}>
                            <Button variant="outline-primary" size="lg" block>인증번호 확인</Button>
                        </Col>
                    </Form.Row>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>
                        <h4>마인크래프트 닉네임</h4>
                    </Form.Label>
                    <Form.Control type="text" placeholder="닉네임" size="lg" onChange={inputNickName}/>
                </Form.Group>

                <Button variant="outline-success" size="lg" block onClick={SignUp}>
                    등록하기
                </Button>
            </Form>
        </Container>
    )
}

export default SignUp;