import styles from '@/styles/Filter.module.scss'
import Image from 'next/image'
import { costFilters, typeFilters, templateFilter, colorFilter } from '@/data/filters'
import fl from '../public/assets/assets/filter.svg'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Filters = ({ costFilter, setCostFilter, typeFilter, setTypeFilter }) => {

    const router = useRouter();

    const handleCost = (max, min) => {
        setCostFilter({ max, min })
        router.push({href: '/store', query: { ...router.query, max, min } })
    }

    const handleType = (type) => {
        setTypeFilter(type)
        router.push({ href: '/store', query: { ...router.query , type } })
    }

    useEffect(()=>{
        router.push({ href: '/store', query: `` });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={styles.main}>

            <div className={styles.heading}>
                <h2 className={styles.title}>Filters</h2>
                <div className={styles.icon}>
                    <Image src={fl} width={40} height={40} alt="" />
                </div>
            </div>

            <div className={styles.filters}>
                <div className={styles.filter}>
                    <h3>Cost</h3>
                    <div className={styles.filter__content}>
                        {costFilters.map((item, index) => (
                            <div className={styles.filter__item} key={index}>
                                <input type="checkbox" checked={costFilter.max === item.max && costFilter.min === item.min} onChange={()=>handleCost(item.max, item.min)} />
                                <label>{item.label}</label>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.filter}>
                    <h3>Colour</h3>
                    <div className={styles.color__content}>
                        {colorFilter.map((item, index) => (
                            <div className={styles.color__block} style={{backgroundColor: `${item}`}} key={index}>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.filter}>
                   <h3>Design Templates</h3>
                    <div className={styles.filter__content}>
                        {templateFilter.map((item, index) => (
                            <div className={styles.filter__item} key={index}>
                                <input type="checkbox"/>
                                <label>{item}</label>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.filter}>
                    <h3>Styles</h3>
                    <div className={styles.filter__content}>
                        {typeFilters.map((item, index) => (
                            <div className={styles.filter__item} key={index}>
                                <input type="checkbox" checked={typeFilter === item} onChange={()=>handleType(item)} />
                                <label>{item}</label>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.filter__btn}>
                    <button>Apply</button>
                </div>
            </div>
        </div>
    )
}

export default Filters