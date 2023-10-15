'use client'
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useEffect, useState } from "react";
import mediaEng from "@/app/[locale]/libs/fakeMediaListEng";
import medias from "@/app/[locale]/libs/fakeMediaList";
import MediaList from "./MediaList";
import styles from "./Media.module.scss";

const Media = () => {
    const t = useTranslations("Media");
    const locale = useLocale();
    const [mediaList, setMediaList] = useState([]);
    const [currentList, setCurrentList] = useState([]);
    const [screenWidth, setScreenWidth] = useState(1280)

    useEffect(() => {
         if (locale === "en") {
             setMediaList(mediaEng)
        } else {
             setMediaList(medias)
        } 
        const innerWidth = window.innerWidth
        setScreenWidth(innerWidth)
    
    }, [])

    useEffect(() => {
        const newMedia = screenWidth < 1280 ? mediaList.slice(0, 3) : mediaList.slice(0, 4)
        setCurrentList(newMedia) 
    }, [screenWidth, mediaList])
    

    const unWrapList = () => {
        if (mediaList.length > currentList.length) {
            const newList = screenWidth < 1280 ?
                mediaList.slice(currentList.length, currentList.length + 3) :
                mediaList.slice(currentList.length, currentList.length + 4)
            const newMedia = currentList.concat(newList)
            setCurrentList(newMedia)
        }
    }

    const wrapList = () => {
        if (mediaList.length === currentList.length) {
            const newMedia = screenWidth < 1280 ? mediaList.slice(0, 3) : mediaList.slice(0, 4)
            setCurrentList(newMedia) 
        }
    }
   
    return <section className={styles.section}>
        <span className={styles.anchor} id='media'></span>
        <div className={styles.mediaSection}>
            <h2 className={styles.mediaTitle}>{t("title")}</h2>
            <MediaList list={currentList} />
            {mediaList.length === currentList.length ?
                <Link href={`/${locale}#media`} style={{margin: '0 auto'}}>
                    <svg tabIndex={0} onClick={(e) => {
                        e.currentTarget.blur()
                        wrapList()
                        }} className={styles.arrowBtn} xmlns="http://www.w3.org/2000/svg" width="78" height="41" viewBox="0 0 78 41" fill="none">
                        <path d="M77 40L39 2L1 40" stroke="#231F20" strokeWidth="2" />
                    </svg>
                </Link>  
                 :
                <svg tabIndex={0} onClick={(e) => {
                    e.currentTarget.blur()
                    unWrapList()
                    }} className={styles.arrowBtn} xmlns="http://www.w3.org/2000/svg" width="78" height="41" viewBox="0 0 78 41" fill="none">
                    <path d="M1 1L39 39L77 1" stroke="#231F20" strokeWidth="2" />
                </svg>
            }
            <Link href={`/${locale}/contact?action=spread`} className={styles.mediaBtn} onClick={(e) => e.currentTarget.blur()}>{t("button")}</Link>
        </div>
    </section>
}
export default Media;


