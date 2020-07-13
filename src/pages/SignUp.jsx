import React,{useState} from 'react';
import {Form, Button, Container,Row, Col, InputGroup, FormControl,Collapse} from 'react-bootstrap';
import PublicModal from '../components/PublicModal';
import axios from 'axios'
import {ip} from '../key.js';

function SignUp(){
    const [timeOut, setTimeOut] = useState('00:00');
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
        // console.log(email);
    }

    function inputEmailCode(e){
        setEmailCode(e.target.value);
        // console.log(emailCode);
    }

    function inputNickName(e){
        setNickName(e.target.value);
        // console.log(nickName);
    }

    function confirmCode(){
        axios.post(`${ip}/input-code`,{
            code: emailCode,
            email: email+"@kumoh.ac.kr"
        }).then(res=>{
            console.log(res);
            if(res.data.status==="success"){
                setConfirmEmail(true);
                setModalTitle("인증 성공!");
                setModalBody("인증번호 인증에 성공하였습니다. 닉네임을 설정해주세요!");
                setShow(true);
            }
            else{
                setConfirmEmail(false);
                setNickName('');
                setModalTitle("인증 실패!");
                setModalBody("인증번호 인증에 실패하였습니다. 입력란을 확인하세요!");
                setShow(true);
            }
        }).catch(err=>{
            console.log(err);
            setConfirmEmail(false);
            setNickName('');
        });
    }

    function sendCode(){
        axios.post(`${ip}/mail-send`,
        {
            email : email+'@kumoh.ac.kr'
        }).then(res=>{
            console.log(res);
            if(res.data.status === "success"){
                // let time = parseInt(res.data.counter) * 60;
                setModalTitle("인증번호 발송 성공!");
                setModalBody("이메일에 인증번호를 전송하였습니다. 인증하세요!");
                setShow(true);
                let time = 6
                var startTime = setInterval(function(){
                    if(time===0){
                        clearInterval(startTime);
                        setModalTitle("인증시간 초과!");
                        setModalBody("인증시간이 초과되었습니다! 인증요청을 다시하세요!");
                        setShow(true);
                    }
                    setTimeOut(`${parseInt(time/60) < 10 ? '0'+parseInt(time/60) : parseInt(time/60)}:${time%60 < 10 ?'0'+time%60: time%60}`);
                    time--;
                },1000);
            }
            else{
                setModalTitle("인증번호 발송 실패!");
                setModalBody("인증번호 발송에 실패하였습니다. 입력란을 확인하세요!");
                setShow(true);
            }
        }).catch(err=>{
            setModalTitle("인증번호 발송 실패!");
            setModalBody("인증번호 발송에 실패하였습니다. 입력란을 확인하세요!");
            setShow(true);
            console.log(err);
        })
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
        else{
            axios.post(`${ip}/input-nick`,{
                email: email+"@kumoh.ac.kr",
                nick: nickName
            }).then(res=>{
                console.log(res);
                if(res.data.status === "success"){
                    setModalTitle("등록 성공!");
                    setModalBody("계정 등록에 성공하였습니다! 즐거운 플레이하세요!");
                    setShow(true);
                }
                else{
                    setModalTitle("등록 실패!");
                    setModalBody("KUMO CRAFT 등록에 실패하였습니다. 다시 확인해보세요!");
                    setShow(true);
                }
            }).catch(err=>{
                console.log(err);
                setModalTitle("등록 실패!");
                setModalBody("KUMO CRAFT 등록에 실패하였습니다. 다시 확인해보세요!");
                setShow(true);
            });
        }
    }

    return(
        <>
            <PublicModal
                close={handleClose} 
                show={show} 
                title={modalTitle}
                body={modalBody}/>
            <Container className="mt-4">
                <Row className="justify-content-center">
                    <Col xs="auto">
                        <h1>Sign Up</h1>
                    </Col>
                </Row>
                <Form className="mt-5">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>
                            <h3>Email Address</h3>
                        </Form.Label>
                        <Form.Row>
                            <Col md={5}>
                                <Form.Control size="lg" type="email" placeholder="Email" onChange={inputEmail}/>
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
                                <Button 
                                variant="outline-primary" 
                                size="lg" 
                                block
                                onClick={sendCode}>
                                    accept
                                </Button>
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>
                            <h3>Confirm Code</h3>
                        </Form.Label>
                        <Form.Row>
                            <Col xs={10} md={6}>
                                <Form.Control type="number" placeholder="Verification Code" size="lg" onChange={inputEmailCode}/>
                            </Col>
                            <Col xs={2} className='my-auto text-center'>
                                <h5>{timeOut}</h5>
                            </Col>
                            <Col xs={12} md={4} className="mt-2 mt-md-0">
                                <Button variant="outline-primary" size="lg" block onClick={confirmCode}>Confirm</Button>
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Collapse in={confirmEmail}>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>
                                <h3>Minecraft NickName</h3>
                            </Form.Label>
                            <Form.Control type="text" placeholder="NickName" size="lg" onChange={inputNickName}/>
                        </Form.Group>
                    </Collapse>

                    <Button variant="outline-success" size="lg" block onClick={clickSignUp}>
                        Sign Up
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default SignUp;