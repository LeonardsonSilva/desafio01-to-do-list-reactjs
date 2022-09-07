import styles from './TaskCard.module.css'
import {Trash} from 'phosphor-react'

export interface TaskProps{
  id: string;
  description: string;
  isCompleted: boolean;
}

export function TaskCard({description, }: TaskProps){
  return(
    <div className={styles.content}>
        <button className={styles.checkContainer}>
          <div/>
        </button>
        <p>
          {description}
        </p>
        <button className={styles.deleteButton}>
          <Trash size={20}/>
        </button>
    </div>
  )
}
