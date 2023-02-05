import styles from '@/styles/Cart.module.scss'
import Image from 'next/image'
import ct from '../public/assets/assets/cart.svg'

const Cart = () => {
    return (
        <div className={styles.main}>

            <div className={styles.heading}>
                <h2 className={styles.title}>Cart</h2>
                <div className={styles.icon}>
                    <Image src={ct} width={40} height={40} alt="" />
                </div>
            </div>

            <div className={styles.cart}>
                <h2>Cart is empty</h2>
            </div>

            <div className={styles.footer}>
                <div className={styles.details}>
                    <div className={styles.detail}>
                        <div className={styles.icon}>
                            <Image src={ct} width={20} height={20} alt="" />
                        </div>
                        <h4 className={styles.title}>Home</h4>
                    </div>

                    <div className={styles.detail}>
                        <div className={styles.icon}>
                            <Image src={ct} width={20} height={20} alt="" />
                        </div>
                        <h4 className={styles.title}>Select Date</h4>
                    </div>
                </div>

                <div className={styles.cart__btn}>
                    <button>Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default Cart