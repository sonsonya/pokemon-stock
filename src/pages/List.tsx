import React, { useContext, useEffect, useState } from 'react'
import { observer } from 'mobx-react';
import { Row, Col, Table, Form } from 'react-bootstrap';
import { ProductStoreContext } from '../store/product';
import { useNavigate } from 'react-router-dom';

const List = observer(() => {
    const navigate = useNavigate()

    const productStore = useContext(ProductStoreContext);

    const [data, setData] = useState<any[]>([]);

    function capitalizeFirstLetter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(()=>{
        productStore.getProduct()
    })

    useEffect(()=>{
        setData(productStore.products)
    },[productStore.products, productStore.getProduct()])

    return (
        <Row>
            <Col lg={3}></Col>
            <Col lg={6} xs={12} style={{margin: '16px'}}>
                <div className="title color-black" style={{margin : '40px 0px'}}>Stok Pokémon</div>
                <Form.Control
                    placeholder='Cari Pokemon'
                    type="password"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                    className='searchbox'
                />
                <Table  className='col-xs-12' responsive>
                <thead>
                    <tr>
                        <th className="text-primary-black">Name</th>
                        <th className="text-primary-black">Stok</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(product=>(
                        <tr onClick={() => navigate(`/detail/${capitalizeFirstLetter(product.pokemon.name)}/${product.slot}`)}>
                            <td className="text-primary-color">{capitalizeFirstLetter(product.pokemon.name)}</td>
                            <td className="text-primary-black">{product.slot} pcs</td>
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