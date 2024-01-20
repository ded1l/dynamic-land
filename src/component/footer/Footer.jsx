import React from 'react'
import styles from './footer.module.css'
import Container from '../Container/container'
const Footer = () => {
  return (
    <div className={styles.main}>
                <Container>
            <div>
                    
                <p>rights received <span>AON</span>
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