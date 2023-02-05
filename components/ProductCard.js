import styles from "@/styles/Products.module.scss";
import Image from "next/image";

const ProductCard = ({ product }) => {
    return (
        <div className={styles.product}>
            <div className={styles.image}>
                <Image className="" src={product.image} alt="Landscape picture" width={150} height={150} />
            </div>

            <div className={styles.content}>
                <h2 className="card-title">{product.title}</h2>
            </div>

            <div className={styles.footer}>
                <div className={styles.price}>Rs. {product.price} /-</div>
                <div className={styles.rating}>{product.rating}</div>
            </div>
        </div>
    )
}

export default ProductCard