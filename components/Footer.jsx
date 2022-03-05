import React from 'react'
import styles from "../styles/Footer.module.scss"
import Image from "next/image"
function Footer() {
  return (
      <div className={styles.footer}>
       <div className={styles.wrapper}>
           <div className={styles.cols}>
              
  <div className={styles.item}>
 <p> 
London <br />
35a St Georges Road,  <br />
London, SE1 
 </p>
    </div>
<div className={styles.item}> 
       <p> 
        Contact Us @
     </p>
  <div className={styles.icon}>
 
   <Image src="/images/icons/emailIcon.svg" alt="" width="50px" height="50px" />

   <Image src="/images/icons/instagram.svg" alt="" width="50px" height="50px" />

   <Image src="/images/icons/twitter.svg" alt=""  width="50px" height="50px" />
 
         </div>
         </div>
           </div>
    </div>
    </div>
  )
}

export default Footer