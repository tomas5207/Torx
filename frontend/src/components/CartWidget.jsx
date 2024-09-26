import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () =>{
    const {count} = useContext(CartContext);
    const totalQuantity = count.reduce((total, item) => total + item.quantity, 0);

    return(
        <Link to="/cart">
        <div style={{color: 'white', fontSize:'18px'}}>
            <span><img src="./public/carrito.png" style={{width:'30px' , height: '30px'}}></img> {totalQuantity}</span>  
        </div>
        </Link>
        
    )
}

export default CartWidget;