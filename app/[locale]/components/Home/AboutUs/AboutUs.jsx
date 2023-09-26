"use client";
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import styles from './aboutUs.module.scss';

const AboutUs = () => {
    const t = useTranslations("AboutUs");


    return <section className={styles.aboutUsSection}>
        <div className={styles.aboutUs}>
            <Image className={styles.image} src='/about-us.svg' alt='aboutUsImg' width={635} height={1000} />
            <div className={styles.rightside}>
                <div className={styles.mobileContent}>
                <h2 className={styles.title}>{t("title")}</h2>
                <Image className={styles.mobileImage} src='/mobileImage-about-us.svg' alt='mobile image' width={288} height={275} />
                <p className={styles.paragraphOne}>{t("first-part")}</p>
                <p className={styles.paragraphTwo}>{t("second-part")}</p>
                <p className={styles.paragraphThree}>{t("third-part")}</p>
                </div>
            </div>
        </div>
    </section>

};
export default AboutUs;