import React, {useState} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {useHistory} from 'react-router';
import PublicModal from '../components/PublicModal';
import axios from 'axios';
import {ip} from '../key.js';

function LoginAdmin(){
    const history = useHistory();
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [modalTitle, setModalTitle] = useState('');
    const [modalBody, setModalBody] = useState('');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    function inputID(e){
        setId(e.target.value);
    }

    function inputPW(e){
        setPw(e.target.value);
    }

    function login(){
        axios.post(`${ip}/admin/login`,{
            id: id,
            pw: pw
        }).then(res=>{
            console.log(res);
            if(res.data.status === "success"){
                history.push({
                    pathname: '/admin/write',
                    state:{

                    }
                })    
            }
            else{
                setModalTitle("로그인 오류!");
                setModalBody("아이디 또는 비밀번호가 옳지 않습니다.");
                setShow(true);
            }
        }).catch(err => {
            console.log(err);
        })

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
                    <Col xs={12} sm={6} className="text-center text-sm-right">
                        <h1>Admin</h1>
                    </Col>
                    <Col xs={12} sm={6} className="text-center text-sm-left">
                        <h1>Login</h1>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col>
                        <Form>
                            <Form.Group>
                                <Form.Row className="justify-content-center">
                                    <Col xs={3} sm={2} className="text-right">
                                        <Form.Label>
                                            <h2>ID</h2>
                                        </Form.Label>
                                    </Col>
                                    <Col xs={9} sm={7}>
                                        <Form.Control placeholder="ID" onChange={inputID}/>
                                    </Col>
                                </Form.Row>

                                <Form.Row className="justify-content-center">
                                    <Col xs={3} sm={2} className="text-right">
                                        <Form.Label>
                                            <h2>P/W</h2>
                                        </Form.Label>
                                    </Col>
                                    <Col xs={9} sm={7}>
                                        <Form.Control type="password" placeholder="P/W" onChange={inputPW}/>
                                    </Col>
                                </Form.Row>

                                <Form.Row className="justify-content-center">
                                    <Col xs={7}>
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
        </>
    )
}

export default LoginAdmin;