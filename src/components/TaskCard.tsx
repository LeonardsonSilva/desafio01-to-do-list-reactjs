import styles from './TaskCard.module.css'
import {Trash} from 'phosphor-react'

export interface TaskProps{
  id: string;
  description: string;
  isCompleted: boolean;
  onDeleteTask: (taskId: string) => void;
  onCheckTask: (taskId: string) => void;
}

export function TaskCard({id, description, onDeleteTask, onCheckTask, isCompleted}: TaskProps){

  function handleDeleteTask(){
    onDeleteTask(id)
  }

  function handleCheckTask(){
    onCheckTask(id);
  }

  return(
    <div className={styles.content}>
        <button onClick={handleCheckTask} className={styles.checkContainer}>
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
