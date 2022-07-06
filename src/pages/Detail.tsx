import React from 'react'
import { observer } from 'mobx-react';
import { Container, Row, Col, Button, Table, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import Swal from 'sweetalert2'

const Detail = observer(() => {
    const navigate = useNavigate()
    const {name, stock} = useParams()

    console.log(name)
    console.log(stock)
    const updateHandler = async () => {
        const { value: formValues } = await Swal.fire({
            showCancelButton: true,
            title: 'Update Stock',
            html:
              '<input id="swal-input1" class="swal2-input">' +
              '<input id="swal-input2" class="swal2-input">',
            focusConfirm: false,
            // preConfirm: () => {
            //   return [
            //     document.getElementById('swal-input1').value,
            //     document.getElementById('swal-input2').value
            //   ]
            // }
          })
          
          if (formValues) {
            // Swal.fire(JSON.stringify(formValues))
            navigate('/confirm')
          }
    }

    return (
        <Container>
            <Row style={{marginTop: '40px'}}>
                <Col lg={10}>
                <div className="text-primary-color" onClick={()=>navigate('/')}><BsArrowLeft className='icon-back' />Stok Pokémon</div>
                </Col>
                <Col>
                    <Button variant="light" onClick={()=>updateHandler()}>Update Stok</Button>{' '}
                </Col>
                <div className="title" style={{marginBottom: '40px'}}>{name}</div>
                <div className="text-primary-black">Sisa stock</div>
                <div className="text-big-black">{stock} pcs</div>
                <div className="text-bold-black">Riwayat Stok</div>
                <div className="text-primary-black">Satuan stok dalam pcs</div>
                <Table  className='col-xs-12 mt-4' responsive>
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
                            <td>“Stock Awal”</td>
                            <td>+{stock}</td>
                            <td>{stock}</td>
                        </tr>
                        <tr>
                            <td>1 Apr 2021, 08:00</td>
                            <td>Stock Awal</td>
                            <td></td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
        </Container>
    )
})

export default Detail