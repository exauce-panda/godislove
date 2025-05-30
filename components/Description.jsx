import styles from "./description.module.css"
import Programme from "./Programme.jsx"
import Image from "next/legacy/image";
import logo_un from "@/public/logos/facebook.png"
import logo_deux from "@/public/logos/instagram.png"
import logo_trois from "@/public/logos/youtube.png"
import logo_quatre from "@/public/logos/tiktok.png"
import logo from "@/public/logos/logoGilc.jpg"
import LatestVideos from "@/components/LatestVideo.jsx"
import Link from 'next/link'; // Importation du composant Link de Next.js pour la navigation
import { usePathname } from 'next/navigation'; // Importation du hook usePathname pour obtenir le chemin d'accès actuel
import { Lexend } from 'next/font/google';
import { EB_Garamond } from 'next/font/google';

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['400', '700'], // facultatif
  variable: '--font-lexend', // optionnel pour CSS variable
})

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'], // facultatif
  variable: '--font-eb-garamond', // optionnel pour CSS variable
})
export default function Description() {
    const pathname = usePathname(); // Utilisation de usePathname pour déterminer le chemin d'accès actif
    return(
     <div className={styles.bob}>
         <div className={styles.image}>
                <Image src={logo} alt="logo GILC" width={250} height={250}/>               
            </div>
        <div className={styles.titre}>
         <div className={styles.tritre_n_un}>
           <div className={ebGaramond.className}>GOD IS LOVE CENTER</div>
        </div>
        <div className={`${styles.mini_titre} ${ebGaramond.className}`}>UNE SEUL GRANDE FAMILLE</div> 
        <div className={styles.titre_n_deux}>           
        <div className={styles.desc}>
            <div className={lexend.className}>
            À l'église God is Love Center (GILC), nous sommes une seule et grande famille. Nous expérimentons l'amour de Dieu, car il nous aime plus que tout. Nous reconnaissons que Jésus-Christ est Dieu et qu'il est mort pour nos péchés. 
            </div>
            <div className={`${styles.verset} ${lexend.className}`}>Ephesiens 3:15</div>
        </div>  
        </div>              
        </div>     
        <div className={styles.reseaux}>
            <div className={`${styles.reseaux_deux} gap-4`}>
                <div className={styles.lien}>
                <a href="https://www.facebook.com/Godislovecenter?locale=fr_CA" target="_blank">
                <Image src={logo_un} alt="logo facebook" width={60} height={60} />
                </a>
                <a href="https://www.instagram.com/god_is_lovecenter?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
                <Image src={logo_deux} alt="logo instagram" width={60} height={60} />
                </a>
                <a href="https://youtube.com/@gilctv4549?si=l13vyKqNc89xk2_T" target="_blank">
                <Image src={logo_trois} alt="logo youtube" width={60} height={60} />
                </a>
                <a href="https://www.tiktok.com/@gilc_ottawa?_t=ZM-8so4Bh7Mcx4&_r=1" target="_blank">
                <Image src={logo_quatre} alt="logo TIKTOK" width={60} height={60} />
                </a>
                </div>
                <div>
                    <div className={lexend.className}>Nos dernières publications YouTube</div>
                 <LatestVideos/>
            </div>
            </div>
        </div>  
        <div>
            <Programme/>
        </div>
     </div>
    );
}