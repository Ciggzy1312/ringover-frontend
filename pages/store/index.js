import Cart from '@/components/Cart'
import Filters from '@/components/Filters'
import Products from '@/components/Products'
import styles from '@/styles/Store.module.scss'
import { useState } from 'react'

const Store = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [costFilter, setCostFilter] = useState([]);
    const [typeFilter, setTypeFilter] = useState([]);


    return (
        <div className={styles.main}>
            <Filters costFilter={costFilter} setCostFilter={setCostFilter} typeFilter={typeFilter} setTypeFilter={setTypeFilter} />
            <Products />
            <Cart />
        </div>
    )
}

export default Store