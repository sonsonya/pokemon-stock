import React, { useContext, useEffect, useState } from 'react'
import { observer } from 'mobx-react';
import { Row, Col, Table, Form } from 'react-bootstrap';
import { ProductStoreContext } from '../store/product';

const List = observer(() => {
    const productStore = useContext(ProductStoreContext);

    const [data, setData] = useState<any[]>([]);

    useEffect(()=>{
        productStore.getProduct()
        setData(productStore.products)
    },[])

    return (
        <Row>
            <Col lg={3}></Col>
            <Col lg={6} xs={12} style={{margin: '16px'}}>
                <div>Stok Pokémon</div>
                <Form.Control
                    placeholder='Cari Pokemon'
                    type="password"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                />
                <Table  className='col-xs-12' responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Stok</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(product=>(
                        <tr>
                            <td>{product.pokemon.name}</td>
                            <td>{product.slot} pcs</td>
                        </tr>
                    ))}
                </tbody>
                </Table>
            </Col>
            <Col lg={3}></Col>
        </Row>
    )
})

export default List