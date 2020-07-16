import React, {useState} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import {ip} from '../key.js';
import PublicModal from '../components/PublicModal';

function WriterAdmin(){
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
    const [image, setImage] = useState(null);
    const [modalTitle, setModalTitle] = useState('');
    const [modalBody, setModalBody] = useState('');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    function writeTitle(e){
        setTitle(e.target.value);
    }

    function writeContents(e){
        setContents(e.target.value);
    }
    
    function selectFile(e){
        setImage(e.target.files[0])
    }

    function getFileName(date){
        let year = date.getFullYear();
        let month = (1+date.getMonth());
        month = month >= 10? month:'0'+month;
        let day = date.getDate();
        day = day >= 10 ? day: '0'+day;
        let hour = date.getHours();
        hour = hour >= 10 ? hour: '0'+hour;
        let minutes = date.getMinutes();
        minutes = minutes >= 10 ? minutes: '0'+minutes;
        let seconds = date.getSeconds();
        seconds = seconds >= 10 ? seconds: '0'+seconds
        let milliseconds = date.getMilliseconds();
        milliseconds = milliseconds >= 10 ? milliseconds: '0'+milliseconds;
        return year+'-'+month+'-'+day+'-'+hour+'-'+minutes+'-'+seconds+'-'+milliseconds;
    }

    function getFormatDate(date){
        let year = date.getFullYear();
        let month = (1+date.getMonth());
        month = month >= 10? month:'0'+month;
        let day = date.getDate();
        day = day >= 10 ? day: '0'+day;
        return year+'-'+month+'-'+day;
    }

    function onWrite(){
        const nowDate = new Date();
        const fileName = getFileName(nowDate);
        const date = getFormatDate(nowDate);
        var formData = new FormData();
        formData.append("img", image);
        formData.append("title", title);
        formData.append("contents", contents);
        formData.append("fileName", fileName);
        formData.append("date", date);
        axios.post(`${ip}/notice/input`,formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res=>{
            console.log(res)
            if(res.data.status === "success"){

            }
            else{

            }
        }).catch(err=>console.log(err))
    }

    return(
        <>
            <PublicModal
                    close={handleClose} 
                    show={show} 
                    title={modalTitle}
                    body={modalBody}/>
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
                                        <h2 className="text-center">Title : </h2>
                                    </Col>
                                    <Col>
                                        <Form.Control onChange={writeTitle}/>                            
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
                                        onChange={writeContents}
                                        as="textarea" 
                                        rows="10"
                                        style={{ resize:'none' }}/>
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group>
                                <Form.Row>
                                    <Col>
                                        <Form.File
                                        type="file"
                                        accept="Image/*" 
                                        onChange={selectFile} 
                                        label="select Images"/>
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
        </>
    )
}

export default WriterAdmin;