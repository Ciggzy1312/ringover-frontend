import styles from '@/styles/Navbar.module.scss'
import Image from 'next/image'
import logo from '../public/assets/assets/websitelogo.png'
import user from '../public/assets/assets/user.svg'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className={styles.main}>

            <div className=''>
                <Image src={logo} width={50} height={50} alt="" />
            </div>

            <div className={styles.navbar}>
                <ul className={""}>
                    <li className={styles.navbar__item}><Link href={`/`}>Home</Link></li>
                    <li className={styles.navbar__item}><Link href={`/journey`}>The Journey</Link></li>
                    <li className={styles.navbar__item}><Link href={`/team`}>Team</Link></li>
                    <li className={styles.navbar__item}><Link href={`/store`}>Store</Link></li>
                    <li className={styles.navbar__item}><Link href={`/contact`}>Contact</Link></li>
                </ul>
            </div>

            <div className={styles.user}>
                <div className=''>
                    <Image src={user} width={25} height={25} alt="" />
                </div>
                <div className=''>Username</div>
            </div>
        </div>
    )
}

export default Navbar