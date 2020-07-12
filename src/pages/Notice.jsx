import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';

function Notice(){
    return(
        <Container className="mt-4">
            <Row>
                <Col className="text-center">
                    <h1>공지사항</h1>
                </Col>
            </Row>
            <Row>
                <Table 
                striped 
                bordered 
                hover 
                variant="dark" 
                size="sm" 
                className="text-center">
                    <thead>
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
                    </tbody>
                </Table>
            </Row>
        </Container>
    )
}

export default Notice;