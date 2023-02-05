import Cart from '@/components/Cart'
import ProductPage from '@/components/ProductPage'
import styles from '@/styles/Product.module.scss'
import { useState } from 'react'
import { products } from '@/data/products'

const Product = () => {

    const [product, setProduct] = useState(products[1])
    const [cart, setCart] = useState([])
    const [filters, setFilters] = useState([])


    return (
        <div className={styles.main}>
            <ProductPage product={product} />
            <Cart />
        </div>
    )
}

export default Product