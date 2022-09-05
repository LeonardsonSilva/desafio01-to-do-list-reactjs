import './global.css'
import {Header} from './components/Header'
import styles from './App.module.css'
import {PlusCircle} from 'phosphor-react'
export function App() {

  return (
    <>
      <Header/>

      <div className={styles.wrapper}>
        <form action="#" className={styles.formNewTask}>
          <input type="text" placeholder='Adicione uma nova tarefa'/>
          <button type='submit' >
            Criar <PlusCircle size={16}/>
          </button>
        </form>
      </div>

    </>
  )
}
