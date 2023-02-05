import TeamCard from '@/components/TeamCard'
import { teams } from '../data/team'
import styles from '@/styles/Team.module.scss'

const Team = () => {

    return (
        <div className={styles.main}>
            <h2 className="title">Without bonding and coordination, every project is a failure. Look at who makes KICKSUP great</h2>

            <div className={styles.team}>
                {teams.map((team, index) => (
                    <TeamCard team={team} key={index} />
                ))}
            </div>

            <h1 className="title">and You!</h1>
        </div>
    )
}

export default Team