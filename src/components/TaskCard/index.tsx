import styles from './styles.module.css'
import {Check, Trash} from 'phosphor-react'

export interface TaskProps{
  id: string;
  description: string;
  isCompleted: boolean;
  onDeleteTask: (taskId: string) => void;
  onToggleCheckTask: (taskId: string) => void;
}

export function TaskCard({id, description, isCompleted, onDeleteTask, onToggleCheckTask}: TaskProps){
  function handleDeleteTask(){
    onDeleteTask(id)
  }

  function handleCheckTask(){
    onToggleCheckTask(id)
  }

  return(
    <div className={styles.content}>
        <button onClick={handleCheckTask} className={styles.checkContainer}>
          {/* essa div foi adicionada para poder fazer a estilização do hover e do pointer */}

          {isCompleted ? <Check className={styles.checked}/> : <div className={styles.unchecked}/>}

        </button>
        <p className={isCompleted ? styles.scribbledText : ''}>
          {description}
        </p>
        <button onClick={handleDeleteTask} className={styles.deleteButton}>
          <Trash size={20}/>
        </button>
    </div>
  )
}
