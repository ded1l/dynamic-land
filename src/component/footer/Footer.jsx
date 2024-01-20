import React from 'react'
import styles from './footer.module.css'
import Container from '../Container/container'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className={styles.main}>
                <Container>
            <div>
                    
                <p>rights received <Link href='https://www.instagram.com/aon.iq?igsh=MjlrNDE3enU2eHli' alt='' ><span>AON</span></Link> 2024
                </p>
            <ul>
                <li><p>contact us</p></li>
              
            </ul>
    </div>
            </Container>
    </div>
  )
}

export default Footer