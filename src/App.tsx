import './global.css'
import {Header} from './components/Header'
import styles from './App.module.css'
import {PlusCircle} from 'phosphor-react'
import { TaskCard } from './components/TaskCard'
export function App() {

  return (
    <>
      <Header/>

      <div className={styles.wrapper}>
        <form action="#" className={styles.newTaskForm}>
          <input type="text" placeholder='Adicione uma nova tarefa'/>
          <button type='submit' >
            Criar <PlusCircle size={16}/>
          </button>
        </form>

        <div className={styles.taskInfo}>
          <div className={styles.taskInfoCreated}>
            Tarefas criadas <span className={styles.numberTasks}>5</span>
          </div>
          <div className={styles.taskInfoCompleted}>
            Concluídas <span className={styles.numberTasks}>2 de 5</span>
          </div>
        </div>

        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
      </div>
    </>
  )
}
