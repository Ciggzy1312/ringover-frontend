import styles from '@/styles/Contact.module.scss'

const Contact = () => {

    return (
        <div className={styles.main}>
            
            <div className={styles.card}>
                <h2>REACH US AT</h2>

                <div className={styles.content}>

                    <div className={styles.title}>
                        <h3>support@kicksup.com</h3>
                        <p>for any technical support</p>
                    </div>

                    <div className={styles.title}>
                        <h3>info@kicksup.com</h3>
                        <p>for more information</p>
                    </div>

                    <div className={styles.title}>
                        <h3>feedback@kicksup.com</h3>
                        <p>to send any feedback</p>
                    </div>

                    <div className={styles.title}>
                        <h3>jobs@kicksup.com</h3>
                        <p>to work with us</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact