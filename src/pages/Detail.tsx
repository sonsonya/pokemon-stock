import React from 'react'
import { observer } from 'mobx-react';
import { Container, Row, Col, Button, Table, Form } from 'react-bootstrap';

const Detail = observer(() => {
    return (
        <Container>
            <Row >
                <Col lg={10}>
                    <div>Pikachu</div>
                </Col>
                <Col>
                    <Button variant="light">Update Stok</Button>{' '}
                </Col>
                <div>+533 pcs</div>
                <div>Sisa stock</div>
                <div>543 pcs</div>
                <div>Riwayat Stok</div>
                <div>Satuan stok dalam pcs</div>
                <Table  className='col-xs-12' responsive>
                    <thead>
                        <tr>
                            <th>Waktu</th>
                            <th>Kegiatan</th>
                            <th>Catatan</th>
                            <th>Jmlh</th>
                            <th>Stok</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2 Apr 2021, 08:00</td>
                            <td>Update stok</td>
                            <td>“Cek stok di lemari”</td>
                            <td>+533</td>
                            <td>543</td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
        </Container>
    )
})

export default Detail