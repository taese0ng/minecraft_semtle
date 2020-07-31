import React, {useEffect, useState} from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import {useParams, useHistory} from 'react-router';
import { ip } from '../key.js';
import axios from 'axios';
import PublicModal from '../components/PublicModal';

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
    const [delNum, setDelNum] = useState(1);
    const [modalTitle, setModalTitle] = useState('');
    const [modalBody, setModalBody] = useState('');
    const [show, setShow] = useState(false);
    const [status, setStatus] = useState("");
    const handleClose = (status) => {
        setShow(false);
        if(status === "success"){
            history.push({
                pathname: '/',
                state:{

                }
            })
        }
        else if(status === "tokenExpired"){
            history.push({
                pathname: '/admin/login',
                state:{

                }
            })
        }
    }

    useEffect(()=>{
        console.log("NoticeDetail")
        axios.get(`${ip}/notice/detail/${id}`)
        .then(res=>{
            // console.log(res);
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

    function deleteContents(){
        setDelNum(delNum+1);
        // console.log(delNum)
        
        if(delNum >= 7){
            // console.log("Yes")
            axios.delete(`${ip}/notice/delete`,
            {
                data:{
                    noticeID: id
                },
                headers:{
                    'token': sessionStorage.getItem('token')
                }
            }).then(res=>{
                // console.log(res)
                if(res.data.status === "success"){
                    setModalTitle("삭제 완료!");
                    setModalBody("게시물이 삭제가 완료되었습니다.");
                    setShow(true);
                    setStatus("success");
                    
                }else if(res.data.status === "tokenExpired"){
                    setModalTitle("토큰 오류!");
                    setModalBody("관리자 토큰의 유효기간이 만료되었습니다. 로그인을 다시해주세요.");
                    setShow(true);
                    setStatus("tokenExpired")
                    
                }
            }).catch(err=>{
                console.log(err)
            })
        }
    }

    return(
        <>
        <PublicModal
            close={()=>handleClose(status)} 
            show={show} 
            title={modalTitle}
            body={modalBody}/>
        <Container className="mt-4 h-75">
            <Row className="justify-content-center">
                <Col xs={8} className="text-center">
                    <h1>{notice.title}</h1>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col>
                    <h4>{notice.writer}</h4>
                </Col>
                <Col className="bg-aqua">
                    <h4 style={{ textAlign:'right' }}>
                        <span onClick={deleteContents}>{notice.date}</span>
                        </h4>
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

            <Row className="justify-content-center mt-4 mb-5">
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
    </>
    )
}

export default NoticeDetail;