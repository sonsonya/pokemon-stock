import React from 'react'
import { Row, Col, Table, Form, Button } from 'react-bootstrap';
import { observer } from 'mobx-react';

const Confirm = observer(() => {
    return (
        <Row>
            <Col lg={3}></Col>
            <Col lg={6} xs={12} style={{margin: '16px'}}>
                <div>Konfirmasi update stok</div>
                <div>Selisih</div>
                <div>+533 pcs</div>
                <Row>
                    <Col lg={6} xs={6}>
                        <div>Di sistem</div>
                        <div>10 pcs</div>
                    </Col>
                    <Col lg={6} xs={6}>
                        <div>Hasil update stok</div>
                        <div>543 pcs</div>
                    </Col>
                </Row>
                <Table  className='col-xs-12' responsive>
                <thead>
                    <tr>
                        <th>Keterangan</th>
                        <th>Detail</th>
                        <th>Jumlah</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Hasil update stok</td>
                        <td>3 pcs, 45 lusin (12s)</td>
                        <td>543 pcs</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Total hasil stok opname</td>
                        <td>543 pcs</td>
                    </tr>
                </tbody>
                </Table>
                <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Catatan</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Contoh stok awal"/>
                </Form.Group>
                </Form>
                <div className='d-flex justify-content-end' style={{gap: '8px'}}>
                    <Button variant="success">Simpan</Button>{' '}
                    <Button variant="light">Batal</Button>{' '}
                </div>
            </Col>
            <Col lg={3}></Col>
        </Row>
    )
})

export default Confirm