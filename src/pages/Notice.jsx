import React,{useState} from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import {TablePagination} from '../components';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router';

function Notice(){
    const [admin, setAdmin] = useState(1);
    const history = useHistory();

    function adminPage(){
        setAdmin(admin+1);
        console.log(admin);
        if(admin === 7){
            console.log("admin")
            history.push({
                pathname: '/admin/login',
                state:{

                }
            })
        }
    }

    return(
        <Container className="mt-4">
            <Row className="justify-content-center">
                <Col xs="auto">
                    <h1>Notice</h1>
                </Col>
            </Row>
            <Row className="mt-5">
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
                        <tr>
                            <td>1</td>
                            <td>
                                <Link style={{ textDecoration:'none' }} to="/notice/noticeDetail">
                                    KUMO CRAFT 서버 오픈하였습니다.
                                </Link>
                            </td>
                            <td>관리자</td>
                            <td>2020.07.12</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>KUMO CRAFT 서버 오픈하였습니다.</td>
                            <td>관리자</td>
                            <td>2020.07.12</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>KUMO CRAFT 서버 오픈하였습니다.</td>
                            <td>관리자</td>
                            <td>2020.07.12</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>KUMO CRAFT 서버 오픈하였습니다.</td>
                            <td>관리자</td>
                            <td>2020.07.12</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>KUMO CRAFT 서버 오픈하였습니다.</td>
                            <td>관리자</td>
                            <td>2020.07.12</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>KUMO CRAFT 서버 오픈하였습니다.</td>
                            <td>관리자</td>
                            <td>2020.07.12</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>KUMO CRAFT 서버 오픈하였습니다.</td>
                            <td>관리자</td>
                            <td>2020.07.12</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>KUMO CRAFT 서버 오픈하였습니다.</td>
                            <td>관리자</td>
                            <td>2020.07.12</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>KUMO CRAFT 서버 오픈하였습니다.</td>
                            <td>관리자</td>
                            <td>2020.07.12</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>KUMO CRAFT 서버 오픈하였습니다.</td>
                            <td>관리자</td>
                            <td>2020.07.12</td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
            <Row className="justify-content-center">
                <TablePagination num="150"/>
            </Row>
        </Container>
    )
}

export default Notice;