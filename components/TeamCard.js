import Image from "next/image"
import fb from "../public/assets/assets/facebook.png"
import lk from "../public/assets/assets/linkedin.png"
import md from "../public/assets/assets/medium.png"
import dr from "../public/assets/assets/nba.png"
import styles from '@/styles/TeamCard.module.scss'

const TeamCard = ({ team }) => {
    return (
        <div className={styles.card}>

            <div className={styles.image}>
                <Image className="" src={team.image} alt="Landscape picture" width={250} height={250} />
            </div>

            <div className={styles.content}>
                <h2 className="card-title">{team.name}</h2>
                <p className="card-text">{team.role}</p>
            </div>

            <div className={styles.links}>
                <ul className="list-inline">
                    {team.social.facebook && <li className="list-inline-item"><Image src={fb} alt="" width={30} height={30} /></li>}
                    {team.social.linkedin && <li className="list-inline-item"><Image src={lk} alt="" width={30} height={30} /></li>}
                    {team.social.medium && <li className="list-inline-item"><Image src={md} alt="" width={30} height={30} /></li>}
                    {team.social.dribbble && <li className="list-inline-item"><Image src={dr} alt="" width={30} height={30} /></li>}
                </ul>
            </div>
        </div>
    )
}

export default TeamCard