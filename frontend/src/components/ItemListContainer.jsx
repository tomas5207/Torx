import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'



const ItemListContainer = ({greeting, productsData}) =>{
    
    return(
        <div style={{fontWeight: "bold",  textAlign:"center", color:"black"}}>
            <div style={{fontSize: "3rem"}}>{greeting}</div>
            <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
                {
                    productsData.map(products =>{
                        console.log(products)
                        return(
                            <Link to={`/tornillo/${products.id}`}>
                            <Card bg="dark" text="info" key={products.id} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={products.imagen}/>
                            <Card.Body>
                            <Card.Title style={{color:"white"}}>{products.nombre}</Card.Title>
                            <div style={{ color: "white" }}><strong>Cajas en venta:</strong> {products.stock}</div>
                            <div style={{ color: "white" }}><strong>Piezas por caja:</strong> {products.piezas}</div>
                            <div style={{ color: "white" }}><strong>Tamaño en mm: </strong> {products.tamaño}</div>
                            <div style={{ color: "white" }}><strong> Puntero:</strong> {products.puntero}</div>
                            <div style={{ color: "white" }}>$ {products.precio}</div>
                            </Card.Body>
                            </Card> 
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ItemListContainer;