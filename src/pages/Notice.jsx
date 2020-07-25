import React,{useState, useEffect} from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import {TablePagination} from '../components';
import {useHistory, useParams} from 'react-router';
import axios from 'axios';
import { ip } from '../key.js';

function Notice(){
    const [admin, setAdmin] = useState(1);
    const [notices, setNotices] = useState([]);
    const history = useHistory();
    const {page} = useParams();
    const [pagiNum, setPagiNum] = useState(1);

    useEffect(()=>{
        axios.get(`${ip}/notice/show/${parseInt(page)+1}`)
        .then(res=>{
            // console.log(res.data.notices);
            if(res.data.status==="success"){
                setNotices(res.data.notices);
                setPagiNum(res.data.count);
            }else{
                console.log("Notice Fail");
            }
        }).catch(err=>console.log(err));
    },[page])

    function adminPage(){
        setAdmin(admin+1);
        // console.log(pagiNum);
        if(admin === 7){
            // console.log("admin")
            history.push({
                pathname: '/admin/login',
                state:{

                }
            })
        }
    }

    function enterNotice(id){
        history.push({
            pathname: `/notice/detail/id=${id}`,
            state:{

            }
        })
    }

    function chagePage(pageNum){
        history.push({
            pathname: `/notice/page=${pageNum}`,
            state:{

            }
        })
    }

    return(
        <Container className="mt-4">
            <Row className="justify-content-center">
                <Col xs="auto">
                    <h1>Notice</h1>
                </Col>
            </Row>
            <Row className="mt-5 justify-content-center">
                <Col xs={12}>
                    <Table 
                    striped 
                    bordered 
                    hover 
                    variant="light" 
                    size="sm" 
                    className="text-center">
                        <thead className="bg-success text-white">
                            <tr>
                                <th>No.</th>
                                <th>Title</th>
                                <th onClick={adminPage}>Writer</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {notices.map((notice)=>(
                                <tr key={notice.num}>
                                    <td>{notice.num}</td>
                                    <td 
                                    style={{ cursor:'pointer' }}
                                    onClick={()=>enterNotice(notice._id)}>
                                        {notice.title}
                                    </td>
                                    <td>{notice.writer}</td>
                                    <td>{notice.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row className="justify-content-center mb-5">
                <Col className="jusify-content-center">
                    <TablePagination 
                    activePage ={page}
                    changePage={chagePage}
                    num={pagiNum}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Notice;