import { useState } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const ItemCount = ({productId, productName, productImage, productDescription, productSize, productPieces, productPointer, productStock, productPrice}) => {
    const [countItem, setCountItem] = useState(0);
    const {count,setCount} = useContext(CartContext);

    const handleAdd = () =>{
        setCountItem(countItem + 1);
    }

    const handleRemove = () =>{
        if(countItem > 0){
            setCountItem(countItem - 1);
        }
    }

    const handleAddProductToCart = () => {
        const productoExistente = count.find(item => item.id === productId);
        const precio = productPrice * countItem;
        if (productoExistente) {
            setCount(count.map(item => item.id === productId ? {...item, quantity: item.quantity + countItem, price: (item.quantity + countItem) * productPrice  } : item));
        } else {
            setCount([...count, {id: productId, name: productName,image: productImage, description: productDescription, size: productSize, pieces: productPieces, pointer: productPointer, stock: productStock ,price: precio ,quantity: countItem}]);
        }

        setCountItem(1);
    }

    const handleRemoveProductToCart = () => {
        setCount(count.filter(item => item.id !== productId));
    }

    return(
    <div style={{width:'100%'}}>
    <div style={{width:'65%',display:"flex", justifyContent:"space-between", margin:"auto"}}>
        <Button onClick={handleAdd}>+</Button>
        <span>{countItem}</span>
        <Button onClick={handleRemove}>-</Button>
    </div>
    <br/>
    <Button onClick={handleAddProductToCart}>Agregar al Carrito</Button>
    <br/>
    <br/>
    <Button onClick={handleRemoveProductToCart}> Eliminar del Carrito</Button>
    </div>
    )
}

export default ItemCount