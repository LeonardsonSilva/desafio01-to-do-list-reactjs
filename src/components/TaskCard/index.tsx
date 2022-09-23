import styles from './styles.module.css'
import {Trash} from 'phosphor-react'

export interface TaskProps{
  id: string;
  description: string;
  isCompleted: boolean;
  onDeleteTask: (taskId: string) => void;
}

export function TaskCard({id, description, onDeleteTask}: TaskProps){
  function handleDeleteTask(){
    onDeleteTask(id)
  }

  return(
    <div className={styles.content}>
        <button className={styles.checkContainer}>
          <div/>
        </button>
        <p>
          {description}
        </p>
        <button onClick={handleDeleteTask} className={styles.deleteButton}>
          <Trash size={20}/>
        </button>
    </div>
  )
}
