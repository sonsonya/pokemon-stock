import React from 'react'
import { Row, Col, Table, Form, Button } from 'react-bootstrap';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';

const Confirm = observer(() => {
    const navigate = useNavigate()
    
    return (
        <Row>
            <Col lg={3}></Col>
            <Col lg={6} xs={12} style={{margin: '16px'}}>
                <div className="title" style={{margin: '40px 0px'}}>Konfirmasi update stok</div>
                <div>Selisih</div>
                <div className="text-big-black">+533 pcs</div>
                <Row>
                    <Col lg={6} xs={6}>
                        <div>Di sistem</div>
                        <div className="text-middle-black">10 pcs</div>
                    </Col>
                    <Col lg={6} xs={6}>
                        <div>Hasil update stok</div>
                        <div className="text-middle-black">543 pcs</div>
                    </Col>
                </Row>
                <Table className='col-xs-12 mt-4' responsive>
                <thead>
                    <tr>
                        <th className="text-primary-black">Keterangan</th>
                        <th className="text-primary-black">Detail</th>
                        <th className="text-primary-black">Jumlah</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-primary-color">Hasil update stok</td>
                        <td>3 pcs, 45 lusin (12s)</td>
                        <td>543 pcs</td>
                    </tr>
                    <tr>
                        <td className="text-primary-color" colSpan={2}>Total hasil stok opname</td>
                        <td className="text-primary-black">543 pcs</td>
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
                    <Button variant="success" onClick={() => navigate('/detail')}>Simpan</Button>{' '}
                    <Button variant="light" onClick={() => navigate('/')}>Batal</Button>{' '}
                </div>
            </Col>
            <Col lg={3}></Col>
        </Row>
    )
})

export default Confirm