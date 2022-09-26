import { Clipboard } from 'phosphor-react'
import styles from './styles.module.css'

export function EmptyList(){
  return(
    <div className={styles.container}>
      <Clipboard/>
      <p>
        <span>Você ainda não tem tarefas cadastradas</span>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </p>
    </div>
  )
}
