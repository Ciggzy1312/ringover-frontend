import styles from "@/styles/Product.module.scss";
import Image from "next/image";
import Link from "next/link";
import icon from '../public/assets/assets/back.svg';

const ProductPage = ({ product }) => {
    return (
        <div className={styles.product}>

            <div className={styles.back}>
                <Link href={`/store`}><Image className="" src={icon} alt="Landscape picture" width={30} height={30} /></Link>
            </div>

            <div className={styles.content}>

                <h2>Your design space</h2>

                <div className={styles.details}>
                    <div className={styles.img__section}>

                        <div className={styles.img}>
                            <Image className="" src={product.image} alt="Landscape picture" width={350} height={350} />
                        </div>

                        <div className={styles.img__list}>
                            <ul>
                                <li><Image className="" src={product.image} alt="Landscape picture" width={180} height={180} /></li>
                                <li><Image className="" src={product.image} alt="Landscape picture" width={180} height={180} /></li>
                                <li><Image className="" src={product.image} alt="Landscape picture" width={180} height={180} /></li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.desc}>
                        <div>
                            <h2>{product.title}</h2>
                            <p>By KICKSUP</p>
                        </div>

                        <div>
                            <h4>{product.rating}</h4>
                            <p>80 reviews</p>
                        </div>

                        <div>
                            <h3>Rs. {product.price} /-</h3>
                        </div>

                        <div>
                            <div className={styles.front}>
                                <h3>Front</h3>

                                <div className={styles.boxes}>
                                    <ul>
                                        <li><div></div></li>
                                        <li><div></div></li>
                                        <li><div></div></li>
                                    </ul>
                                </div>
                            </div>

                            <div className={styles.front}>
                                <h3>Middle</h3>

                                <div className={styles.boxes}>
                                    <ul>
                                        <li><div></div></li>
                                        <li><div></div></li>
                                        <li><div></div></li>
                                    </ul>
                                </div>
                            </div>

                            <div className={styles.front}>
                                <h3>Back</h3>

                                <div className={styles.boxes}>
                                    <ul>
                                        <li><div></div></li>
                                        <li><div></div></li>
                                        <li><div></div></li>
                                    </ul>
                                </div>
                            </div>

                            <div className={styles.front}>
                                <h3>Sole</h3>

                                <div className={styles.boxes}>
                                    <ul>
                                        <li><div></div></li>
                                        <li><div></div></li>
                                        <li><div></div></li>
                                    </ul>
                                </div>
                            </div>

                            <div className={styles.size}>
                                <h3>Size</h3>

                                <div className={styles.boxes}>
                                    <ul>
                                        <li><div>7</div></li>
                                        <li><div>8</div></li>
                                        <li><div>9</div></li>
                                        <li><div>10</div></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.footer}>
                    <div className={styles.rating}>
                        <p>Rate product</p>
                    </div>

                    <div className={styles.btn}>
                        <button>Share design</button>
                        <button>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage