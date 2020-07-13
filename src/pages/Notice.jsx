import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import {TablePagination} from '../components';

function Notice(){
    return(
        <Container className="mt-4">
            <Row className="justify-content-center">
                <Col xs="auto">
                    <h1>공지사항</h1>
                </Col>
            </Row>
            <Row>
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
                            <th>제목</th>
                            <th>작성자</th>
                            <th>게시일</th>
                        </tr>
                    </thead>
                    <tbody>
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