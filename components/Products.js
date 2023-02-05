import Image from "next/image";
import styles from "@/styles/Products.module.scss";
import icon from '../public/assets/assets/search.svg';
import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import Link from "next/link";


const Products = () => {
    return (
        <div className={styles.main}>
            <div className={styles.heading}>
                <h2 className={styles.title}>Shoes</h2>
                <div className={styles.icon}>
                    <Image src={icon} width={30} height={30} alt="" />
                    <button>Sort By</button>
                </div>
            </div>

            <div className={styles.products}>
                {products.map((product, index) => (
                    <div className={styles.product} key={index}>
                        <Link href={`/store/${index}`}>
                            <ProductCard product={product} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products