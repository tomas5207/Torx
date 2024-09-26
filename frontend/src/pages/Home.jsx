import React, { useEffect, useState } from 'react'
import ItemListContainer from '../components/ItemListContainer'
import axios from 'axios'


export const Home = () => {

    const [productsData, setProductsData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/tornillo')
        .then(response => {
        setProductsData(response.data)
        })
        .catch(error => {console.log(error)});
        }, [])
    

return (
    <ItemListContainer greeting="Bienvenido a Torx.com" productsData={productsData}/>
)
}

export default Home