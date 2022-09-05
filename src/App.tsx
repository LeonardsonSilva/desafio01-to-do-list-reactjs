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

        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
      </div>
    </>
  )
}
