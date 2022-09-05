import styles from './TaskCard.module.css'
import {Trash} from 'phosphor-react'

export function TaskCard(){
  return(
    <div className={styles.content}>
        <button className={styles.checkContainer}>
          <div/>
        </button>
        <p>
          Lorem, ipsum dolor sit amda minus amet doloribus magnam veniam ratione, commodi,
          architecto voluptates sit accusantium esse eligendi odit qui?
        </p>
        <button className={styles.deleteButton}>
          <Trash size={20}/>
        </button>
    </div>
  )
}
