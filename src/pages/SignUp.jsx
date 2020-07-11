import React,{useState} from 'react';
import {Form, Button, Container,Row, Col, InputGroup, FormControl,Collapse} from 'react-bootstrap';
import PublicModal from '../components/PublicModal';

function SignUp(){
    const [email, setEmail] = useState('');
    const [emailCode, setEmailCode] = useState(null);
    const [nickName, setNickName] = useState('');
    const [confirmEmail, setConfirmEmail] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalBody, setModalBody] = useState('');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

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

    function confirmCode(){
        if(parseInt(emailCode) === 123){
            setConfirmEmail(true);
        }
        else{
            setConfirmEmail(false);
        }
    }

    function clickSignUp(){
        if(!confirmEmail){
            setModalTitle("등록 오류!");
            setModalBody("이메일이 인증되지 않았습니다.");
            setShow(true);
        }
        else if(nickName === ''){
            setModalTitle("닉네임 오류!");
            setModalBody("닉네임이 비어있습니다.");
            setShow(true);
        }
    }

    return(
        <>
            <PublicModal
                close={handleClose} 
                show={show} 
                title={modalTitle}
                body={modalBody}/>
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
                                <Button variant="outline-primary" size="lg" block onClick={confirmCode}>인증번호 확인</Button>
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Collapse in={confirmEmail}>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>
                                <h4>마인크래프트 닉네임</h4>
                            </Form.Label>
                            <Form.Control type="text" placeholder="닉네임" size="lg" onChange={inputNickName}/>
                        </Form.Group>
                    </Collapse>

                    <Button variant="outline-success" size="lg" block onClick={clickSignUp}>
                        등록하기
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default SignUp;