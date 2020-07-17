import React, {useEffect, useState} from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import {useParams, useHistory} from 'react-router';
import { ip } from '../key.js';
import axios from 'axios';

function NoticeDetail(){
    const [notice, setNotice] = useState({
        title:'제목없음',
        writer:'admin',
        date:'날짜없음',
        contents:'내용없음',
        image:null
    });
    const {id}=useParams();
    const history = useHistory();

    useEffect(()=>{
        console.log("NoticeDetail")
        axios.get(`${ip}/notice/detail/${id}`)
        .then(res=>{
            console.log(res);
            if(res.data.status === "success"){
                setNotice(res.data.notice);
            }
            else{
                console.log("Notice Detail Fail");
            }
        }).catch(err=>console.log(err));
    },[id])

    function toTheBack(){
        history.goBack();
    }

    return(
        <Container className="mt-4 h-75">
            <Row className="justify-content-center">
                <Col xs="auto">
                    <h1>{notice.title}</h1>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col>
                    <h4>{notice.writer}</h4>
                </Col>
                <Col className="bg-aqua">
                    <h4 style={{ textAlign:'right' }}>{notice.date}</h4>
                </Col>
            </Row>

            <Row className="justify-content-center h-75">
                <Col className="h-100">
                    <div className="contents p-3 h-100">
                        {notice.contents}
                        {notice.image !== null && (
                            <div className="text-center">
                                <Image 
                                src={`${ip}/notice/${notice.image}`} 
                                alt="noticeImage"
                                width="50%"
                                />
                            </div>
                        )}
                    </div>
                </Col>
            </Row>

            <Row className="justify-content-center mt-4">
                <Col xs="12">
                    <Button
                    onClick={toTheBack}
                    variant="outline-success" 
                    block size='lg'>
                        BACK
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default NoticeDetail;