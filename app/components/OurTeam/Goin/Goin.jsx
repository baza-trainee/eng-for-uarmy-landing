"use client";
import { useTranslations } from "next-intl";
import Image from 'next/image';
import MainLink from "../../commonComponents/MainLink/MainLink";
import styles from './Goin.module.scss';

const Goin = () => {
    const t = useTranslations("OurTeam");

    return (
        <section className={styles.goin}>
            <strong className={styles.goin__title}>{t("join")}</strong>

            <p className={styles.goin__desc}>{t("joinOffer")}</p>

            <Image src='/large-arrow.svg'
                alt='arrow icon'
                width={96}
                height={96}
                className={styles.goin__img} />

            <div className={styles.goin__wrapper}>
                <MainLink
                    url='https://www.work.ua/jobs/by-company/2559879/' 
                    aria-label="Work.ua link">
                    {t("vacancies")}
                </MainLink>
                
                <MainLink path='contact?action=volunteer'>{t("volunteer")}</MainLink>
            </div>
        </section>
    )
}  

export default Goin;