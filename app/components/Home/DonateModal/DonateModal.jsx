"use client";
import { useLocale, useTranslations} from "next-intl";
import Link from "next/link";
import styles from './DonateModal.module.scss';

const Modal = ({ onClose }) => {
    const t = useTranslations("Contact us");
    const b = useTranslations("bankDetails");
    const locale = useLocale();
    
    return (
        <div className={styles.modal} onClick={(e) => {e.stopPropagation()}}>
            <button className={styles.btnCross}
                onClick={onClose}
                aria-label="Close modal">
                <svg className={styles.iconCross} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.2932 20.0003L10 29.2935L10.7071 30.0006L20.0003 20.7074L29.2935 30.0006L30.0007 29.2935L20.7074 20.0003L30.0006 10.7071L29.2934 10L20.0003 19.2932L10.7072 10L10.0001 10.7071L19.2932 20.0003Z" fill="#231F20"/>
                </svg>
            </button>
            <h2 className={styles.modalTitle}>{t("donate")}</h2>
            <p className={styles.modalDesc}>{t("support")}</p>
            <ul className={styles.btnList}>
                <li><Link href='https://www.paypal.com/donate/?hosted_button_id=5C35VYTTJGBQE' target="_blank" rel="noopener noreferrer" className={styles.btn} onClick={(e) => e.currentTarget.blur()} aria-label="Donate by PayPall">
                        <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="30" height="36" viewBox="0 0 30 36" fill="none">
                            <g clipPath="url(#clip0_627_1101)">
                            <path opacity="0.8" d="M12.0416 8.13789C12.2228 8.05028 12.4244 8.00151 12.6358 8.00151H21.2608C22.2822 8.00151 23.2347 8.06925 24.1056 8.2115C24.3552 8.25215 24.5972 8.29911 24.8321 8.35285C25.067 8.40569 25.2953 8.4653 25.5164 8.53124C25.627 8.5642 25.7358 8.59807 25.8424 8.63375C26.2705 8.77917 26.6688 8.94852 27.0352 9.14677C27.4668 6.34548 27.0321 4.44061 25.5431 2.71504C23.9026 0.814692 20.9406 0 17.1499 0H6.14777C5.37329 0 4.71427 0.573536 4.5926 1.3512L0.0118839 30.8946C-0.079153 31.4781 0.364486 32.0051 0.944013 32.0051H7.7367L11.2756 9.18335C11.348 8.71549 11.6437 8.33208 12.0412 8.13789H12.0416Z" fill="white"/>
                            <path opacity="0.5" d="M26.9228 9.80131C25.4725 17.3765 20.508 19.9963 14.1674 19.9963H10.939C10.1645 19.9963 9.51034 20.5698 9.39 21.3474L7.26817 35.0279C7.18868 35.5377 7.57681 35.9997 8.08395 35.9997H13.8095C14.4872 35.9997 15.064 35.498 15.1697 34.8179L15.2257 34.5212L16.3048 27.5665L16.3745 27.1822C16.4802 26.502 17.0571 26.0003 17.7348 26.0003H18.5914C24.1375 26.0003 28.4807 23.7089 29.7494 17.0821C30.2792 14.3128 30.0052 12.0006 28.6037 10.3762C28.1787 9.8844 27.6511 9.47796 27.0361 9.14648C27.0028 9.36054 26.9663 9.57777 26.9233 9.80176L26.9228 9.80131Z" fill="white"/>
                            <path d="M25.5175 8.53168C25.2964 8.46575 25.0681 8.40614 24.8332 8.3533C24.5983 8.30046 24.3554 8.2535 24.1067 8.21285C23.2354 8.06924 22.2833 8.00195 21.261 8.00195H12.6369C12.4246 8.00195 12.2226 8.05073 12.0427 8.13924C11.6444 8.33343 11.3495 8.71594 11.2771 9.1847L9.44396 21.0041L9.39111 21.3486C9.51146 20.571 10.1656 19.9974 10.9401 19.9974H14.1686C20.5092 19.9974 25.4736 17.3786 26.9239 9.8025C26.967 9.5785 27.0034 9.36128 27.0367 9.14722C26.6695 8.94987 26.272 8.77961 25.8439 8.63555C25.7374 8.59988 25.6285 8.56465 25.518 8.53214" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_627_1101">
                            <rect width="30" height="36" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        PayPal
                    </Link></li>
                <li><Link href='https://www.buymeacoffee.com/engforuarmy' target="_blank" rel="noopener noreferrer" className={styles.btn} onClick={(e) => e.currentTarget.blur()} aria-label="Donate by BuyMeACoffee">
                        <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="27" height="39" viewBox="0 0 27 39" fill="none">
                            <g clipPath="url(#clip0_627_1107)">
                            <path d="M26.88 10.4244L26.6651 9.34212C26.4711 8.37051 26.0334 7.45204 25.0348 7.10103C24.7138 6.9889 24.3508 6.94161 24.1065 6.70956C23.8589 6.47701 23.7875 6.11479 23.7304 5.77987C23.6243 5.16561 23.5266 4.55134 23.4177 3.93854C23.3249 3.41056 23.2516 2.81726 23.0107 2.33462C22.6932 1.68477 22.0385 1.30451 21.3888 1.05393C21.0551 0.929613 20.7151 0.82431 20.3692 0.738508C18.7408 0.31096 17.0309 0.153494 15.3581 0.062329C13.3497 -0.0478488 11.3364 -0.0142105 9.3329 0.163244C7.84284 0.298285 6.27118 0.462089 4.8544 0.975927C4.33654 1.16459 3.80256 1.39177 3.4083 1.79007C2.92464 2.281 2.76831 3.04152 3.12006 3.65237C3.37068 4.08625 3.79572 4.39339 4.24714 4.59473C4.83339 4.85799 5.44749 5.0564 6.07577 5.18949C7.82623 5.57609 9.64069 5.72722 11.4288 5.7906C13.4123 5.87201 15.3972 5.80668 17.3729 5.599C17.86 5.54538 18.3466 5.48054 18.8322 5.40546C19.4053 5.31771 19.7736 4.57182 19.6041 4.05018C19.4023 3.42763 18.86 3.18728 18.2459 3.28137C17.4872 3.40179 16.6826 3.45688 15.9952 3.51879C14.0786 3.64896 12.1552 3.65188 10.2367 3.52854C9.60747 3.4871 8.9792 3.42909 8.35239 3.3545C8.21218 3.33841 8.05926 3.31403 7.93224 3.296C7.53652 3.2375 7.14422 3.16583 6.75338 3.0849C6.57262 3.04103 6.57262 2.78411 6.75338 2.74023H6.76168C7.21261 2.64273 7.66891 2.56473 8.12619 2.50135H8.12961C8.34311 2.48673 8.55807 2.44919 8.77108 2.42335C10.6241 2.23127 12.4884 2.16643 14.3503 2.22835C15.448 2.25906 16.5438 2.33706 17.6348 2.46235L18.0061 2.51257C18.4409 2.5774 18.8742 2.65541 19.3056 2.74803C19.9441 2.886 20.7629 2.93183 21.0482 3.62897C21.1376 3.85176 21.1787 4.09698 21.229 4.32952L21.7483 6.74125C21.7928 6.94941 21.6594 7.15368 21.4513 7.19804C21.4425 7.19999 21.4337 7.20146 21.4244 7.20292H21.4195C21.3594 7.21267 21.2974 7.21901 21.2373 7.22729C18.6759 7.55344 16.0958 7.71334 13.5134 7.70652C10.9549 7.70408 8.3988 7.53882 5.86129 7.21267C5.63314 7.18488 5.38398 7.14442 5.18221 7.11517C4.65116 7.03717 4.12549 6.93966 3.59786 6.85337C2.95786 6.74758 2.34718 6.80121 1.76923 7.11517C1.2968 7.37501 0.910853 7.77185 0.67 8.25448C0.419375 8.76783 0.346093 9.32701 0.235193 9.87936C0.122828 10.4317 -0.0515833 11.0284 0.0153476 11.5954C0.157026 12.8191 1.01345 13.8136 2.24654 14.0364C8.34262 15.1221 14.5638 15.3278 20.7185 14.6472C21.1499 14.598 21.5397 14.9076 21.5891 15.3385C21.5954 15.3951 21.5959 15.4521 21.59 15.5087L21.4743 16.6412L19.8166 32.7403C19.7497 33.4067 19.7399 34.0921 19.6129 34.7503C19.4141 35.7853 18.7125 36.421 17.688 36.653C16.7485 36.8661 15.791 36.9782 14.8286 36.986C13.7601 36.9924 12.6951 36.9455 11.6271 36.9504C10.4888 36.9568 9.09303 36.8529 8.2156 36.0081C7.44223 35.2636 7.33622 34.1004 7.2302 33.0942L6.03961 21.6976L5.5154 16.6699C5.45531 16.0995 5.04982 15.5404 4.41129 15.5681C3.86412 15.5925 3.2422 16.0557 3.30717 16.6714L3.67847 20.2219L5.22374 35.0291C5.46313 37.2132 7.13542 38.3896 9.20686 38.7211C10.415 38.9161 11.6545 38.9551 12.8822 38.9746C14.4553 39.0004 16.0446 39.0609 17.5918 38.7762C19.8845 38.3569 21.6062 36.8295 21.8519 34.4583C22.4054 29.0435 22.9643 23.6306 23.5193 18.2158L23.8696 14.8242C23.9048 14.479 24.1632 14.1977 24.5047 14.1319C25.1594 14.0052 25.7862 13.7873 26.2537 13.29C26.9948 12.4968 27.1429 11.4633 26.8805 10.42V10.4215L26.88 10.4244ZM24.473 11.6788C24.237 11.9016 23.8818 12.0054 23.5315 12.0576C19.5973 12.6411 15.6073 12.9351 11.6305 12.8049C8.78378 12.7074 5.96828 12.392 3.15084 11.9957C2.87383 11.9567 2.57582 11.9064 2.38529 11.7031C2.02718 11.3195 2.20452 10.5492 2.29735 10.0861C2.38187 9.66339 2.54504 9.09642 3.05117 9.03645C3.8392 8.94383 4.75474 9.2768 5.53641 9.3938C6.47588 9.53664 7.41878 9.65218 8.36509 9.73847C12.4039 10.1056 16.5106 10.0471 20.5333 9.5108C21.2661 9.4133 21.9975 9.29971 22.7235 9.16954C23.3732 9.05254 24.0914 8.83462 24.4822 9.50447C24.7524 9.96126 24.7886 10.5721 24.746 11.0874C24.7333 11.3122 24.6347 11.5237 24.471 11.6788H24.4725H24.473ZM14.4431 18.0164C13.0395 18.6175 11.4468 19.2971 9.38029 19.2971C8.51654 19.2952 7.65719 19.1762 6.82519 18.9447L8.25322 33.5764C8.35923 34.8439 9.42084 35.8189 10.6959 35.8189C10.6959 35.8189 12.72 35.9247 13.3961 35.9247C14.1241 35.9247 16.3045 35.8189 16.3045 35.8189C17.5796 35.8189 18.6397 34.8439 18.7457 33.5764L20.2763 17.407C19.5855 17.1579 18.8576 17.0273 18.1233 17.0204C16.7783 17.0204 15.6952 17.4821 14.4431 18.0164Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_627_1107">
                            <rect width="27" height="39" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        BuyMeACoffee
                    </Link>
                </li>
            </ul>
            <div className={styles.infoCard}>
                {locale === 'uk' ? 
                <><h3 className={styles.infoTitle}>{b("title")}</h3>
                <p className={styles.infoItem}>{b("p-1-title")} <br className={styles.dived}/>{b("p-1-desc")}</p>
                <p className={styles.infoItem}>{b("p-2-title")} <br className={styles.dived}/>{b("p-2-desc")}</p>
                <p className={styles.infoItem}>{b("p3")}</p>
                <p className={styles.infoItem}>{b("p-4-title")} <br className={styles.dived}/>{b("p-4-desc")}</p></>
                :
                <><h3 className={styles.infoTitle}>{b("title")}</h3>
                <p className={styles.infoItem}>{b("p-1")}</p>
                <p className={styles.infoItem}>{b("p-02")}</p>
                <p className={styles.infoItem}>
                    <p>{b("p-2-1")}</p>
                    <span>{b("p-2-2")}</span>
                </p>
                <p className={styles.infoItem}>{b("p-3-1")}<span style={{width: "230px", display: "block"}}>{b("p-3-2")}</span></p>
                <p className={styles.infoItem}>{b("p-4")}</p>
                <p className={styles.infoItem}>{b("p-5")}</p>
                <p className={styles.infoItem} style={{maxWidth: "330px"}}>{b("p-6")}</p>
                <p className={styles.infoItem}>{b("p-7")}</p>
                </>
                }
            </div>
          </div>
    )
}
export default Modal;
