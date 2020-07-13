import React, {useEffect, useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function NoticeDetail(props){
    const [title, setTitle] = useState('Title');

    useEffect(()=>{
        console.log("NoticeDetail")
    },[])

    return(
        <Container className="mt-4 h-75">
            <Row className="justify-content-center">
                <Col xs="auto">
                    <h1>{title}</h1>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col>
                    <h4>Admin</h4>
                </Col>
                <Col className="bg-aqua">
                    <h4 style={{ textAlign:'right' }}>2020.07.14</h4>
                </Col>
            </Row>

            <Row className="justify-content-center h-100">
                <Col className="h-100">
                    <div className="contents p-3 h-75">
                        ddddddddd
                        ddd
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default NoticeDetail;