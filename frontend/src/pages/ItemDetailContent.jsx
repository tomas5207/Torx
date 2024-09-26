import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import ItemCount from '../components/ItemCount'


export const ItemDetailContent = () => {
    const [productsData, setProductsData] = useState([])

    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/tornillo/${id}`)
        .then(response => {
        setProductsData(response.data)
        })
        .catch(error => {console.log(error)})
        }, [id])

        return(
        <Card bg="dark" text="info" key={productsData.id} style={{ width: '22rem' }}>
            <Card.Img variant="top" src={productsData.imagen}/>
            <Card.Body>
            <Card.Title style={{color:"white"}}>{productsData.nombre}</Card.Title>
            <div style={{ color: "white" }}><strong> Cajas en venta: </strong>{productsData.stock}</div>
            <div style={{ color: "white" }}><strong> Piezas por caja: </strong> {productsData.piezas}</div>
            <div style={{ color: "white" }}><strong>Tamaño en mm: </strong>{productsData.tamaño}</div>
            <div style={{ color: "white" }}><strong>Puntero:</strong> {productsData.puntero}</div>
            <div style={{ color: "white" , fontSize:'14px'}}>{productsData.descripción}</div>
            <div style={{ color: "white" }}>$ {productsData.precio}</div>
            <ItemCount 
            productId = {productsData.id}
            productName = {productsData.nombre}
            productImage = {productsData.imagen}
            productDescription = {productsData.descripción}
            productSize = {productsData.tamaño}
            productPieces = {productsData.piezas}
            productPointer = {productsData.puntero}
            productStock = {productsData.stock}
            productPrice = {productsData.precio}
            />
            </Card.Body>
        </Card> 
        )

}

export default ItemDetailContent