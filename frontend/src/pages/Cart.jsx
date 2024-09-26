import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import Card from 'react-bootstrap/Card';

export const Cart = () => {
    const { count } = useContext(CartContext);
    
    const rederizarCarrito = () => {
        return count.map(item => <Card bg="dark" text="info" key={item.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.image}/>
        <Card.Body>
        <Card.Title style={{color:"white"}}>{item.name}</Card.Title>
        <Card.Text style={{color:"white"}}>
        {item.description}
        </Card.Text>
        <div style={{color:"white"}}>{item.quantity} en carrito</div>
        <div style={{color:"white"}}>${item.price}</div>
        </Card.Body>
        </Card> );
    }
        
    return count.length === 0 ? (<h1 style={{color:"black"}}>No hay items en el carrito</h1>) :  <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>{rederizarCarrito()}</div>
}

export default Cart

